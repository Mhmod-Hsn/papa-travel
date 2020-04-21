<?php

namespace App\Policies;

use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class SchedulePolicy
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

    public function store()
    {
        return request()->user()->hasPermissionTo('create-lusion');
    }

    public function destroy()
    {
        return request()->user()->hasPermissionTo('delete-lusion');
    }
}
