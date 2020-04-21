<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    protected $fillable = ['name', 'region'];

    public function cities()
    {
        return $this->hasMany(City::class);
    }
}
