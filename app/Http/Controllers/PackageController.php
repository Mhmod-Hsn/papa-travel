<?php

namespace App\Http\Controllers;

use App\Accommodation;
use App\Agency;
use App\Http\Requests\PackageRequest;
use App\IndexResponse;
use App\Lusion;
use App\Media;
use App\Package;
use App\Schedule;
use App\Transformers\PackageTransformer;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class PackageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index()
    {
        $builder = Package::query();
        $user = \request()->user();
        if ($user && $user->hasRole('Agency Admin')){
            $builder->where('agency_id', $user->agency->id);
        }
        return $this->respond(
            'Data Loaded Successfully',
            fractal(
                (new IndexResponse($builder))->execute(),
                new PackageTransformer()
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
     * @param PackageRequest $request
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function store(PackageRequest $request)
    {
        $this->authorize('store', Package::class);

        $data = $request->validated();

        $data['home_page'] = $data['home_page'] == 'true'? 1:0;

        $package = Package::create($data);

        if ($request->user()->hasRole('Agency Admin')){
            $request->user()->agency->packages()->save($package);
        }

        foreach (json_decode($request->validated()['inclusions']) as $inclusion){
            $inclusion = Lusion::create([
                    'type' => 1,
                    'name' => $inclusion->name
                ]);
            $package->inclusions()->save($inclusion);
        }

        foreach (json_decode($request->validated()['exclusions']) as $exclusion){

            $exclusion = Lusion::create([
                'type' => 0,
                'name' => $exclusion->name
            ]);
            $package->exclusions()->save($exclusion);
        }

        foreach (json_decode($request->validated()['schedule']) as $schedule){
            $schedule = Schedule::create([
                'day' => $schedule->day_number,
                'description' => $schedule->description
            ]);
            $package->schedules()->save($schedule);
        }

        foreach (json_decode($request->validated()['accommodations']) as $accommodation){
            $accommodation = Accommodation::create([
                'city' => $accommodation->city,
                'nights' => $accommodation->nights,
                'hotel' => $accommodation->hotel,
                'rate' => $accommodation->rate,
            ]);
            $package->accommodations()->save($accommodation);
        }
        if (array_key_exists('images', $request->validated())){
            foreach ($request->validated()['images'] as $image){
                $data = [
                    'old_name' => $image->getClientOriginalName(),
                ];
                $data['url'] = download_file($image, config('paths.image.create'));
                $image = Media::create($data);
                $package->medias()->save($image);
            }
        }

        return $this->respond(
            'Created Successfully',
            fractal(
                Package::where('id', $package->id)->first(),
                new PackageTransformer()
            )
        );
    }

    /**
     * Display the specified resource.
     *
     * @param $id
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function show($id)
    {
        $this->authorize('show', Package::class);
        return $this->respond('Fetched successfully', fractal(
                Package::where('id', $id)->first(),
                new PackageTransformer()
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
     * @param PackageRequest $request
     * @param int $id
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function update(PackageRequest $request, $id)
    {
        $this->authorize('update', Package::class);

        $package = Package::find($id);

        $package->update($request->validated());

        return $this->respond(
            'Updated Successfully',
            fractal($package, new PackageTransformer())
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
        $this->authorize('destroy', Package::class);

        Package::find($id)->delete();

        return $this->respond('Deleted Successfully');
    }
}
