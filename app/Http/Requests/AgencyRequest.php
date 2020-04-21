<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AgencyRequest extends FormRequest
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
                'name' => 'required',
                'address' => 'required',
                'email' => 'required|email|unique:agencies,email',
                'phone' => 'required',
                'description' => 'required',
                'working_hours' => 'required',
                'location_embed' => 'required',
                'homepage' => 'required',
                'image' => 'max:2048|mimes:jpg,jpeg,png',
            ];
        }
        else if (sizeof($segments) == 3){
            return [
                'name' => '',
                'address',
                'email' => 'email|unique:agencies,email,'.$segments[2],
                'phone' => '',
                'description' => '',
                'working_hours' => '',
                'location_embed' => '',
                'homepage' => 'boolean',
                'image' => 'max:2048|mimes:jpg,jpeg,png',
            ];
        }
    }
}
