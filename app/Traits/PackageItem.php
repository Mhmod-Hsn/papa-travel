<?php

namespace App\Traits;

use App\Package;

trait PackageItem{
    public function package()
    {
        return $this->belongsTo(Package::class, 'package_id');
    }
}
