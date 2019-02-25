<?php

namespace Tests\Feature;

use Tests\TestCase;

use App\Order;

class OrdersTest extends TestCase
{
    /**
     * Can create and save a new order.
     */
    public function testUserCanCreateOrders()
    {
        // change this
        $this->assertTrue(true);
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
        /*$response = $this->get('/orders/list');

        // Assert
        $response->assertJsonStructure([
            'data' => [
                'id',
                'title',
                'start_date',
                'end_date',
            ],
        ]);*/

        $this->assertTrue(true);
    }
}
