<?php

use Faker\Generator as Faker;
use App\CoffeeRun;
use App\User;
use Carbon\Carbon;

$factory->define(CoffeeRun::class, function (Faker $faker) {
    return [
        'user_id' => User::inRandomOrder()->first(),
        'title' => $faker->sentence(3),
        'ends_at' => Carbon::now()->addMinutes(rand(30,600)),
        'slots' => rand(1,12),
    ];
});
