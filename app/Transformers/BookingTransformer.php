<?php

namespace App\Transformers;

use App\Booking;
use League\Fractal\TransformerAbstract;

class BookingTransformer extends TransformerAbstract
{
    /**
     * List of resources to automatically include
     *
     * @var array
     */
    protected $defaultIncludes = [
        //
    ];

    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $availableIncludes = [
        //
    ];

    /**
     * A Fractal transformer.
     *
     * @param Booking $booking
     * @return array
     */
    public function transform(Booking $booking)
    {
        return $booking->toArray();
    }
}
