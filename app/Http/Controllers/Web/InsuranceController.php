<?php

namespace App\Http\Controllers\Web;

use App\Country;
use App\Http\Controllers\Controller;
use App\Http\Requests\InsuranceRequest;
use App\Insurance;
use App\Media;
use App\Transformers\InsuranceTransformer;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class InsuranceController extends Controller
{
    public function create()
    {
        return view('pages.insurance')->with([
            'countries' => Country::all(),
            'insurance_types' => config('insurances'),
            'durations' => config('durations'),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param InsuranceRequest $request
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
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

        return redirect('/submitted');
    }
}
