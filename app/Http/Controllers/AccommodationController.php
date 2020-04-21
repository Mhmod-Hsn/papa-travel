<?php

namespace App\Http\Controllers;

use App\Accommodation;
use App\Http\Requests\AccommodationRequest;
use App\Http\Requests\ScheduleRequest;
use App\Transformers\AccommodationTransformer;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class AccommodationController extends Controller
{

    /**
     * Store a newly created resource in storage.
     *
     * @param AccommodationRequest $request
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function store(AccommodationRequest $request)
    {
        $this->authorize('store', Accommodation::class);

        $accommodation = Accommodation::create($request->validated());

        return $this->respond(
            'Created Successfully',
            fractal(
                Accommodation::where('id', $accommodation->id)->first(),
                new AccommodationTransformer()
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
        $this->authorize('destroy', Accommodation::class);

        Accommodation::find($id)->delete();

        return $this->respond('Deleted Successfully');
    }
}
