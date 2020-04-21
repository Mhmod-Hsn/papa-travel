<?php

namespace App\Http\Controllers;

use App\ContactUs;
use App\Http\Requests\ContactUsRequest;
use App\IndexResponse;
use App\Transformers\ContactUsTransformer;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ContactUsController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function index()
    {
        $this->authorize('index', ContactUs::class);

        return $this->respond(
            'Data Loaded Successfully',
            fractal(
                (new IndexResponse(ContactUs::query()))->execute()
                , new ContactUsTransformer()
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
     * @param ContactUsRequest $request
     * @return JsonResponse
     */
    public function store(ContactUsRequest $request)
    {
        $data = $request->validated();

        $contact_us = ContactUs::create($data);

        return $this->respond(
            'Contact Us Created Successfully',
            fractal(
                ContactUs::where('id', $contact_us->id)->first(),
                new ContactUsTransformer()
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
        $this->authorize('show', ContactUs::class);
        return $this->respond('fetched successfully', fractal(
                ContactUs::where('id', $id)
                    ->first(),
                new ContactUsTransformer()
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
        $this->authorize('update', ContactUs::class);

        $contact_us = ContactUs::find($id);

        $data = $request->validated();

        $contact_us->update($data);

        return $this->respond(
            'Contact Us Updated Successfully',
            fractal(
                ContactUs::where('id' , $contact_us->id)->first(),
                new ContactUsTransformer()
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
        $this->authorize('destroy', ContactUs::class);

        ContactUs::find($id)->delete();

        return $this->respond('Contact Us Deleted Successfully');
    }
}
