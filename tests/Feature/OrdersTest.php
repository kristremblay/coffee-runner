<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\TestCase;

use App\Order;

class OrdersTest extends TestCase
{
    use DatabaseMigrations;

    protected const orderLimit = 20;

    protected function setUp()
    {
        parent::setUp();
        factory(Order::class, self::orderLimit)->create();
    }

    /**
     * Can create and save a new order.
     */
    public function testUserCanCreateOrders()
    {
        // change this
        $this->assertEquals(self::orderLimit, Order::count());
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
        $response = $this->get('/orders/list');

        // Assert
        $response->assertJsonStructure([
            'data' => [
                'id',
                'title',
                'start_date',
                'end_date',
            ],
        ]);
    }
}
