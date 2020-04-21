<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EmployeeRequest extends FormRequest
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
                'email' => 'required|email|unique:users,email',
                'password' => 'required|min:8',
                'name' => 'required',
                'image' => 'max:2048|mimes:jpeg,png',
                'role' => 'required|exists:roles,name',
                'agency_id' => 'exists:agencies,id'
            ];
        }
        else if (sizeof($segments) == 3){
            return [
                'email' => 'email|unique:users,email,'.$segments[2],
                'password' => 'min:8',
                'name' => '',
                'image' => 'max:2048|mimes:jpeg,png',
                'role' => 'exists:roles,name',
                'agency_id' => 'exists:agencies,id'
            ];
        }
    }
}
