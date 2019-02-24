<?php

use Illuminate\Database\Seeder;
use App\CoffeeRun;

class CoffeeRunsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(CoffeeRun::class, 30)->create();
    }
}
