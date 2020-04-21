<?php

namespace App\Http\Controllers\Web;

use App\Accommodation;
use App\Http\Controllers\Controller;
use App\Http\Requests\PackageRequest;
use App\IndexResponse;
use App\Lusion;
use App\Media;
use App\Package;
use App\Schedule;
use App\Transformers\PackageTransformer;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\View\View;

class PackageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Factory|View
     */
    public function index()
    {
        return view('pages.packages_list', [
            'packages' => Package::orderBy('date', 'desc')->paginate(9)
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param $id
     * @return Factory|View
     */
    public function show($id)
    {
        return view('pages.package_details', [
            'package' => Package::where('id', $id)->first()
        ]);
    }
}
