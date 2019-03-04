<?php

namespace App\Actions;

use App\CoffeeRun;

class RetrieveCoffeeRunDetails
{
    /**
     * Get details of a given coffee run.  Users should only be able to see their own orders unless they own the coffee
     * run, in which case they will see all of them.
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function execute($id) : \Illuminate\Http\JsonResponse {
        // TODO: Put auth check in a trait and refactor other single action classes.
        if(auth()->check()){
            $coffeeRun = CoffeeRun::findOrFail($id);
            $userId = auth()->user()->id;
            $owner = $userId === $coffeeRun->user->id;
            $orderCount = $coffeeRun->orders->count();

            if($owner){
                $orders = $coffeeRun->orders;
            }
            else{
                $orders = $coffeeRun->orders()->where('user_id', $userId);
                if($orders->count() === 0){
                    $orders = [];
                }
            }

            return response()->json([
                'owner' => $owner,
                'coffeeRun' => $coffeeRun,
                'orders' => $orders,
                'orderCount' => $orderCount,
            ]);
        }
    }
}