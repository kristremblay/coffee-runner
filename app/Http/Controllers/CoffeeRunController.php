<?php

namespace App\Http\Controllers;

use App\Actions\CancelCoffeeRun;
use App\Actions\RetrieveCoffeeRunDetails;
use App\CoffeeRun;
use App\Actions\CreateCoffeeRun;
use App\Http\Requests\CancelCoffeeRunRequest;
use App\Http\Requests\StoreCoffeeRunRequest;
use Illuminate\Http\Request;

class CoffeeRunController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return CoffeeRun[]|\Illuminate\Database\Eloquent\Builder[]|\Illuminate\Database\Eloquent\Collection
     */
    public function index()
    {
        return CoffeeRun::with("user:id,name")
            ->select('id', 'user_id', 'title', 'ends_at', 'slots')
            ->orderBy('ends_at', 'ASC')
            ->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param StoreCoffeeRunRequest $request
     * @param CreateCoffeeRun $action
     * @return CoffeeRun
     */
    public function store(StoreCoffeeRunRequest $request, CreateCoffeeRun $action)
    {
        return $action->execute($request->data);
    }


    /**
     * Retrieve details for specific coffee run.
     * @param $id
     * @param RetrieveCoffeeRunDetails $action
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id, RetrieveCoffeeRunDetails $action)
    {
        return $action->execute($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\CoffeeRun  $coffeeRun
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CoffeeRun $coffeeRun)
    {
        //
    }

    /**
     * Destroy the specified resource.
     * @param CancelCoffeeRunRequest $request
     * @param CancelCoffeeRun $action
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(CancelCoffeeRunRequest $request, CancelCoffeeRun $action)
    {
        return $action->execute($request->data['id']);
    }
}
