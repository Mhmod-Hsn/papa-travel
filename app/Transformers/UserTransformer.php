<?php

namespace App\Transformers;

use App\User;
use League\Fractal\TransformerAbstract;

class UserTransformer extends TransformerAbstract
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
        'agency'
    ];

    /**
     * A Fractal transformer.
     *
     * @param User $user
     * @return array
     */
    public function transform(User $user)
    {
        $data = $user->toArray();
        $data['image'] = $data['image']? config('paths.image.get').$data['image']:null;

        return $data;
    }

    public function includeAgency(User $user)
    {
        return $this->item($user->agency, new AgencyTransformer());
    }
}
