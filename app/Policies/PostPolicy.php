<?php

namespace App\Policies;

use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class PostPolicy
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
        return request()->user()->hasPermissionTo('browse-post');
    }

    public function store()
    {
        return request()->user()->hasPermissionTo('create-post');
    }

    public function show()
    {
        return request()->user()->hasPermissionTo('view-post');
    }

    public function update()
    {
        return request()->user()->hasPermissionTo('edit-post');
    }

    public function destroy()
    {
        return request()->user()->hasPermissionTo('delete-post');
    }
}
