<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\User::class)->create([
            'name' => 'Kris Tremblay',
            'email' => 'kris@cranked.co',
        ]);

        factory(App\User::class)->create([
            'name' => 'Frank N. Stein',
            'email' => 'XXmadscientistXX@transylvaniansmash.com',
        ]);
    }
}
