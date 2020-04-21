@extends('layouts.website')

@section('title') Create Package |   @endsection

@section('content')
    <!-- breadcrumb area start -->
    <div class="breadcrumb-area jarallax" style="background-image:url(/images/website/bg/1.png);">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb-inner">
                        <h1 class="page-title">Create Package</h1>
                        <ul class="page-list">
                            <li><a href="index.html">Home</a></li>
                            <li>Create Package</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- breadcrumb area End -->

    <!-- blog area start -->
    <div class="blog-details-area pd-top-120">
        <div class="container w-75">
            <div class="row">
                <div class="col-lg-12">
                    <!-- blog-comment-area start -->
                    <div class="blog-comment-area">
                        <form class="tp-form-wrap bg-gray tp-form-wrap-one">
                            <h3>Personal Information</h3>
                            <br>
                            <div class="row">
                                <div class="col-lg-12 col-md-12">
                                    <label class="single-input-wrap">
                                        <span class="single-input-title"><i class="fa fa-user"></i> Name</span>
                                        <input id="name" type="text">
                                    </label>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <label class="single-input-wrap">
                                        <span class="single-input-title"><i class="fa fa-envelope"></i> Email</span>
                                        <input id="email" type="text">
                                    </label>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <label class="single-input-wrap">
                                        <span class="single-input-title"><i class="fa fa-phone"></i> Telephone</span>
                                        <input id="phone" type="text">
                                    </label>
                                </div>
                            </div>
                            <hr>
                            <br>
                            <h3>Preferences</h3>
                            <br>
                            <div class="row">
                                <div class="col-lg-6 col-md-6">
                                    <div class="single-widget-search-input-title"><i class="fa fa-calendar-minus-o"></i> Travel Date</div>
                                    <div class="single-widget-search-input">
                                        <input id="travel_date" type="text" class="returning-date custom-select" placeholder="Travel Date">
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <label class="single-input-wrap">
                                        <span class="single-input-title"><i class="fa fa-adjust"></i> Flexibility</span>
                                        <input id="flexibility" type="number">
                                    </label>
                                </div>
                                <div class="col-lg-4 col-md-4">
                                    <label class="single-input-wrap">
                                        <span class="single-input-title"><i class="fa fa-male"></i> Adults (+12 Years)</span>
                                        <input id="adults" type="number">
                                    </label>
                                </div>
                                <div class="col-lg-4 col-md-4">
                                    <label class="single-input-wrap">
                                        <span class="single-input-title"><i class="fa fa-child"></i> Children (2-12 Years)</span>
                                        <input id="children" type="number">
                                    </label>
                                </div>
                                <div class="col-lg-4 col-md-4">
                                    <label class="single-input-wrap">
                                        <span class="single-input-title"><i class="fa fa-child"></i> Infants (0-2 Years)</span>
                                        <input id="infants" type="number">
                                    </label>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <label class="single-input-wrap">
                                        <span class="single-input-title"><i class="fa fa-money"></i> Budget</span>
                                        <input id="budget" type="text">
                                    </label>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <label class="single-input-wrap style-two">
                                        <span class="single-input-title"><i class="fa fa-bed"></i> Room Type</span>
                                        <select id="room_type" class="nice-select custom-select">
                                            <option value="Single">Single</option>
                                            <option value="Double">Double</option>
                                            <option value="Triple">Triple</option>
                                            <option value="Quadruple">Quadruple</option>
                                        </select>
                                    </label>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <label class="single-input-wrap style-two">
                                        <span class="single-input-title"><i class="fa fa-star"></i> Hotel Rating</span>
                                        <select id="hotel_rating" class="nice-select custom-select">
                                            <option value="Any">Any</option>
                                            <option value="1">1 Star</option>
                                            <option value="2">2 Star</option>
                                            <option value="3">3 Star</option>
                                            <option value="4">4 Star</option>
                                            <option value="5">5 Star</option>
                                        </select>
                                    </label>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <label class="single-input-wrap style-two">
                                        <span class="single-input-title"><i class="fa fa-map-marker"></i> Hotel Location</span>
                                        <select id="hotel_location" class="nice-select custom-select">
                                            <option value="City Center">City Center</option>
                                            <option value="Beach">Beach</option>
                                            <option value="Airport">Airport</option>
                                        </select>
                                    </label>
                                </div>

                            </div>

                            <hr>
                            <br>
                            <h3>Destinations</h3>
                            <br>


                            <div class="row">
                                <div class="col-lg-12 col-md-12">
                                    <button id="add-country" class="btn btn-success"><i class="fa fa-plus"></i> Add Country</button>
                                <br>
                                <br>
                                </div>
                                {{--Countries--}}
                                <div id="countries" class="col-lg-12 col-md-12">
                                    {{--Country 1--}}
                                    <div id="country-1" class="country-section">
                                        <div class="row">
                                            {{--Country Input--}}
                                            <div class="col-lg-6 col-md-6">
                                                <label class="single-input-wrap">
                                                    <span class="single-input-title"><i class="fa fa-map-marker"></i> Country</span>
                                                    <select id="country-select-1" class="country" onchange="countrySelected('#country-select-1', '1')">
                                                        @foreach($countries as $index => $country)
                                                            <option value="{{$country->name}}">
                                                                {{$country->name}}
                                                            </option>
                                                        @endforeach
                                                    </select>
                                                </label>
                                            </div>
                                            {{--Add City Button--}}
                                            <div class="col-lg-3 col-md-3" style="padding-top: 28px;">
                                                <button onclick="event.preventDefault();addCity('#cities-1');" style="width: 100%;" class="btn btn-success"><i class="fa fa-plus"></i> Add City</button>
                                            </div>
                                            {{--Remove Country Button--}}
                                            <div class="col-lg-3 col-md-3" style="padding-top: 28px;">
                                                <button onclick="event.preventDefault();removeHTML('#country-1')" style="width: 100%;" class="btn btn-danger"><i class="fa fa-trash"></i> Remove Country</button>
                                            </div>
                                        </div>
                                        {{--Cities--}}
                                        <div id="cities-1" class="row" style="padding-left: 45px;padding-right: 45px;">

                                        </div>
                                        <br>
                                        <br>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-12" style="text-align: center;">
                                    <a class="btn btn-yellow" onclick="event.preventDefault();buildPackage()"><i class="fa fa-save"></i> Build Package</a>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <br>
    <br>
    <!-- blog-comment-area start -->
    <script>
        let no_of_countries = 1;
        var countries = @json($countries);
        var country_index = 0;

        $("#add-country").on("click", function (e) {
            e.preventDefault();
            no_of_countries++;

            var countriesSelect =`<select id="country-select-${no_of_countries}" class="country"
                                    onchange="countrySelected('#country-select-${no_of_countries}', ${no_of_countries})">`;
            for(var i = 0;i< countries.length; i++){
                countriesSelect += `<option value="${countries[i].name}">
                                   ${countries[i].name}
                    </option>`;
            }
            countriesSelect += "</select>";

            $("#countries").append(
                `<div id="country-${no_of_countries}" class="country-section">
                    <div class="row">
                        {{--Country Input--}}
                        <div class="col-lg-6 col-md-6">
                            <label class="single-input-wrap">
                                <span class="single-input-title"><i class="fa fa-map-marker"></i> Country</span>
                                ${countriesSelect}
                            </label>
                        </div>
                        {{--Add City Button--}}
                        <div class="col-lg-3 col-md-3" style="padding-top: 28px;">
                            <button onclick="event.preventDefault();addCity('#cities-${no_of_countries}')" style="width: 100%;" class="btn btn-success add-city"><i class="fa fa-plus"></i> Add City</button>
                        </div>
                        {{--Remove Country Button--}}
                        <div class="col-lg-3 col-md-3" style="padding-top: 28px;">
                            <button onclick="event.preventDefault();removeHTML('#country-${no_of_countries}')" style="width: 100%;" class="btn btn-danger"><i class="fa fa-trash"></i> Remove Country</button>
                        </div>
                    </div>
                    {{--Cities--}}
                    <div id="cities-${no_of_countries}" class="row" style="padding-left: 45px;padding-right: 45px;">

                    </div>
                    <br>
                    <br>
                </div>`);
        });


        function addCity(selector) {
            let newID = Math.floor((Math.random() * 10000));

            var citiesSelect = '<select class="city">';
            var cities = countries[country_index].cities;
            for(var i = 0;i< cities.length; i++){
                citiesSelect += `<option value="${cities[i].name}">
                                   ${cities[i].name}
                    </option>`;
            }
            citiesSelect += "</select>";

            $(selector).append(
            `<div id="city-${newID}" class="col-lg-12 col-md-12 city-section">
                <div class="row">
                    <div class="col-lg-6 col-md-6">
                        <label class="single-input-wrap">
                            <span class="single-input-title"><i class="fa fa-map-marker"></i> City</span>
                            ${citiesSelect}
                        </label>
                    </div>
                    <div class="col-lg-3 col-md-3">
                        <label class="single-input-wrap">
                            <span class="single-input-title"><i class="fa fa-star"></i> Nights</span>
                            <input id="nights" type="number">
                        </label>
                    </div>
                    <div class="col-lg-3 col-md-3" style="margin-top: 28px;">
                        <button onclick="event.preventDefault();removeHTML('#city-${newID}')" style="width: 100%;" class="btn btn-danger"><i class="fa fa-trash"></i> Remove City</button>
                    </div>
                </div>
            </div>`);
        }

        function countrySelected(selector, number){
           var selectedCountry = $(selector).children("option:selected")[0].value;

           $(`#cities-${number}`).empty();

           for (var i = 0; i < countries.length; i++){
               console.log(i);
               if (selectedCountry == countries[i].name){
                   country_index = i;
                   console.log(country_index);
                   break;
               }
           }
        }

        function removeHTML(selector) {
            $(selector).remove();
        }

        function buildPackage() {
            let travelDate = $("#travel_date").val().split('/');
            let form = {
                travel_date: travelDate[2]+'-'+travelDate[0]+'-'+travelDate[1],
                flexibility: $("#flexibility").val(),
                budget: $("#budget").val(),
                room_type: $("#room_type").val(),
                hotel_rating: $("#hotel_rating").val(),
                hotel_location: $("#hotel_location").val(),
                booking: {
                    name: $("#name").val(),
                    email: $("#email").val(),
                    phone: $("#phone").val(),
                    adults: $("#adults").val(),
                    children: $("#children").val(),
                    infants: $("#infants").val()
                },
                destinations: []
            };
            $('.country-section').each(function(index,element){
                $(element).find('.city-section').each(function(index2,element2){
                    form.destinations.push({
                       country: $(element).find('.country').val(),
                       city: $(element2).find('.city').val(),
                       nights: $(element2).find('#nights').val()
                    });
                });
            });
            $.ajax({
                url: '/api/custom-package',
                method: 'POST',
                data: JSON.stringify(form),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest',
                    'X-CSRF-TOKEN' : $('meta[name="csrf-token"]').attr('content')
                },
                success: function (data, textStatus, xhr) {
                    if(xhr.status === 200) {
                        window.location.href = "/submitted";
                    }
                }
            })
        }

    </script>
@endsection
