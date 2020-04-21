<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = ['title', 'description'];

    protected $with = ['image'];

    public function image()
    {
        return $this->morphOne(Media::class, 'mediable');
    }
}
