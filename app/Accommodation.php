<?php

namespace App;

use App\Traits\PackageItem;
use Illuminate\Database\Eloquent\Model;

class Accommodation extends Model
{
    use PackageItem;

    protected $fillable = ['city', 'nights', 'hotel', 'rate', 'package_id'];
}
