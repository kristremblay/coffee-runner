<?php

namespace Tests\Feature;

use Carbon\Carbon;
use Tests\TestCase;

use App\CoffeeRun;
use App\User;

class CoffeeRunTest extends TestCase
{
    public function testUserCanCreateCoffeeRun()
    {
        $title = 'Getting the Good Stuff';

        $response = $this->post('/coffee-runs/store', [
            'data' => [
                'title' => $title,
                'ends_at' => Carbon::now()->addMinutes(30),
                'slots' => 5,
            ],
        ]);

        $response->assertJsonStructure([
            'id',
            'user_id',
            'title',
            'ends_at',
        ]);
    }

    public function testUserCanQuerySpecificCoffeeRun(){
        $coffeeRun = CoffeeRun::inRandomOrder()->first();
        $response = $this->get("/coffee-runs/{$coffeeRun->id}/show");

        $response->AssertStatus(200);
    }

    public function testUserCanCancelOwnCoffeeRunOnly(){
        $currentUser = User::find(auth()->user()->id);

        // Grab one run for current user and one for another user
        $coffeeRun = [
            'own' => $currentUser->coffeeRuns->first(),
            'other' => CoffeeRun::where('user_id', '<>', $currentUser->id)->first(),
        ];

        $response = [
            'own' => $this->post('/coffee-runs/destroy', [
                'data' => [
                    'id' => $coffeeRun['own']->id,
                ]
            ]),

            'other' => $this->post('/coffee-runs/destroy', [
                'data' => [
                    'id' => $coffeeRun['other']->id,
                ],
            ]),
        ];

        $id = [
            'own' => $response['own']->json('id'),
            'other' => $response['other']->json('id'),
        ];

        $this->assertNull(CoffeeRun::find($id['own']));
        $this->assertNotNull(CoffeeRun::find($id['other']));
    }
}
