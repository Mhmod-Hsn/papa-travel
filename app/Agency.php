<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Agency extends Model
{
    protected $fillable = ['name', 'address', 'email', 'phone', 'description', 'working_hours', 'location_embed', 'homepage'];

    protected $with = ['image'];

    public function users()
    {
        return $this->hasMany(User::class);
    }

    public function image()
    {
        return $this->morphOne(Media::class, 'mediable');
    }

    public function packages()
    {
        return $this->hasMany(Package::class);
    }

    public function scopeName($query, $name)
    {
        $query->where('name', 'like', "%$name%");
    }
}
