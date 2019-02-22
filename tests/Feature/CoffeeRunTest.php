<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\TestCase;

use App\CoffeeRun;

class CoffeeRunTest extends TestCase
{
    use DatabaseMigrations;

    protected const coffeeRunLimit = 10;

    protected function setUp()
    {
        parent::setUp();
        factory(CoffeeRun::class, self::coffeeRunLimit)->create();
    }

    public function testUserCanGetListOfCoffeeRuns()
    {
        $response = $this->json('GET', '/coffee-runs');

        $response->assertJsonCount(self::coffeeRunLimit);

        $response->assertJsonStructure([
            '*' => [
                'id',
                'title',
                'ends_at',
                'status',
                'user' => [
                    'id',
                    'name',
                ],
            ],
        ]);
    }

    public function testUserCanCreateCoffeeRun()
    {
        $title = 'Getting the Good Stuff';

        $coffeeRun = factory(CoffeeRun::class)->create([
            'title' => $title,
        ]);

        $this->assertEquals($title, CoffeeRun::find($coffeeRun->id)->pluck('title'));
    }
}
