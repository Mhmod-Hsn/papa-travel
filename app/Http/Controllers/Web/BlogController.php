<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    public function index()
    {
        return view('pages.blog', [
            'posts' => \App\Post::paginate(10)
        ]);
    }
}
