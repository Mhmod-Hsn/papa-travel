@extends('layouts.website')

@section('title') Contact Us |   @endsection

@section('content')
    <!-- breadcrumb area start -->
    <div class="breadcrumb-area jarallax" style="background-image:url(/images/website/bg/1.png);">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb-inner">
                        <h1 class="page-title">Contact Us</h1>
                        <ul class="page-list">
                            <li><a href="/">Home</a></li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- breadcrumb area End -->

    <!-- contact area End -->
    <div class="contact-area pd-top-108">
        <div class="container">
            <div class="row">
                <div class="col-xl-5 offset-xl-1 col-lg-6">
                    <div class="thumb">
                        <img src="/images/website/others/11.png" alt="img">
                    </div>
                </div>
                <div class="col-xl-5 col-lg-6">
                    <form class="tp-form-wrap" action="/contact-us" method="post">
                        {{csrf_field()}}
                        <div class="row">
                            <div class="col-md-6">
                                <label class="single-input-wrap style-two">
                                    <span class="single-input-title">Name <span style="color: red">*</span></span>
                                    <input type="text" name="name" placeholder="Name" required>
                                </label>
                            </div>
                            <div class="col-md-6">
                                <label class="single-input-wrap style-two">
                                    <span class="single-input-title">Phone <span style="color: red">*</span></span>
                                    <input type="text" name="phone" placeholder="Phone" required>
                                </label>
                            </div>
                            <div class="col-lg-12">
                                <label class="single-input-wrap style-two">
                                    <span class="single-input-title">Email <span style="color: red">*</span></span>
                                    <input type="email" name="email" placeholder="Email" required>
                                </label>
                            </div>
                            <div class="col-lg-12">
                                <label class="single-input-wrap style-two">
                                    <span class="single-input-title">Message <span style="color: red">*</span></span>
                                    <textarea name="message" placeholder="Message" required></textarea>
                                </label>
                            </div>
                            <button class="col-12 btn btn-yellow">
                                Send Message
                            </button>
                            <div class="row">
                                @foreach($errors->all() as $error)
                                    <div class="col-md-12" style="color: red;">
                                        *{{$error}}<br>
                                    </div>
                                @endforeach
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- contact area End -->

    <!-- contact info area End -->
    <div class="contact-info-area pd-top-120">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-7 col-lg-8 order-lg-12">
                    <iframe class="contact-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.520089583355!2d31.417894315450866!3d30.02193362659001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583ce0d90206f7%3A0x55c63842a6e43257!2sPack&#39;N%20Go!5e0!3m2!1sen!2seg!4v1579045125434!5m2!1sen!2seg"></iframe>
                </div>
                <div class="col-xl-3 col-lg-4 order-lg-1">
                    <div class="contact-info bg-gray">
                        <p>
                            <i class="fa fa-map-marker"></i>
                            <span>Villa 224, Northern 90th Rd, 5th district, Cairo, Egypt</span>
                        </p>
                        <p>
                            <i class="fa fa-clock-o"></i>
                            <span>Office Hour 9:00 to 5:00 Fridays and Saturdays are off</span>
                        </p>
                        <p>
                            <i class="fa fa-envelope"></i>
                            <span>Email: <span>info@packandgo-me.com</span></span>
                        </p>
                        <p>
                            <i class="fa fa-phone"></i>
                            <span>telephone: <span>+01011211886</span></span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- contact info area End -->
@endsection
