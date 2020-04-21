<?php

namespace App;

use App\Traits\PackageItem;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use PackageItem;

    protected $with = ['package'];

    protected $fillable = ['name', 'email', 'phone', 'adults', 'children', 'infants'];

    public function customPackage()
    {
        return $this->hasOne(CustomPackage::class);
    }

    public function scopeName($query, $name)
    {
        $query->orwhere('name', 'like', "%$name%");
    }

    public function scopeId($query, $id)
    {
        $query->orwhere('id', 'like', "%$id%");
    }

    public function scopeEmail($query, $email)
    {
        $query->orwhere('email', 'like', "%$email%");
    }

    public function scopeTelephone($query, $telephone)
    {
        $query->orwhere('telephone', 'like', "%$telephone%");
    }
}
