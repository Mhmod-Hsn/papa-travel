<?php

namespace App\Policies;

use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class CustomPackagePolicy
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
        return request()->user()->hasPermissionTo('browse-custom-package');
    }

    public function store()
    {
        return request()->user()->hasPermissionTo('create-custom-package');
    }

    public function show()
    {
        return request()->user()->hasPermissionTo('view-custom-package');
    }

    public function update()
    {
        return request()->user()->hasPermissionTo('edit-custom-package');
    }

    public function destroy()
    {
        return request()->user()->hasPermissionTo('delete-custom-package');
    }
}
