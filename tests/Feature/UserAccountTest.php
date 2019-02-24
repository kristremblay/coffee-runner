<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\TestCase;
use App\User;

class UserAccountTest extends TestCase
{
    public function testCanGetUserAccountInfoFromWebRoute(){
        $currentUser = auth()->user();

        $response = $this->get('/user/info');

        $this->assertEquals($currentUser->id, $response->json('id'));
    }
}
