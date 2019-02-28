<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('user_id');
            $table->unsignedInteger('coffee_run_id');
            $table->boolean('paid')->default(false);
            $table->json('details');
            $table->timestamps();
        });

        Schema::table('orders', function(Blueprint $table){
            $table->foreign('user_id')->references('id')->on('users')->onDelete("cascade");
            $table->foreign('coffee_run_id')->references('id')->on('coffee_runs')->onDelete("cascade");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
}
