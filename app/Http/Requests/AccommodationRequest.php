<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AccommodationRequest extends FormRequest
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
                'city' => 'required',
                'nights' => 'required|integer',
                'hotel' => 'required',
                'rate' => 'required',
                'package_id' => 'required|exists:packages,id',
            ];
        }
        else if (sizeof($segments) == 3){
            return [
                'city' => '',
                'nights' => 'integer',
                'hotel' => '',
                'rate' => '',
                'tbl' => '',
                'dbl' => '',
                'sgl' => '',
                'child' => '',
                'package_id' => 'exists:packages,id',
            ];
        }
    }
}
