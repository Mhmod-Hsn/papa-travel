<?php

namespace App\Http\Controllers;

use App\Http\Requests\LusionRequest;
use App\Lusion;
use App\Transformers\LusionTransformer;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class LusionController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param LusionRequest $request
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function store(LusionRequest $request)
    {
        $this->authorize('store', Lusion::class);

        $lusion = Lusion::create($request->validated());

        return $this->respond(
            'Created Successfully',
            fractal(
                Lusion::where('id', $lusion->id)->first(),
                new LusionTransformer()
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
        $this->authorize('destroy', Lusion::class);

        Lusion::find($id)->delete();

        return $this->respond('Deleted Successfully');
    }
}
