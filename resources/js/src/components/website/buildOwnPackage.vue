<template>
    <div>
        <div class="blog-comment-area">
            <form class="tp-form-wrap bg-gray tp-form-wrap-one">
                <h3>Personal Information</h3>
                <br>
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <label class="single-input-wrap">
                            <span class="single-input-title"><i class="fa fa-user"></i> Name</span>
                            <input type="text">
                        </label>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <label class="single-input-wrap">
                            <span class="single-input-title"><i class="fa fa-envelope"></i> Email</span>
                            <input type="text">
                        </label>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <label class="single-input-wrap">
                            <span class="single-input-title"><i class="fa fa-phone"></i> Telephone</span>
                            <input type="text">
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
                            <input type="text" class="returning-date custom-select" placeholder="Travel Date">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <label class="single-input-wrap">
                            <span class="single-input-title"><i class="fa fa-adjust"></i> Flexibility</span>
                            <input type="number">
                        </label>
                    </div>
                    <div class="col-lg-4 col-md-4">
                        <label class="single-input-wrap">
                            <span class="single-input-title"><i class="fa fa-male"></i> Adults (+12 Years)</span>
                            <input type="number">
                        </label>
                    </div>
                    <div class="col-lg-4 col-md-4">
                        <label class="single-input-wrap">
                            <span class="single-input-title"><i class="fa fa-child"></i> Children (2-12 Years)</span>
                            <input type="number">
                        </label>
                    </div>
                    <div class="col-lg-4 col-md-4">
                        <label class="single-input-wrap">
                            <span class="single-input-title"><i class="fa fa-child"></i> Infants (0-2 Years)</span>
                            <input type="number">
                        </label>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <label class="single-input-wrap">
                            <span class="single-input-title"><i class="fa fa-money"></i> Budget</span>
                            <input type="text">
                        </label>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <label class="single-input-wrap style-two">
                            <span class="single-input-title"><i class="fa fa-bed"></i> Room Type</span>
                            <select class="nice-select custom-select">
                                <option>Single</option>
                                <option>Double</option>
                                <option>Triple</option>
                                <option>Quadruple</option>
                            </select>
                        </label>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <label class="single-input-wrap style-two">
                            <span class="single-input-title"><i class="fa fa-star"></i> Hotel Rating</span>
                            <select class="nice-select custom-select">
                                <option>Any</option>
                                <option>1 Star</option>
                                <option>2 Star</option>
                                <option>3 Star</option>
                                <option>4 Star</option>
                                <option>5 Star</option>
                            </select>
                        </label>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <label class="single-input-wrap style-two">
                            <span class="single-input-title"><i class="fa fa-map-marker"></i> Hotel Location</span>
                            <select class="nice-select custom-select">
                                <option>City Center</option>
                                <option>Beach</option>
                                <option>Airport</option>
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
                    <div id="countries" class="col-lg-12 col-md-12">
                        <div id="country-1">
                            <div class="row">
                                <div class="col-lg-6 col-md-6">
                                    <label class="single-input-wrap style-two">
                                        <span class="single-input-title"><i class="fa fa-map-marker"></i> Country</span>
                                        <select class="nice-select custom-select">
                                            <option>City Center</option>
                                            <option>Beach</option>
                                            <option>Airport</option>
                                        </select>
                                    </label>
                                </div>
                                <div class="col-lg-3 col-md-3" style="padding-top: 28px;">
                                    <button style="width: 100%;" class="btn btn-success add-city" id="add-city-1"><i class="fa fa-plus"></i> Add City</button>
                                </div>
                                <div class="col-lg-3 col-md-3" style="padding-top: 28px;">
                                    <button style="background-color: red;width: 100%;" id="remove-country-1" class="btn btn-yellow remove-country" href="#"><i class="fa fa-trash"></i> Remove Country</button>
                                </div>
                            </div>
                            <div id="cities-1" class="row" style="padding-left: 45px;padding-right: 45px;">
                                <div class="row city" id="city-1-1">
                                    <div class="col-lg-6 col-md-6">
                                        <label class="single-input-wrap style-two">
                                            <span class="single-input-title"><i class="fa fa-map-marker"></i> City</span>
                                            <select class="nice-select custom-select">
                                                <option>City Center</option>
                                                <option>Beach</option>
                                                <option>Airport</option>
                                            </select>
                                        </label>
                                    </div>
                                    <div class="col-lg-3 col-md-3">
                                        <label class="single-input-wrap">
                                            <span class="single-input-title"><i class="fa fa-child"></i> Nights</span>
                                            <input type="number">
                                        </label>
                                    </div>
                                    <div class="col-lg-3 col-md-3" style="margin-top: 28px;">
                                        <a style="background-color: red;width: 100%;" class="btn btn-yellow" href="#"><i class="fa fa-trash"></i> Remove City</a>
                                    </div>
                                </div>

                            </div>
                            <br>
                            <br>
                        </div>
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-12" style="text-align: center;">
                        <a class="btn btn-yellow" href="#"><i class="fa fa-save"></i> Build Package</a>
                    </div>
                </div>

            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "build-own-package"
    }
</script>

<style scoped>

</style>
