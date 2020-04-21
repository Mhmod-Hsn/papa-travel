<?php

namespace App\Http\Controllers;

use App\Http\Requests\ScheduleRequest;
use App\Schedule;
use App\Transformers\ScheduleTransformer;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ScheduleController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param ScheduleRequest $request
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function store(ScheduleRequest $request)
    {
        $this->authorize('store', Schedule::class);

        $schedule = Schedule::create($request->validated());

        return $this->respond(
            'Created Successfully',
            fractal(
                Schedule::where('id', $schedule->id)->first(),
                new ScheduleTransformer()
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
        $this->authorize('destroy', Schedule::class);

        Schedule::find($id)->delete();

        return $this->respond('Deleted Successfully');
    }
}
