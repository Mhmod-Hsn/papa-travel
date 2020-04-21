<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CustomPackage extends Model
{
    protected $with = ['destinations'];

    protected $fillable = ['travel_date','flexibility','budget','room_type','hotel_rating','hotel_location','notes'];

    public function booking()
    {
        return $this->belongsTo(Booking::class, 'booking_id');
    }

    public function destinations()
    {
        return $this->hasMany(Destination::class);
    }
}
