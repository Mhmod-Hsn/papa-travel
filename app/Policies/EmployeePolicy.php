<?php

namespace App\Policies;

use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class EmployeePolicy
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
        return request()->user()->hasPermissionTo('browse-employee');
    }

    public function store()
    {
        return request()->user()->hasPermissionTo('create-employee');
    }

    public function show()
    {
        return request()->user()->hasPermissionTo('view-employee');
    }

    public function update()
    {
        return request()->user()->hasPermissionTo('edit-employee');
    }

    public function destroy()
    {
        return request()->user()->hasPermissionTo('delete-employee');
    }
}
