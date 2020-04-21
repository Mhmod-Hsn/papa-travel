
<!-- navbar area start -->
<nav class="navbar navbar-area navbar-expand-lg nav-style-01">
    <div class="container nav-container">
        <div class="responsive-mobile-menu">
            <div class="mobile-logo">
                <a style="font-weight: bold;color: black;font-size: 25px;" href="{{route('home')}}">
                    <img src="{{asset('images/logo/logo 1.png')}}" alt="">
                </a>
            </div>
            <button class="navbar-toggler float-right" type="button" data-toggle="collapse" data-target="#tp_main_menu"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggle-icon">
                        <span class="line"></span>
                        <span class="line"></span>
                        <span class="line"></span>
                    </span>
            </button>
            <div class="nav-right-content">
                <ul class="pl-0">
                    <li class="top-bar-btn-booking">
                        <a class="btn btn-yellow" href="{{route('home')}}">Create Your Package <i class="fa fa-paper-plane"></i></a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="collapse navbar-collapse" id="tp_main_menu">
            <div class="logo-wrapper desktop-logo">
                <a style="font-weight: bold;color: white;font-size: 22px;" href="{{route('home')}}" class="main-logo">
                    <img src="{{asset('images/logo/logo 2.png')}}" alt="">
                </a>
                <a style="font-weight: bold;color: black;font-size: 22px;" href="{{route('home')}}" class="sticky-logo">
                    <img src="{{asset('images/logo/logo 1.png')}}" alt="">
                </a>
            </div>
            <ul class="navbar-nav">
                <li>
                    <a href="{{route('home')}}">Home</a>
                </li>
                <li>
                    <a href="{{route('package_list')}}">Packages</a>
                </li>
                <li>
                    <a href="{{route('blog')}}">Blog</a>
                </li>
                <li>
                    <a href="{{route('contact_us')}}">Contact Us</a>
                </li>
                <li id="insurance-button">
                    <a href="{{route('insurance')}}">Insurance</a>
                </li>
            </ul>
        </div>
        <div class="nav-right-content">
            <ul>
                <li>
                    <a class="btn btn-yellow" href="{{route('create_package')}}">Build Your Package <i class="fa fa-paper-plane"></i></a>
                </li>
            </ul>
        </div>
    </div>
</nav>
<!-- navbar area end -->
