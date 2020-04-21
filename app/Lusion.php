<?php

namespace App;

use App\Traits\PackageItem;
use Illuminate\Database\Eloquent\Model;

class Lusion extends Model
{
    use PackageItem;
    protected $fillable = ['name', 'type', 'package_id'];
}
