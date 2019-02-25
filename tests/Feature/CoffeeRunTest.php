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
            'title' => $title,
            'ends_at' => Carbon::now()->addMinutes(30),
            'slots' => 5,
        ]);

        $response->assertJsonStructure([
            'id',
            'user_id',
            'title',
            'ends_at',
        ]);
    }
}
