<?php

namespace App\Http\Controllers;

use App\Booking;
use App\Http\Requests\BookingRequest;
use App\IndexResponse;
use App\Package;
use App\Transformers\BookingTransformer;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class BookingController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function index()
    {
        $this->authorize('index', Booking::class);

        return $this->respond(
            'Data Loaded Successfully',
            fractal(
                (new IndexResponse(Booking::with('customPackage')))->execute()
                , new BookingTransformer()
            )
        );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param BookingRequest $request
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function store(BookingRequest $request)
    {
        $this->authorize('store', Booking::class);

        $data = $request->validated();

        $booking = Booking::create($data);

        $package = Package::where('id', $data['package_id'])->first();

        $package->bookings()->save($booking);

        return $this->respond(
            'Booking Created Successfully',
            fractal(
                Booking::where('id', $booking->id)->first(),
                new BookingTransformer()
            )
        );
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function show($id)
    {
        $this->authorize('show', Booking::class);
        return $this->respond('fetched successfully', fractal(
                Booking::where('id', $id)
                    ->first(),
                new BookingTransformer()
            )
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param BookingRequest $request
     * @param int $id
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function update(BookingRequest $request, $id)
    {
        $this->authorize('update', Booking::class);

        $booking = Booking::find($id);

        $data = $request->validated();

        $booking->update($data);

        return $this->respond(
            'Booking Updated Successfully',
            fractal(
                Booking::where('id' , $booking->id)->first(),
                new BookingTransformer()
            )
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function destroy($id)
    {
        $this->authorize('destroy', Booking::class);

        Booking::find($id)->delete();

        return $this->respond('Booking Deleted Successfully');
    }
}
