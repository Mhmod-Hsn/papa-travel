<?php

namespace App\Http\Controllers;

use App\Booking;
use App\CustomPackage;
use App\Destination;
use App\Http\Requests\CustomPackageRequest;
use App\IndexResponse;
use App\Transformers\CustomPackageTransformer;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class CustomPackageController extends Controller
{


    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function index()
    {
        $this->authorize('index', CustomPackage::class);

        return $this->respond(
            'Data Loaded Successfully',
            fractal(
                (new IndexResponse(CustomPackage::query()))->execute()
                , new CustomPackageTransformer()
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

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function show($id)
    {
        $this->authorize('show', CustomPackage::class);
        return $this->respond('fetched successfully', fractal(
                CustomPackage::where('id', $id)
                    ->first(),
                new CustomPackageTransformer()
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
     * @param Request $request
     * @param int $id
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function update(Request $request, $id)
    {
        $this->authorize('update', CustomPackage::class);

        $custom_package = CustomPackage::find($id);

        $data = $request->validated();

        $custom_package->update($data);

        return $this->respond(
            'Custom Package Updated Successfully',
            fractal(
                CustomPackage::where('id' , $custom_package->id)->first(),
                new CustomPackageTransformer()
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
        $this->authorize('destroy', CustomPackage::class);

        CustomPackage::find($id)->delete();

        return $this->respond('Custom Package Deleted Successfully');
    }
}
