<?php

namespace Tests\Feature;

use Tests\TestCase;

use App\Order;
use App\CoffeeRun;
use App\User;

class OrdersTest extends TestCase
{
    protected $coffeeRun;
    protected $orderUserId;
    protected $orderCount;

    public function setUp()
    {
        parent::setUp();
        $slots = rand(2,8);
        $this->orderCount = rand(1, $slots - 1);
        $this->coffeeRun = factory(CoffeeRun::class)->create([
            'user_id' => auth()->user()->id,
            'slots' => $slots
        ]);

        $this->orderUserId = User::where('id', '<>', auth()->user()->id)->first()->pluck('id');

        factory(Order::class, $this->orderCount)->create([
            'user_id' => $this->orderUserId,
            'coffee_run_id' => $this->coffeeRun->id,
        ]);
    }
    /**
     * Can create and save a new order.
     */
    public function testUserCanCreateOrders()
    {
        $response = $this->post("/coffee-runs/{$this->coffeeRun->id}/orders/store", [
            'data' => factory(Order::class)->make([
                'coffee_run_id' => $this->coffeeRun->id,
            ])->toArray(),
        ]);

        $response->assertStatus(201);
    }

    public function testUserCanUpdateOrder()
    {
        $this->assertTrue(true);
    }

    public function testUserCanDeleteOrder()
    {
        $this->assertTrue(true);
    }

    /**
     * Can return a list of open orders.
     */
    public function testUserCanRetrieveAListOfOpenOrders()
    {
        // Act
        $response = $this->get("/coffee-runs/{$this->coffeeRun->id}/orders");

        // Assert
        $this->assertEquals($this->orderCount, $this->coffeeRun->orders->count());

        $response->assertStatus(200);
        $response->assertJsonCount($this->orderCount);
        $response->assertJsonStructure([
            ['id', 'user_id', 'coffee_run_id', 'details',],
        ]);
    }
}
