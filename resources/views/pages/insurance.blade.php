@extends('layouts.website')

@section('title') Insurance |   @endsection

@section('content')
    <!-- breadcrumb area start -->
    <div class="breadcrumb-area jarallax" style="background-image:url(/images/website/bg/1.png);">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb-inner">
                        <h1 class="page-title">Insurance</h1>
                        <ul class="page-list">
                            <li><a href="/">Home</a></li>
                            <li>Insurance</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- breadcrumb area End -->

    <!-- intro area start -->
    <div class="newslatter-area pd-top-110" id="insurance">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-6 col-lg-9">
                    <div class="section-title text-center">
                        <h2 class="title wow animated fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.1s">Insurance</h2>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <form class="tp-form-wrap" method="post" action="/insurance" enctype="multipart/form-data">
                    {{csrf_field()}}
                    <div class="row">
                        <h3 class="col-md-12">Passport Information</h3>
                        <div class="col-md-7">
                            <div class="row">
                                <div class="col-md-6">
                                    <label class="single-input-wrap style-two">
                                        <span class="single-input-title">Name *full name like passport*</span>
                                        <input type="text" name="passport_name">
                                    </label>
                                </div>
                                <div class="col-md-6">
                                    <label class="single-input-wrap style-two">
                                        <span class="single-input-title">Birth Date</span>
                                        <input type="date" name="birth_date">
                                    </label>
                                </div>
                                <div class="col-md-6">
                                    <label class="single-input-wrap style-two">
                                        <span class="single-input-title">Passport Number</span>
                                        <input type="text" name="passport_number">
                                    </label>
                                </div>
                                <div class="col-md-6">
                                    <label class="single-input-wrap style-two">
                                        <span class="single-input-title">Expire Date</span>
                                        <input type="date" name="expire_date">
                                    </label>
                                </div>
                                <div class="col-md-6">
                                    <label class="single-input-wrap style-two">
                                        <span class="single-input-title">Gender</span>
                                        <select class="single-input-wrap style-two" name="gender">
                                            <option value="male">
                                                Male
                                            </option>
                                            <option value="female">
                                                Female
                                            </option>
                                        </select>
                                    </label>
                                </div>
                                <div class="col-md-6">
                                    <label class="single-input-wrap style-two">
                                        <span class="single-input-title">Nationality</span>
                                        <select class="single-input-wrap style-two" name="nationality">
                                            @foreach($countries as $country)
                                                <option value="{{$country->name}}">
                                                    {{$country->name}}
                                                </option>
                                            @endforeach
                                        </select>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-5">

                            <div class="col-md-6">
                                <label class="single-input-wrap style-two">
                                    <span class="single-input-title">Or Upload Your Passport</span>
                                </label>
                            </div>
                            <div class="col-md-6">
                                <label class="single-input-wrap style-two">
                                    <span class="single-input-title">Image</span>
                                    <input type="file" name="image">
                                </label>
                            </div>
                        </div>
                        <div class="row">
                            @foreach($errors->all() as $error)
                                <div class="col-md-12" style="color: red;">
                                    *{{$error}}<br>
                                </div>
                            @endforeach
                        </div>
                    </div>
                    <div class="row">
                        <h3 class="col-md-12">Personal Information</h3>
                        <div class="col-md-6">
                            <label class="single-input-wrap style-two">
                                <span class="single-input-title">Name <span style="color: red">*</span></span>
                                <input type="text" name="name" required>
                            </label>
                        </div>
                        <div class="col-md-6">
                            <label class="single-input-wrap style-two">
                                <span class="single-input-title">Address <span style="color: red">*</span></span>
                                <input type="text" name="address" required>
                            </label>
                        </div>
                        <div class="col-md-6">
                            <label class="single-input-wrap style-two">
                                <span class="single-input-title">Phone <span style="color: red">*</span></span>
                                <input type="text" name="phone" required>
                            </label>
                        </div>
                        <div class="col-md-6">
                            <label class="single-input-wrap style-two">
                                <span class="single-input-title">Insurance Type<span style="color: red">*</span></span>
                                <select class="single-input-wrap style-two" name="insurance_type">
                                    @foreach($insurance_types as $insurance)
                                        <option value="{{$insurance}}">
                                            {{$insurance}}
                                        </option>
                                    @endforeach
                                </select>
                            </label>
                        </div>
                        <div class="col-md-6">
                            <label class="single-input-wrap style-two">
                                <span class="single-input-title">Duration<span style="color: red">*</span></span>
                                <select class="single-input-wrap style-two" name="duration">
                                    @foreach($durations as $duration)
                                        <option value="{{$duration}}">
                                            {{$duration}}
                                        </option>
                                    @endforeach
                                </select>
                            </label>
                        </div>
                        <div class="col-md-6">
                            <label class="single-input-wrap style-two">
                                <span class="single-input-title">Start Date<span style="color: red">*</span></span>
                                <input type="date" name="start_date">
                            </label>
                        </div>
                    </div>

                    <div class="col-12 justify-content-center">
                        <input class="btn btn-yellow mt-3 text-center" type="submit" value="Submit">
                    </div>
                </form>
            </div>
        </div>
        <br>
    </div>
        <!-- team area end -->
@endsection
