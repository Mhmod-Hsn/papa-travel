<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Media extends Model
{
    protected $fillable = ['name', 'old_name', 'url'];

    public function mediable()
    {
        return $this->morphTo();
    }

    public function getUrlAttribute($value)
    {
        return config('paths.image.get').$value;
    }
}
