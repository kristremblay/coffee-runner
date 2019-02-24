<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CoffeeRun extends Model
{
    protected $guarded = ['id', 'created_at', 'updated_at'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
