<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RoleRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    public function messages()
    {
        return [
            'name.regex' => 'name should\'t contain spaces',
        ];
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $segments = request()->segments();
        if (sizeof($segments) == 2){
            return [
                'name' => 'required|unique:roles,name',
                'permissions.*' => 'required|exists:permissions,name'
            ];
        }
        else if (sizeof($segments) == 3){
            return [
                'name' => 'unique:roles,name,'.$segments[2],
                'permissions.*' => 'exists:permissions,name'
            ];
        }
    }
}
