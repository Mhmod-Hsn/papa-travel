<?php

namespace App\Transformers;

use App\Agency;
use League\Fractal\TransformerAbstract;

class AgencyTransformer extends TransformerAbstract
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
        'users'
    ];

    /**
     * A Fractal transformer.
     *
     * @param Agency $agency
     * @return array
     */
    public function transform(Agency $agency)
    {
        return $agency->toArray();
    }

    public function includeUsers(Agency $agency)
    {
        return $this->collection($agency->users, new UserTransformer());
    }
}
