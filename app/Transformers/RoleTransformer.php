<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use Spatie\Permission\Models\Role;

class RoleTransformer extends TransformerAbstract
{
    /**
     * A Fractal transformer.
     *
     * @param Role $role
     * @return array
     */
    public function transform(Role $role)
    {
        return $role->toArray();
    }
}
