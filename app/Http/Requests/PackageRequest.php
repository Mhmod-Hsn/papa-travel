<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PackageRequest extends FormRequest
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
                'title' => 'required',
                'description' => 'required',
                'price' => 'required|integer',
                'currency' => 'required',
                'days' => 'required|integer',
                'nights' => 'required|integer',
                'date' => 'required|date',
                'season' => 'required',
                'home_page' => 'required',
                'tbl' => 'required',
                'dbl' => 'required',
                'sgl' => 'required',
                'child' => 'required',
                'inclusions' => 'required',
                'inclusions.*.name' => 'required',
                'exclusions' => 'required',
                'exclusions.*.name' => 'required',
                'schedule' => 'required',
                'schedule.*.day' => 'required|integer',
                'schedule.*.time' => 'date_format:H:i',
                'schedule.*.title' => '',
                'schedule.*.description' => 'required',
                'accommodations' => 'required',
                'accommodations.*.city' => 'required',
                'accommodations.*.nights' => 'required|integer',
                'accommodations.*.hotel' => 'required',
                'accommodations.*.rate' => 'required',
                'images' => '',
            ];
        }
        else if (sizeof($segments) == 3){
            return [
                'title' => '',
                'description' => '',
                'price' => 'integer',
                'currency' => '',
                'days' => 'integer',
                'nights' => 'integer',
                'rate' => 'integer',
                'date' => 'date',
                'season' => '',
                'home_page' => 'boolean',
            ];
        }
    }
}
