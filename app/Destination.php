<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Destination extends Model
{
    protected $fillable = ['country', 'city', 'nights'];

    public function customPackage()
    {
        return $this->belongsTo(CustomPackage::class, 'custom_package_id');
    }
}
