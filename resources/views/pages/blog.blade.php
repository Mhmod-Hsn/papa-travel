@extends('layouts.website')

@section('title') Blog |   @endsection


@section('content')

    <!-- breadcrumb area start -->
    <div class="breadcrumb-area jarallax" style="background-image:url(/images/website/bg/1.png);">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb-inner">
                        <h1 class="page-title">Blog</h1>
                        <ul class="page-list">
                            <li><a href="/">Home</a></li>
                            <li>Blog</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- breadcrumb area End -->

    <!-- blog area start -->
    <div class="blog-list-area pd-top-120">
        <div class="container">
            <div class="row justify-content-center">
                @foreach($posts as $post)
                    <div class="col-lg-4 col-md-6">
                        <div class="single-blog">
                            <div class="thumb">
                                @if($post->image)
                                    <img src="{{$post->image->url}}" alt="blog">
                                @else
                                    <img src="/images/website/blog/1.png" alt="blog">
                                @endif
                            </div>
                            <div class="single-blog-details">
                                <p class="date">{{date('F j, Y, g:i a', strtotime($post->created_at))}}</p>
                                <h4 class="title">{{$post->title}}</h4>
                                <p class="content">{{$post->description}}</p>
                            </div>
                        </div>
                    </div>
                @endforeach
                <div class="col-lg-12  text-md-center text-left">
                    <div class="tp-pagination text-md-center text-left d-inline-block mt-4">
                        {{ $posts->links() }}
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- blog area End -->
@endsection
