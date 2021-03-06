<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CoffeeRun extends Model
{
    protected $guarded = ['id', 'created_at', 'updated_at'];

    /**
     * Get the user who owns the coffee run.
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get all orders associated with this run.
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function orders(){
        return $this->hasMany(Order::class);
    }
}
