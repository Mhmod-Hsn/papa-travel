<?php

namespace App\Http\Controllers\Web;

use App\ContactUs;
use App\Http\Controllers\Controller;
use App\Http\Requests\ContactUsRequest;
use App\IndexResponse;
use App\Transformers\ContactUsTransformer;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Redirector;

class ContactUsController extends Controller
{

    /**
     * Store a newly created resource in storage.
     *
     * @param ContactUsRequest $request
     * @return RedirectResponse|Redirector
     */
    public function store(ContactUsRequest $request)
    {
        $data = $request->validated();

        $contact_us = ContactUs::create($data);

        return redirect(route('submitted'));
    }
}
