<?php

use Faker\Generator as Faker;
use App\Order;

$factory->define(Order::class, function (Faker $faker) {
    return [
        'user_id' => auth()->user()->id,
        'details' => json_encode([]),
    ];
});
