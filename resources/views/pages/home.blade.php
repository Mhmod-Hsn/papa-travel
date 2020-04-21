@extends('layouts.website')

@section('title') Home |   @endsection


@section('content')

    <!-- search popup start -->
    <div class="body-overlay" id="body-overlay"></div>
    <div class="search-popup" id="search-popup">
        <form action="/" class="search-form">
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Search.....">
            </div>
            <button type="submit" class="submit-btn"><i class="fa fa-search"></i></button>
        </form>
    </div>
    <!-- search popup End -->

    <!-- banner area start -->
    <div class="main-banner-area jarallax" style="background-image: url(/images/website/banner/4.png);">
        <div class="content">
            <div class="container">
                <h2>Explore, Discover, Travel</h2>
                <h1>ADVENTURE</h1>
                <h1 class="shadow">ADVENTURE</h1>
                <div class="scroll-down">
                    <a href="#intro" class="text-center">
                        <span></span>
                        <i class="la la-long-arrow-down"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <!-- banner area end -->

    <!-- intro area start -->
    <div id="intro" class="intro-area pd-top-50">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-sm-6 single-intro-two bl-0">
                    <div class="single-intro style-two">
                        <div class="thumb">
                            <img src="/images/website/icons/9.png" alt="img">
                        </div>
                        <h4 class="intro-title">Private Transport</h4>
                        <p>Sponsorships are like unicorns or leprechauns, talked about often but they don’t exist. There is only dollars</p>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 single-intro-two">
                    <div class="single-intro style-two">
                        <div class="thumb">
                            <img src="/images/website/icons/10.png" alt="img">
                        </div>
                        <h4 class="intro-title">Diverse Destinations</h4>
                        <p>My response usually harsh. Offended at the that a career that’s taken more than a decade to create could be</p>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 single-intro-two">
                    <div class="single-intro style-two">
                        <div class="thumb">
                            <img src="/images/website/icons/11.png" alt="img">
                        </div>
                        <h4 class="intro-title">Great Hotels</h4>
                        <p>I have always made a living to make movies, never the other way around.I first I washed dishes in a seafood</p>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 single-intro-two">
                    <div class="single-intro style-two">
                        <div class="thumb">
                            <img src="/images/website/icons/12.png" alt="img">
                        </div>
                        <h4 class="intro-title">Fast Booking</h4>
                        <p>Aenean sed nibh a magna posuere tempor. Nunc faucibus nunc aliquet. Donec congue, nunc vel tempor</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- intro area End -->

    <!-- travelus area start -->
    <div class="travelus-area pd-top-120 pd-bottom-92 jarallax" style="background-image: url(/images/website/bg/9.png);">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 col-lg-8">
                    <div class="section-title section-title-left-border style-two">
                        <h2 class="title">Lets Go Travel with Us</h2>
                        <p>Nulla eleifend pulvinar purus, molestie euismod odio imperdiet ac. Ut sit amet erat nec nibh rhoncus varius in non lorem. Donec interdum, lectus in convallis pulvinar, enim elit porta sapien, vel finibus erat felis sed neque. Etiam aliquet neque sagittis erat tincidunt aliquam.</p>
                    </div>
                </div>
            </div>
            <ul class="row single-travelus-wrap-area">
                <li class="col-lg-2 col-sm-4 single-travelus-wrap">
                    <div class="single-travelus text-center">
                        <div class="icons">
                            <img src="/images/website/icons/27.png" alt="img">
                        </div>
                        <h4>Search</h4>
                    </div>
                </li>
                <li class="col-lg-2 col-sm-4 single-travelus-wrap">
                    <div class="single-travelus text-center">
                        <div class="icons">
                            <img src="/images/website/icons/28.png" alt="img">
                        </div>
                        <h4>Book</h4>
                    </div>
                </li>
                <li class="col-lg-2 col-sm-4 single-travelus-wrap">
                    <div class="single-travelus text-center">
                        <div class="icons">
                            <img src="/images/website/icons/27.png" alt="img">
                        </div>
                        <h4>Travel</h4>
                    </div>
                </li>
                <li class="col-lg-5 offset-xl-1 single-travelus-wrap">
                    <img src="/images/website/others/15.png" alt="img">
                </li>
            </ul>
            <!-- package area end -->
            <div class="package-area pd-top-105">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-6 col-lg-8">
                            <div class="section-title section-title-left-border style-two">
                                <h2 class="title">Best Packages For You</h2>
                                <p>Vivamus eget aliquam dui. Integer eu arcu vel arcu suscipit ultrices quis non mauris. Aenean scelerisque, sem eu dictum commodo, velit nisi</p>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        @foreach($packages as $package)
                        <div class="col-xl-3 col-lg-4 col-sm-6">
                            <div class="single-package-card style-two wow animated fadeInUp" data-wow-duration="0.1s" data-wow-delay="0.1s">
                                <div class="thumb">
                                    @if(count($package->medias))
                                        <img src="{{$package->medias[0]->url}}" alt="img">
                                    @else
                                        <img src="/images/website/destination-list/8.png" alt="img">
                                    @endif
                                </div>
                                <div class="details">
                                    <h3>{{$package->title}}</h3>
                                    <ul class="package-meta">
                                        <li class="tp-price-meta">
                                            <p><i class="fa fa-clock-o"></i></p>
                                            <p>Duration</p>
                                            <h2>{{$package->days}} Days / {{$package->nights}} Nights</h2>
                                        </li>
                                        <br>
                                        <li class="tp-price-meta">
                                            <p><i class="fa fa-tag"></i></p>
                                            <p>Price</p>
                                            <h2>{{$package->price}} {{$package->currency}} </h2>
                                        </li>
                                    </ul>
                                    <a class="btn btn-gray" href="{{route('package_details', $package->id)}}">Book Now</a>
                                </div>
                            </div>
                        </div>
                        @endforeach
                    </div>
                </div>
            </div>
            <!-- package area end -->
        </div>
    </div>
    <!-- travelus area start -->

    <!-- video area start -->
    <div class="video-area tp-video-area pd-top-110" style="background-image: url('/images/website/bg/7.png');">
        <div class="container">
            <div class="row">
                <div class="col-xl-5 col-lg-6 align-self-center wow animated fadeInRight" data-wow-duration="1s" data-wow-delay="0.3s">
                    <div class="section-title mb-lg-0 mb-4 text-center text-lg-left">
                        <h2 class="title">What Do You Know <br> About US</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when unknown printer took a galley of type and scrambled it to make a type specimen book. It has not only five centuries</p>
                        <a class="btn btn-yellow" href="{{route('about')}}"><span>Read More<i class="la la-arrow-right"></i></span></a>
                    </div>
                </div>
                <div class="col-xl-5 col-lg-6 offset-xl-1 wow animated fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s">
                    <div class="video-popup-wrap">
                        <div class="thumb">
                            <img src="/images/website/video.png" alt="video">
                        </div>
                        <div class="video-popup-btn">
                            <a href="https://www.youtube.com/watch?v=c7XEhXZ_rsk" class="video-play-btn mfp-iframe"><i class="fa fa-play"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- video area end -->

    <!-- holiday plan area start -->
    <div class="holiday-plan-area tp-holiday-plan-area mg-top-96" style="background-image: url(/images/website/bg/8.png);">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-6 col-lg-9">
                    <div class="section-title text-center">
                        <h2 class="title wow animated fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.1s">Latest Packages</h2>
                        </div>
                </div>
            </div>
            <div class="row">
                @foreach($latest_packages as $package)
                    <div class="col-lg-3 col-sm-6">
                        <div class="single-destinations-list style-two wow animated fadeInUp" data-wow-duration="0.4s" data-wow-delay="0.1s">
                            <div class="thumb">
                                @if(count($package->medias))
                                    <img src="{{$package->medias[0]->url}}" alt="img">
                                @else
                                    <img src="/images/website/destination-list/8.png" alt="img">
                                @endif
                            </div>
                            <div class="details">
                                <h4 class="title">{{$package->title}}</h4>
                                <p class="content">{{$package->description}}</p>
                                <div class="tp-price-meta">
                                    <h2>{{$package->price}} {{$package->currency}}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    </div>
    <!-- holiday plan area end -->


    <!-- newslatter area Start -->

    <!-- newslatter area End -->
@endsection
