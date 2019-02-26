<?php

namespace App\Actions;

use App\CoffeeRun;

class CancelCoffeeRun
{
    /**
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function execute($id) : \Illuminate\Http\JsonResponse{
        $coffeeRun = CoffeeRun::findOrFail($id);
        $responseJson = [
            'id' => $coffeeRun->id,
            'success' => false,
        ];

        if(auth()->check() && auth()->user()->id === $coffeeRun->user->id){
            CoffeeRun::destroy($id);
            $responseJson['success'] = false;
        }

        return response()->json($responseJson);
    }
}