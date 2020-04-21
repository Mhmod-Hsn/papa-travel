<?php

namespace App\Http\Controllers;

use App\Agency;
use App\Http\Requests\AgencyRequest;
use App\IndexResponse;
use App\Media;
use App\Responses\Facades\ResponseFacade;
use App\Transformers\AgencyTransformer;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;

class AgencyController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function index()
    {
        $this->authorize('index', Agency::class);

        return ResponseFacade::indexRespond(
            fractal(
                (new IndexResponse(Agency::query()))->execute()
                , new AgencyTransformer()
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
     * @param AgencyRequest $request
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function store(AgencyRequest $request)
    {
        $this->authorize('store', Agency::class);

        $data = $request->validated();

        $data['homepage'] = $data['homepage'] == 'true'? 1:0;

        $agency = Agency::create($data);

        if (\request()->hasFile('image')){
            $image = \request()->file('image');
            $data = [
                'old_name' => $image->getClientOriginalName(),
            ];
            $data['url'] = download_file($image, config('paths.image.create'));
            $image = Media::create($data);
            $agency->image()->save($image);
        }

        return ResponseFacade::createRespond(
            fractal(
                $agency,
                new AgencyTransformer()
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
        $this->authorize('show', Agency::class);
        return ResponseFacade::showRespond(
            fractal(
                Agency::find($id),
                new AgencyTransformer()
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
     * @param AgencyRequest $request
     * @param int $id
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function update(AgencyRequest $request, $id)
    {
        $this->authorize('update', Agency::class);

        $agency = Agency::find($id);

        $agency->update($request->validated());

        return ResponseFacade::updateRespond(
            fractal(
                $agency,
                new AgencyTransformer()
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
        $this->authorize('destroy', Agency::class);

        $agency = Agency::find($id);

        Storage::disk('public')->delete(config('paths.image.delete').$agency->image->url);

        Agency::find($id)->delete();

        return ResponseFacade::deleteRespond();
    }
}
