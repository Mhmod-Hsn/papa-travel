<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class InsuranceRequest extends FormRequest
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
        return [
            'name' => 'required',
            'phone' => 'required',
            'address' => 'required',
            'insurance_type' => 'required',
            'duration' => 'required',
            'start_date' => 'required',
            'birth_date' => 'required_without:image',
            'expire_date' => 'required_without:image',
            'passport_number' => 'required_without:image',
            'passport_name' => 'required_without:image',
            'gender' => 'required_without:image',
            'nationality' => 'required_without:image',
            'image' => '',
        ];
    }
}
