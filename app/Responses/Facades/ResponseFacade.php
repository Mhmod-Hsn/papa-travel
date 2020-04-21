<?php


namespace App\Responses\Facades;


use Illuminate\Support\Facades\Facade;

class ResponseFacade extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'CrudResponse';
    }
}
