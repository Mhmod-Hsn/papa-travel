<?php

namespace App\Policies;

use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;
use Spatie\Permission\Models\Role;

class RolePolicy
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
        return request()->user()->hasPermissionTo('browse-role');
    }

    public function store()
    {
        return request()->user()->hasPermissionTo('create-role');
    }

    public function show($id)
    {
        if (request()->user()->hasRole('Super Admin')){
            return true;
        }
        else{
            return request()->user()->hasPermissionTo('view-role') && Role::findById($id)->name != 'Super Admin';
        }
    }

    public function update()
    {
        return request()->user()->hasPermissionTo('edit-role');
    }

    public function destroy()
    {
        return request()->user()->hasPermissionTo('delete-role');
    }
}
