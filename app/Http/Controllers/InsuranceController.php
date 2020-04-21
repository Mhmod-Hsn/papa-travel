<?php

namespace App\Http\Controllers;

use App\Http\Requests\InsuranceRequest;
use App\IndexResponse;
use App\Insurance;
use App\Media;
use App\Transformers\InsuranceTransformer;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class InsuranceController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function index()
    {
        $this->authorize('index', Insurance::class);

        return $this->respond(
            'Data Loaded Successfully',
            fractal(
                (new IndexResponse(Insurance::query()))->execute()
                , new InsuranceTransformer()
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
     * @param InsuranceRequest $request
     * @return JsonResponse
     */
    public function store(InsuranceRequest $request)
    {
        $data = $request->validated();

        $insurance = Insurance::create($data);

        if (\request()->hasFile('image')){
            $image = \request()->file('image');
            $data = [
                'old_name' => $image->getClientOriginalName(),
            ];
            $data['url'] = download_file($image, config('paths.image.create'));
            $image = Media::create($data);
            $insurance->image()->save($image);
        }

        return $this->respond(
            'Insurance Created Successfully',
            fractal(
                Insurance::where('id', $insurance->id)->first(),
                new InsuranceTransformer()
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
        $this->authorize('show', Insurance::class);
        return $this->respond('fetched successfully', fractal(
                Insurance::where('id', $id)
                    ->first(),
                new InsuranceTransformer()
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
        $this->authorize('update', Insurance::class);

        $insurance = Insurance::find($id);

        $data = $request->all();

        $insurance->update($data);

        return $this->respond(
            'Insurance Updated Successfully',
            fractal(
                Insurance::where('id' , $insurance->id)->first(),
                new InsuranceTransformer()
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
        $this->authorize('destroy', Insurance::class);

        Insurance::find($id)->delete();

        return $this->respond('Insurance Deleted Successfully');
    }
}
