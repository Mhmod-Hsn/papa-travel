<?php

namespace App\Policies;

use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class BookingPolicy
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
        return request()->user()->hasPermissionTo('browse-booking');
    }

    public function store()
    {
        return request()->user()->hasPermissionTo('create-booking');
    }

    public function show()
    {
        return request()->user()->hasPermissionTo('view-booking');
    }

    public function update()
    {
        return request()->user()->hasPermissionTo('edit-booking');
    }

    public function destroy()
    {
        return request()->user()->hasPermissionTo('delete-booking');
    }
}
