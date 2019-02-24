<?php

namespace Tests;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;
use App\User;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication, DatabaseMigrations;

    protected function setUp()
    {
        parent::setUp();

        $this->artisan("db:seed");
        $user = User::all()->first();

        $this->be($user);
    }
}
