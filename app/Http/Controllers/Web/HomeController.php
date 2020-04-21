<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        return view('pages.home', [
            'packages' => \App\Package::where('home_page', 1)->limit(6)->get(),
            'latest_packages' => \App\Package::where('home_page', 0)->orderBy('created_at', 'desc')->limit(4)->get(),
        ]);
    }
}
