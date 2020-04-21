<?php

namespace App;

use App\Traits\PackageItem;
use Illuminate\Database\Eloquent\Model;

class Schedule extends Model
{
    use PackageItem;

    protected $fillable = ['day', 'time', 'title', 'description', 'package_id'];
}
