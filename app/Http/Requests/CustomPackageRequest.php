<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CustomPackageRequest extends FormRequest
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
            'travel_date' => 'required|date',
            'flexibility' => 'required|integer',
            'budget' => 'required',
            'room_type' => 'required',
            'hotel_rating' => 'required',
            'hotel_location' => 'required',
            'notes' => '',
            'booking.email' => 'required|email',
            'booking.name' => 'required',
            'booking.phone' => 'required',
            'booking.adults' => 'required',
            'booking.children' => 'required',
            'booking.infants' => 'required',
            'destinations.*.country' => 'required',
            'destinations.*.city' => 'required',
            'destinations.*.nights' => 'required|integer',
        ];
    }
}
