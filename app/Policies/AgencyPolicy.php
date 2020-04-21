<?php

namespace App\Policies;

use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class AgencyPolicy
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
        return request()->user()->hasPermissionTo('browse-agency');
    }

    public function store()
    {
        return request()->user()->hasPermissionTo('create-agency');
    }

    public function show()
    {
        return request()->user()->hasPermissionTo('view-agency');
    }

    public function update()
    {
        return request()->user()->hasPermissionTo('edit-agency');
    }

    public function destroy()
    {
        return request()->user()->hasPermissionTo('delete-agency');
    }
}
