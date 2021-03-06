<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect()->to('/login');
});
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::middleware(['auth:web'])->group(function(){
    Route::prefix('coffee-runs')->group(function(){
       Route::get('/', 'CoffeeRunController@index')->name('coffee-runs.index');
       Route::get('/{id}/show', 'CoffeeRunController@show')->name('coffee-runs.show');
       Route::get('/{coffeeRunId}/orders', 'OrderController@index')->name('coffee-runs.orders.list');
       Route::post('/store', 'CoffeeRunController@store')->name('cofffee-runs.store');
       Route::post('/destroy', 'CoffeeRunController@destroy')->name('coffee-runs.destroy');
       Route::post('/{coffeeRunId}/orders/store', 'OrderController@store')->name('coffee-runs.orders.store');
    });

    Route::prefix('/user')->group(function(){
        // TODO: Extract this to a UserController method for tidyness.
        Route::get('/info', function(){
            return App\User::select('id', 'name', 'email')
                ->where('id', auth()->user()->id)
                ->first();
        })->name('user.info');
    });
});
