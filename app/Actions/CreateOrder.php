<?php

namespace App\Actions;

use App\Order;

class CreateOrder{
    /**
     * Create and store a new Order.
     * @param array $data
     * @return Order
     */
    public function execute(array $data) : Order {
        $order = new Order($data);

        $order->save();

        return $order;
    }
}