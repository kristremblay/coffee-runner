<?php

namespace App\Actions;

use App\CoffeeRun;
use Carbon\Carbon;

class CreateCoffeeRun{
    /**
     * Create and store a new CoffeeRun.
     * @param array $data
     * @return CoffeeRun
     */
    public function execute(array $data) : CoffeeRun {

        $user_id = auth()->user()->id;
        $ends_at = Carbon::parse($data['ends_at']);

        $coffeeRun = new CoffeeRun([
            'user_id' => $user_id,
            'title' => $data['title'],
            'ends_at' => $ends_at,
            'slots' => $data['slots'],
        ]);

        $coffeeRun->save();

        return $coffeeRun;
    }
}