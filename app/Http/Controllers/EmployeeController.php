<?php

namespace App\Http\Controllers;

use App\Http\Requests\EmployeeRequest;
use App\IndexResponse;
use App\Transformers\UserTransformer;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function index()
    {
        $this->authorize('index', User::class);

        return $this->respond(
            'Data Loaded Successfully',
            fractal(
                (new IndexResponse(User::employees()->with(['roles'])))->execute()
                , new UserTransformer()
            )
        );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function store(EmployeeRequest $request)
    {
        $this->authorize('store', User::class);

        $data = $request->except('role');

        if (\request()->hasFile('image')){
            $data['image'] = download_file(\request()->file('image'), config('paths.image.create'));
        }
        $data['email_verified_at'] = now();
        $data['password'] = bcrypt($request->password);

        $user = User::create($data);

        $user->assignRole($request->role);

        return $this->respond(
            'Employee Created Successfully',
            fractal(
                User::where('id', $user->id)->with(['roles', 'roles.permissions', 'permissions'])->first(),
                new UserTransformer()
            )
        );
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function show($id)
    {
        $this->authorize('show', User::class);
        return $this->respond('fetched successfully', fractal(
                User::where('id', $id)
                    ->with('roles', 'permissions', 'roles.permissions')
                    ->first(),
                new UserTransformer()
            )
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function update(EmployeeRequest $request, $id)
    {
        $this->authorize('update', User::class);

        $user = User::find($id);
        $data = $request->except('role');
        $data['image'] = download_image('image', config('paths.user-image.create'))? :$user->image;
        if ($request->password){
            $data['password'] = bcrypt($data['password']);
        }

        $user->update($data);

        if ($request->role){
            $user->syncRoles($request->role);
        }

        return $this->respond(
            'Employee Updated Successfully',
            fractal(
                User::where('id', $user->id)->with(['roles', 'roles.permissions', 'permissions'])->first(),
                new UserTransformer()
            )
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function destroy($id)
    {
        $this->authorize('destroy', User::class);

        $user = User::find($id);

        Storage::disk('public')->delete(config('paths.user-image.delete').$user->image);

        User::find($id)->delete();

        return $this->respond('Employee Deleted Successfully');
    }
}
