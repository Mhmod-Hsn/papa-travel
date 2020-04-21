<?php

namespace App\Http\Controllers\Web;

use App\Booking;
use App\Http\Controllers\Controller;
use App\Http\Requests\BookingRequest;
use App\IndexResponse;
use App\Package;
use App\Transformers\BookingTransformer;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Redirector;

class BookingController extends Controller
{

    /**
     * Store a newly created resource in storage.
     *
     * @param BookingRequest $request
     * @return RedirectResponse|Redirector
     */
    public function store(BookingRequest $request)
    {
        $data = $request->validated();

        $booking = Booking::create($data);

        $package = Package::where('id', $data['package_id'])->first();

        $package->bookings()->save($booking);

        return redirect(route('submitted'));
    }
}
