<?php

namespace App\Http\Controllers\Web;

use App\Booking;
use App\Country;
use App\CustomPackage;
use App\Destination;
use App\Http\Controllers\Controller;
use App\Http\Requests\CustomPackageRequest;
use App\IndexResponse;
use App\Transformers\CustomPackageTransformer;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class CustomPackageController extends Controller
{
    public function create()
    {
        return view('pages.create_package')->with([
            'countries' => Country::with('cities')->get()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param CustomPackageRequest $request
     * @return JsonResponse
     */
    public function store(CustomPackageRequest $request)
    {
        $data = $request->validated();

        $booking = Booking::create($data['booking']);

        $custom_package = CustomPackage::create($data);

        $booking->customPackage()->save($custom_package);

        foreach ($request->validated()['destinations'] as $destination){
            $destination = Destination::create($destination);
            $custom_package->destinations()->save($destination);
        }

//        foreach (json_decode($request->validated()['destinations']) as $destination){
//            $destination = Destination::create([
//                'city' => $destination->city,
//                'nights' => $destination->nights,
//                'country' => $destination->country,
//            ]);
//            $custom_package->destination()->save($destination);
//        }

        return $this->respond(
            'Custom Package Created Successfully',
            fractal(
                CustomPackage::where('id', $custom_package->id)->first(),
                new CustomPackageTransformer()
            )
        );
    }


}
