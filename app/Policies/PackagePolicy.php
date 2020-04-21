<?php

namespace App\Policies;

use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class PackagePolicy
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
        return request()->user()->hasPermissionTo('browse-package');
    }

    public function store()
    {
        return request()->user()->hasPermissionTo('create-package');
    }

    public function show()
    {
        return request()->user()->hasPermissionTo('view-package');
    }

    public function update()
    {
        return request()->user()->hasPermissionTo('edit-package');
    }

    public function destroy()
    {
        return request()->user()->hasPermissionTo('delete-package');
    }
}
