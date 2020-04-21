<?php

namespace App\Transformers;

use App\Accommodation;
use League\Fractal\TransformerAbstract;

class AccommodationTransformer extends TransformerAbstract
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
     * @param Accommodation $accommodation
     * @return array
     */
    public function transform(Accommodation $accommodation)
    {
        return $accommodation->toArray();
    }
}
