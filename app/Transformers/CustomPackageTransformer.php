<?php

namespace App\Transformers;

use App\CustomPackage;
use League\Fractal\TransformerAbstract;

class CustomPackageTransformer extends TransformerAbstract
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
     * @param CustomPackage $customPackage
     * @return array
     */
    public function transform(CustomPackage $customPackage)
    {
        return $customPackage->toArray();
    }
}
