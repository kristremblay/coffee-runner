<?php

namespace App\Http\Controllers;

use App\CoffeeRun;
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
            ->select('id', 'user_id', 'title', 'ends_at', 'status')
            ->where('status', '=', true)
            ->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\CoffeeRun  $coffeeRun
     * @return \Illuminate\Http\Response
     */
    public function show(CoffeeRun $coffeeRun)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\CoffeeRun  $coffeeRun
     * @return \Illuminate\Http\Response
     */
    public function edit(CoffeeRun $coffeeRun)
    {
        //
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
     * Remove the specified resource from storage.
     *
     * @param  \App\CoffeeRun  $coffeeRun
     * @return \Illuminate\Http\Response
     */
    public function destroy(CoffeeRun $coffeeRun)
    {
        //
    }
}
