<?php

namespace Tests;

use Illuminate\Foundation\Testing\TestCase as BaseTestCase;
use App\User;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;

    protected function setUp()
    {
        parent::setUp();
        if(User::count() > 0){
            $user = User::all()->first();
        }
        else{
            $user = factory(User::class)->create(['name' => 'Coffee King']);
        }

        $this->be($user);
    }
}
