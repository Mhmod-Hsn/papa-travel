<?php

namespace App\Transformers;

use App\Package;
use League\Fractal\TransformerAbstract;

class PackageTransformer extends TransformerAbstract
{
    /**
     * List of resources to automatically include
     *
     * @var array
     */
    protected $defaultIncludes = [
        //
    ];

    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $availableIncludes = [
        //
    ];

    /**
     * A Fractal transformer.
     *
     * @param Package $package
     * @return array
     */
    public function transform(Package $package)
    {
        return $package->toArray();
    }
}
