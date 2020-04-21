<?php

namespace App\Policies;

use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class ContactUsPolicy
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
        return request()->user()->hasPermissionTo('browse-contact-us');
    }

    public function store()
    {
        return request()->user()->hasPermissionTo('create-contact-us');
    }

    public function show()
    {
        return request()->user()->hasPermissionTo('view-contact-us');
    }

    public function update()
    {
        return request()->user()->hasPermissionTo('edit-contact-us');
    }

    public function destroy()
    {
        return request()->user()->hasPermissionTo('delete-contact-us');
    }
}
