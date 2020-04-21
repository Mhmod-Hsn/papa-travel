<?php

namespace App\Policies;

use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class InsurancePolicy
{
    use HandlesAuthorization;

    /**
     * Create a new policy instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function index()
    {
        return request()->user()->hasPermissionTo('browse-insurance');
    }

    public function store()
    {
        return request()->user()->hasPermissionTo('create-insurance');
    }

    public function show()
    {
        return request()->user()->hasPermissionTo('view-insurance');
    }

    public function update()
    {
        return request()->user()->hasPermissionTo('edit-insurance');
    }

    public function destroy()
    {
        return request()->user()->hasPermissionTo('delete-insurance');
    }
}
