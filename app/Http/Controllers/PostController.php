<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostRequest;
use App\IndexResponse;
use App\Media;
use App\Post;
use App\Transformers\PostTransformer;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class PostController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index()
    {
        return $this->respond(
            'Data Loaded Successfully',
            fractal(
                (new IndexResponse(Post::query()))->execute()
                , new PostTransformer()
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
     * @param PostRequest $request
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function store(PostRequest $request)
    {
        $this->authorize('store', Post::class);

        $data = $request->validated();

        $post = Post::create($data);

        if (\request()->hasFile('image')){
            $image = \request()->file('image');
            $data = [
                'old_name' => $image->getClientOriginalName(),
            ];
            $data['url'] = download_file($image, config('paths.image.create'));
            $image = Media::create($data);
            $post->image()->save($image);
        }

        return $this->respond(
            'Post Created Successfully',
            fractal(
                Post::where('id', $post->id)->first(),
                new PostTransformer()
            )
        );
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return JsonResponse
     */
    public function show($id)
    {
        return $this->respond('fetched successfully', fractal(
                Post::where('id', $id)
                    ->first(),
                new PostTransformer()
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
     * @param PostRequest $request
     * @param int $id
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function update(PostRequest $request, $id)
    {
        $this->authorize('update', Post::class);

        $post = Post::find($id);

        $data = $request->validated();

        $post->update($data);

        return $this->respond(
            'Post Updated Successfully',
            fractal(
                Post::where('id' , $post->id)->first(),
                new PostTransformer()
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
        $this->authorize('destroy', Post::class);

        Post::find($id)->delete();

        return $this->respond('Post Deleted Successfully');
    }
}
