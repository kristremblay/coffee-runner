<?php

namespace App\Http\Controllers;

use App\Actions\CreateOrder;
use App\Http\Requests\StoreOrderRequest;
use App\Order;
use App\CoffeeRun;
use Illuminate\Contracts\Support\Responsable;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    /**
     * Display a list of all orders for a given coffee run.
     * @param $coffeeRunId
     * @return \Illuminate\Http\Response
     */
    public function index($coffeeRunId)
    {
        return CoffeeRun::findOrFail($coffeeRunId)->orders;
    }

    /**
     * Store a newly created Order.
     * @param StoreOrderRequest $request
     * @param CreateOrder $action
     * @return Order|\Illuminate\Http\JsonResponse
     */
    public function store(StoreOrderRequest $request, CreateOrder $action)
    {
        $coffeeRun = CoffeeRun::find($request->data['coffee_run_id']);

        if($coffeeRun->slots > $coffeeRun->orders->count()){
            return $action->execute($request->data);
        }
        else{
            return response()->json([
                'error' => 'no-slots',
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function show(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Order $order)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function destroy(Order $order)
    {
        //
    }
}
