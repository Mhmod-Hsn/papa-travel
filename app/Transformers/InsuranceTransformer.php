<?php

namespace App\Transformers;

use App\Insurance;
use League\Fractal\TransformerAbstract;

class InsuranceTransformer extends TransformerAbstract
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
     * @param Insurance $insurance
     * @return array
     */
    public function transform(Insurance $insurance)
    {
        return $insurance->toArray();
    }
}
