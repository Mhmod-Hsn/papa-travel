@extends('layouts.website')

@section('title') Package Details |   @endsection

@section('content')
    <!-- breadcrumb area start -->
    <div class="breadcrumb-area style-two jarallax" style="background-image:url(/images/website/bg/1.png);">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb-inner">
                        <h1 class="page-title">Package Details</h1>
                        <ul class="page-list">
                            <li><a href="/">Home</a></li>
                            <li>Package Details</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- breadcrumb area End -->

    <!-- tour details area End -->
    <div class="tour-details-area mg-top--70">
        <div class="tour-details-gallery">
            <div class="container-bg bg-dark-blue">
                <div class="container">
                    <div class="gallery-filter-area row">
                        <div class="gallery-sizer col-1"></div>
                        <!-- gallery-item -->
                        @if(sizeof($package->medias))
                            <div class="tp-gallery-item col-md-3 col-sm-6">
                                <div class="tp-gallery-item-img">
                                    <a href="#" data-effect="mfp-zoom-in">
                                        <img src="{{$package->medias[0]->url}}" alt="image">
                                    </a>
                                </div>
                            </div>
                        @endif
                        @foreach($package->medias as $index => $media)
                            @if($index != 0)
                                <div class="tp-gallery-item col-lg-2 col-md-4 col-sm-6">
                                    <div class="tp-gallery-item-img">
                                        <a href="#" data-effect="mfp-zoom-in">
                                            <img src="{{$media->url}}" alt="image">
                                        </a>
                                    </div>
                                </div>
                            @endif
                        @endforeach
                    </div>
                    <div class="row">
                        <div class="col-xl-3 col-lg-4">
                            <div class="details">
                                <h4 class="title">{{$package->title}}</h4>
                                <p class="content">{{$package->days}} Days / {{$package->nights}} Nights</p>
                            </div>
                        </div>
                        <div class="col-xl-9 col-lg-8">
                            <div class="book-list-warp">
                                <p class="book-list-content">Just booked! Get your spot before it's too late.</p>
                                <div class="tp-price-meta">
                                    <p>Price</p>
                                    <h2>{{$package->price}} {{$package->currency}}</h2>
                                </div>
                            </div>
                            <ul class="tp-list-meta border-tp-solid">
                                <li class="ml-0"><i class="fa fa-calendar-o"></i>{{date('t F Y', strtotime($package->date))}}</li>
                                <li><i class="fa fa-clock-o"></i> {{$package->days}} Days / {{$package->nights}} Nights</li>
                                <li><i class="fa fa-snowflake-o"></i> {{$package->season}}</li>
                                <li><i class="fa fa-star"></i>{{number_format($package->rate, 1)}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container" style="margin-bottom: 45px;">
            <div class="row">
                <h4 class="single-page-small-title">Accommodation</h4>
                <table width="100%">
                    <thead style="background-color: #40a0d0;color: white;padding: 5px;">
                    <tr style="text-align: center;line-height: 17px;padding: 5px;">
                        <th style="width: 15%;padding: 15px;">City</th>
                        <th style="width: 15%;padding: 15px;">Nights</th>
                        <th style="width: 20%;padding: 15px;">Hotels / Standard</th>
                        <th style="width: 10%;padding: 15px;">TBL</th>
                        <th style="width: 15%;padding: 15px;">DBL</th>
                        <th style="width: 10%;padding: 15px;">SGL</th>
                        <th style="width: 10%;padding: 15px;">Child</th>
                    </tr>
                    </thead>
                    <tbody>
                    @foreach($package->accommodations as $index => $accommodation)
                        <tr style="text-align: center;border-bottom: 1px solid #0c112e;">
                            <td style="padding: 15px;">{{$accommodation->city}}</td>
                            <td style="padding: 15px;">{{$accommodation->nights}}</td>
                            <td style="padding: 15px;">
                                {{$accommodation->hotel}}
                                <br>
                                @for($i = 0; $i<$accommodation->rate; $i++)
                                    <i class="ic-yellow fa fa-star"></i>
                                @endfor
                                @for($i = 0; $i<5-$accommodation->rate; $i++)
                                    <i class="fa fa-star"></i>
                                @endfor
                            </td>
                            @if($index == 0)
                                <td style="padding: 15px; border-right: 1px solid #0c112e; border-left: 1px solid #0c112e;" rowspan="{{sizeof($package->accommodations)}}">{{$package->tbl}} {{$package->currency}}</td>
                                <td style="padding: 15px; border-right: 1px solid #0c112e; border-left: 1px solid #0c112e;" rowspan="{{sizeof($package->accommodations)}}">{{$package->dbl}} {{$package->currency}}</td>
                                <td style="padding: 15px; border-right: 1px solid #0c112e; border-left: 1px solid #0c112e;" rowspan="{{sizeof($package->accommodations)}}">{{$package->sgl}} {{$package->currency}}</td>
                                <td style="padding: 15px; border-left: 1px solid #0c112e;" rowspan="{{sizeof($package->accommodations)}}">{{$package->child}} {{$package->currency}}</td>
                            @endif
                        </tr>
                    @endforeach
                    </tbody>
                </table>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="tour-details-wrap">
                        <h4 class="single-page-small-title">Description</h4>
                        <p>{{$package->description}}</p>
                        <hr>
                        <div class="row" style="margin-top: 25px;">
                            <div class="col-lg-6 col-md-6">
                                <h4 class="single-page-small-title">Inclusions</h4>
                                @foreach($package->inclusions as $inclusion)
                                    <p>
                                        <i style="display: table-cell;color: #40a0d0;" class="fa fa-check"></i>
                                        <span style="display: table-cell;">{{$inclusion->name}}</span>
                                    </p>
                                @endforeach
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <h4 class="single-page-small-title">Exclusions</h4>

                                @foreach($package->exclusions as $exclusion)
                                    <p>
                                        <i style="display: table-cell;color: #40a0d0;" class="fa fa-check"></i>
                                        <span style="display: table-cell;">{{$exclusion->name}}</span>
                                    </p>
                                @endforeach
                            </div>
                        </div>
                        <div class="package-included-location">
                            <h4 class="single-page-small-title">Your Itinerary</h4>
                            <div class="row">
                                <article class="page">
                                    <ul class="timeline">
                                    @foreach($package->schedules as $schedule)
                                        <li class="timeline-milestone is-completed timeline-start">
                                                        <div class="timeline-action">
                                                            <h2 class="title">Day {{$schedule->day}}</h2>
                                                            <div class="content">
                                                                {{$schedule->description}}
                                                            </div>
                                                        </div>
                                                    </li>
{{--                                        <div class="timeline__box">--}}
{{--                                            <div class="timeline__date">--}}
{{--                                                <span class="timeline__month">Day {{$schedule->day}}</span>--}}
{{--                                            </div>--}}
{{--                                            <div class="timeline__post">--}}
{{--                                                <div class="timeline__content">--}}
{{--                                                    <p>{{$schedule->description}}</p>--}}
{{--                                                </div>--}}
{{--                                            </div>--}}
{{--                                        </div>--}}
                                        @endforeach
                                    </ul>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="sidebar-area sidebar-area-4">
                        <div class="widget tour-list-widget">
                            <div class="widget-tour-list-meta">
                                <form action="/booking" method="post">
                                    {{csrf_field()}}
                                    <div class="single-widget-search-input-title"><i class="fa fa-user"></i> Name <span style="color: red">*</span></div>
                                    <div class="single-widget-search-input">
                                        <input type="text" placeholder="Name" name="name" required>
                                    </div>
                                    <div class="single-widget-search-input-title"><i class="fa fa-envelope"></i> Email  <span style="color: red">*</span></div>
                                    <div class="single-widget-search-input">
                                        <input type="email" placeholder="Email" name="email" required>
                                    </div>
                                    <div class="single-widget-search-input-title"><i class="fa fa-phone"></i> Phone  <span style="color: red">*</span></div>
                                    <div class="single-widget-search-input">
                                        <input type="text" placeholder="Phone" name="phone" required>
                                    </div>
                                    <div class="single-widget-search-input-title">#Adults <span style="color: red">*</span></div>
                                    <div class="single-widget-search-input">
                                        <input type="number" placeholder="Adults" name="adults" required>
                                    </div>
                                    <div class="single-widget-search-input-title">#Children  <span style="color: red">*</span></div>
                                    <div class="single-widget-search-input">
                                        <input type="number" placeholder="Children" name="children" required>
                                    </div>
                                    <div class="single-widget-search-input-title">#Infants  <span style="color: red">*</span></div>
                                    <div class="single-widget-search-input">
                                        <input type="number" placeholder="Infants" name="infants" required>
                                    </div>
                                    <input type="hidden" name="package_id" value="{{$package->id}}">
                                    <button class="text-lg-center text-left btn btn-yellow">
                                       Book Now <i class="fa fa-paper-plane"></i>
                                    </button>
                                    <div class="row">
                                        @foreach($errors->all() as $error)
                                            <div class="col-md-12" style="color: red;">
                                                *{{$error}}<br>
                                            </div>
                                        @endforeach
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- tour details area End -->
    <style>


        /*
        =====
        DEMO
        =====
        */

        @media (min-width: 768px){

            html{
                font-size: 62.5%;
            }
        }

        @media (max-width: 767px){

            html{
                font-size: 55%;
            }
        }

        body{
            font-size: 1.6rem;
            color: #222;

            background-color: #f0f0f0;
            margin: 0;
            -webkit-overflow-scrolling: touch;
            overflow-y: scroll;

            display: flex;
            flex-direction: column;
        }

        p{
            margin-top: 0;
            margin-bottom: 1.5rem;
            line-height: 1.5;
        }

        p:last-child{
            margin-bottom: 0;
        }

        .timeline {
            list-style: none;
            margin: 25px 0 22px;
            padding: 0;
            position: relative;
            -moz-box-sizing: border-box;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
        }
        .timeline:after {
            border: 6px solid;
            border-top-width: 13px;
            border-color: #40a0d0 transparent transparent transparent;
            content: "";
            display: block;
            position: absolute;
            bottom: -19px;
            left: 15px;
        }

        .timeline-horizontal:after {
            border-top-width: 6px;
            border-left-width: 13px;
            border-color: transparent transparent transparent #40a0d0;
            top: 15px;
            right: 0;
            bottom: auto;
            left: auto;
        }
        .timeline-horizontal .timeline-milestone {
            border-top: 2px solid #40a0d0;
            display: inline;
            float: left;
            margin: 20px 0 0 0;
            padding: 40px 0 0 0;
        }
        .timeline-horizontal .timeline-milestone:before {
            top: -17px;
            left: auto;
        }
        .timeline-horizontal .timeline-milestone.is-completed:after {
            top: -17px;
            left: 0;
        }

        .timeline-milestone {
            border-left: 2px solid #40a0d0;
            margin: 0 0 0 20px;
            padding: 0 0 5px 25px;
            position: relative;
            -moz-box-sizing: border-box;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
        }
        .timeline-milestone:before {
            border: 7px solid #40a0d0;
            border-radius: 50%;
            content: "";
            display: block;
            position: absolute;
            left: -17px;
            width: 32px;
            height: 32px;
            -moz-box-sizing: border-box;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
        }
        .timeline-milestone.is-completed:before {
            background-color: #40a0d0;
        }
        .timeline-milestone.is-completed:after {
            color: #FFF;
            content: "\f00c";
            display: block;
            font-family: "FontAwesome";
            line-height: 32px;
            position: absolute;
            top: 0;
            left: -17px;
            text-align: center;
            width: 32px;
            height: 32px;
            -moz-box-sizing: border-box;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
        }
        .timeline-milestone.is-current:before {
            background-color: #EEE;
        }
        .timeline-milestone.is-future:before {
            background-color: #8DACB8;
            border: 0;
        }
        .timeline-milestone.is-future .timeline-action .title {
            color: #8DACB8;
        }

        .timeline-action {
            background-color: #FFF;
            padding: 12px 10px 12px 20px;
            position: relative;
            top: -15px;
        }
        .timeline-action.is-expandable .title {
            cursor: pointer;
            position: relative;
        }
        .timeline-action.is-expandable .title:focus {
            outline: 0;
            text-decoration: underline;
        }
        .timeline-action.is-expandable .title:after {
            border: 6px solid #666;
            border-color: transparent transparent transparent #666;
            content: "";
            display: block;
            position: absolute;
            top: 6px;
            right: 0;
        }
        .timeline-action.is-expandable .content {
            display: none;
        }
        .timeline-action.is-expandable.is-expanded .title:after {
            border-color: #666 transparent transparent transparent;
            top: 10px;
            right: 5px;
        }
        .timeline-action.is-expandable.is-expanded .content {
            display: block;
        }
        .timeline-action .title, .timeline-action .content {
            word-wrap: break-word;
        }
        .timeline-action .title {
            color: #40a0d0;
            font-size: 18px;
            margin: 0;
        }
        .timeline-action .date {
            display: block;
            font-size: 14px;
            margin-bottom: 15px;
        }
        .timeline-action .content {
            font-size: 14px;
        }

        .file-list {
            line-height: 1.4;
            list-style: none;
            padding-left: 10px;
        }

        body {
            background-color: #EEE;
            font-family: Helvetica, Arial, Verdana, sans-serif;
        }

        h1, h2, h3{
            font-family: var(--body-font);
        }

        .page {
            max-width: 1200px;
            margin: 40px 30px;
        }

        a {
            color: #40a0d0;
            text-decoration: none;
        }
        a:hover, a:focus {
            text-decoration: underline;
        }

        .video-link:before {
            content: "\f03d";
            display: inline-block;
            font-family: "FontAwesome";
            margin-right: 5px;
        }

        a[href*=".pdf"]:before {
            content: "\f0f6";
            display: inline-block;
            font-family: "FontAwesome";
            margin-right: 8px;
        }


    </style>
@endsection
