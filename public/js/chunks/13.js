(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/package/create.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/package/create.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-form-wizard */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.js");
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-form-wizard/dist/vue-form-wizard.min.css */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.min.css");
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "create",
  mounted: function mounted() {// this.getRoles();
  },
  data: function data() {
    return {
      roles: [],
      form: {
        home_page: false,
        title: '',
        date: '',
        price: 0,
        currency: '',
        days: 0,
        nights: 0,
        season: '',
        description: '',
        dbl: 0,
        tbl: 0,
        sgl: 0,
        child: 0,
        images: [],
        schedule: [],
        inclusions: [],
        exclusions: [],
        accommodations: []
      },
      uploadedImage: null,
      is_requesting: false
    };
  },
  components: {
    FormWizard: vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__["FormWizard"],
    TabContent: vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__["TabContent"]
  },
  methods: {
    addSchedule: function addSchedule() {
      this.form.schedule.push({
        day_number: this.form.schedule.length,
        description: ''
      });
    },
    removeSchedule: function removeSchedule(index) {
      if (this.form.schedule.length > 0) {
        this.form.schedule.splice(index, 1);
      }
    },
    addInclusion: function addInclusion() {
      this.form.inclusions.push({
        name: ''
      });
    },
    removeInclusion: function removeInclusion(index) {
      if (this.form.inclusions.length > 0) {
        this.form.inclusions.splice(index, 1);
      }
    },
    addExclusion: function addExclusion() {
      this.form.exclusions.push({
        name: ''
      });
    },
    removeExclusion: function removeExclusion(index) {
      if (this.form.exclusions.length > 0) {
        this.form.exclusions.splice(index, 1);
      }
    },
    addAccommodation: function addAccommodation() {
      this.form.accommodations.push({
        city: '',
        hotel: '',
        rate: 1,
        nights: 1,
        dbl: 0,
        sgl: 0,
        child: 0
      });
    },
    removeAccommodation: function removeAccommodation(index) {
      if (this.form.accommodations.length > 0) {
        this.form.accommodations.splice(index, 1);
      }
    },
    uploadImages: function uploadImages(e) {
      var selectedImages = e.target.files;

      if (!selectedImages.length) {
        return false;
      }

      this.form.images = [];

      for (var i = 0; i < selectedImages.length; i++) {
        this.form.images.push(selectedImages[i]);
      }
    },
    create: function create() {
      var _this = this;

      this.is_requesting = true;
      var form_data = new FormData();

      for (var key in this.form) {
        if (key === 'images' && this.form.hasOwnProperty(key)) {
          for (var i = 0; i < this.form[key].length; i++) {
            form_data.append(key + '[]', this.form[key][i]);
          }
        } else if (key === 'schedule' || key === 'inclusions' || key === 'exclusions' || key === 'accommodations') {
          form_data.append(key, JSON.stringify(this.form[key]));
        } else {
          form_data.append(key, this.form[key]);
        }
      }

      this.$store.dispatch('package/create', form_data).then(function (response) {
        _this.$router.push("/dashboard/package");

        _this.$vs.notify({
          title: 'Success',
          text: response.data.message,
          iconPack: 'feather',
          icon: 'icon-check',
          color: 'success'
        });
      }).catch(function (error) {
        console.log(error);

        _this.$vs.notify({
          title: 'Error',
          text: error.response.data.errors[Object.keys(error.response.data.errors)[0]][0],
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    },
    previewImage: function previewImage(event) {
      var _this2 = this;

      // Reference to the DOM input element
      var input = event.target; // Ensure that you have a file before attempting to read it

      if (input.files && input.files[0]) {
        // create a new FileReader to read this image and convert to base64 format
        var reader = new FileReader(); // Define a callback function to run, when FileReader finishes its job

        reader.onload = function (e) {
          // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
          // Read image as base64 and set to imageData
          _this2.uploadedImage = e.target.result;
          _this2.form.image = input.files;
        }; // Start the reader job - read file as a data url (base64 format)


        reader.readAsDataURL(input.files[0]);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/package/create.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/package/create.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".image-preview {\n  font-family: \"Helvetica Neue\",Helvetica,Arial,sans-serif;\n  top: 6px;\n  position: relative;\n}[dir=ltr] .image-preview {\n  padding-right: 20px;\n}[dir=rtl] .image-preview {\n  padding-left: 20px;\n}\n#img-upload {\n  display: none;\n}\nimg.preview {\n  width: 55px;\n  height: 55px;\n}\n[dir] img.preview {\n  border-radius: 50%;\n  background-color: white;\n  border: 1px solid #DDD;\n  padding: 5px;\n}\n.vs-input-number {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/package/create.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/package/create.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/package/create.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/package/create.vue?vue&type=template&id=14a1ec22&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/package/create.vue?vue&type=template&id=14a1ec22& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.can("create-package")
      ? _c(
          "div",
          { staticClass: "vx-col w-full mb-base" },
          [
            _c(
              "vx-card",
              { ref: "create", attrs: { title: "Create Package" } },
              [
                _c(
                  "form-wizard",
                  {
                    attrs: {
                      color: "rgba(var(--vs-primary), 1)",
                      title: null,
                      subtitle: null,
                      finishButtonText: "Submit"
                    },
                    on: { "on-complete": _vm.create }
                  },
                  [
                    _c(
                      "tab-content",
                      {
                        staticClass: "mb-5",
                        attrs: { title: "Package Details" }
                      },
                      [
                        _c("div", { staticClass: "vx-row" }, [
                          _c(
                            "div",
                            { staticClass: "vx-col md:w-1/2 w-full mt-5" },
                            [
                              _c("vs-input", {
                                staticClass: "w-full",
                                attrs: { label: "Package Title" },
                                model: {
                                  value: _vm.form.title,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "title", $$v)
                                  },
                                  expression: "form.title"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "vx-col md:w-1/2 w-full mt-5" },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "vs-component vs-con-input-label vs-input w-full vs-input-primary is-label-placeholder"
                                },
                                [
                                  _c("div", { staticClass: "vs-con-input" }, [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.date,
                                          expression: "form.date"
                                        }
                                      ],
                                      staticClass:
                                        "vs-inputx vs-input--input normal hasIcon hasValue dob-input",
                                      staticStyle: {
                                        border: "1px solid rgba(0, 0, 0, 0.2)"
                                      },
                                      attrs: { required: "", type: "date" },
                                      domProps: { value: _vm.form.date },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "date",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "input-span-placeholder vs-input--placeholder normal normal vs-placeholder-label"
                                      },
                                      [
                                        _vm._v(
                                          "\n                            Date\n                            "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("i", {
                                      staticClass:
                                        "vs-icon notranslate icon-scale icon-inputx notranslate vs-input--icon feather icon-calendar null"
                                    })
                                  ]),
                                  _vm._v(" "),
                                  _c("span")
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "vx-col md:w-1/2 w-full mt-5" },
                            [
                              _c(
                                "div",
                                { staticClass: "centerx pt-6" },
                                [
                                  _c("vs-input-number", {
                                    attrs: { label: "Price:" },
                                    model: {
                                      value: _vm.form.price,
                                      callback: function($$v) {
                                        _vm.$set(_vm.form, "price", $$v)
                                      },
                                      expression: "form.price"
                                    }
                                  })
                                ],
                                1
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "vx-col md:w-1/2 w-full mt-5" },
                            [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.currency,
                                    expression: "form.currency"
                                  }
                                ],
                                attrs: {
                                  type: "radio",
                                  name: "currency",
                                  value: "LE"
                                },
                                domProps: {
                                  checked: _vm._q(_vm.form.currency, "LE")
                                },
                                on: {
                                  change: function($event) {
                                    return _vm.$set(_vm.form, "currency", "LE")
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("label", [_vm._v("LE")]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.currency,
                                    expression: "form.currency"
                                  }
                                ],
                                attrs: {
                                  type: "radio",
                                  name: "currency",
                                  value: "$"
                                },
                                domProps: {
                                  checked: _vm._q(_vm.form.currency, "$")
                                },
                                on: {
                                  change: function($event) {
                                    return _vm.$set(_vm.form, "currency", "$")
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("label", [_vm._v("$")])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "vx-col md:w-1/2 w-full mt-5" },
                            [
                              _c(
                                "div",
                                { staticClass: "centerx pt-6" },
                                [
                                  _c("vs-input-number", {
                                    attrs: { label: "Days:" },
                                    model: {
                                      value: _vm.form.days,
                                      callback: function($$v) {
                                        _vm.$set(_vm.form, "days", $$v)
                                      },
                                      expression: "form.days"
                                    }
                                  })
                                ],
                                1
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "vx-col md:w-1/2 w-full mt-5" },
                            [
                              _c(
                                "div",
                                { staticClass: "centerx pt-6" },
                                [
                                  _c("vs-input-number", {
                                    attrs: { label: "Nights:" },
                                    model: {
                                      value: _vm.form.nights,
                                      callback: function($$v) {
                                        _vm.$set(_vm.form, "nights", $$v)
                                      },
                                      expression: "form.nights"
                                    }
                                  })
                                ],
                                1
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "vx-col md:w-1/2 w-full mt-5" },
                            [
                              _c("vs-input", {
                                staticClass: "w-full",
                                attrs: { label: "Season" },
                                model: {
                                  value: _vm.form.season,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "season", $$v)
                                  },
                                  expression: "form.season"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "vx-col md:w-1/2 w-full mt-5" },
                            [
                              _c("input", {
                                staticClass: "form-control",
                                attrs: { type: "file", multiple: "" },
                                on: { change: _vm.uploadImages }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "vx-col md:w-1/2 w-full mt-5" },
                            [
                              _c("ul", { staticClass: "switch-container" }, [
                                _c(
                                  "li",
                                  [
                                    _c("label", [_vm._v("Is Featured")]),
                                    _vm._v(" "),
                                    _c("vs-switch", {
                                      model: {
                                        value: _vm.form.home_page,
                                        callback: function($$v) {
                                          _vm.$set(_vm.form, "home_page", $$v)
                                        },
                                        expression: "form.home_page"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "vx-col w-full mt-5" },
                            [
                              _c("vs-textarea", {
                                attrs: { label: "Description" },
                                model: {
                                  value: _vm.form.description,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "description", $$v)
                                  },
                                  expression: "form.description"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "vx-col md:w-1/2 w-full mt-5" },
                            [
                              _c(
                                "div",
                                { staticClass: "centerx pt-6" },
                                [
                                  _c("vs-input-number", {
                                    attrs: { label: "Triple:" },
                                    model: {
                                      value: _vm.form.tbl,
                                      callback: function($$v) {
                                        _vm.$set(_vm.form, "tbl", $$v)
                                      },
                                      expression: "form.tbl"
                                    }
                                  })
                                ],
                                1
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "vx-col md:w-1/2 w-full mt-5" },
                            [
                              _c(
                                "div",
                                { staticClass: "centerx pt-6" },
                                [
                                  _c("vs-input-number", {
                                    attrs: { label: "Double:" },
                                    model: {
                                      value: _vm.form.dbl,
                                      callback: function($$v) {
                                        _vm.$set(_vm.form, "dbl", $$v)
                                      },
                                      expression: "form.dbl"
                                    }
                                  })
                                ],
                                1
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "vx-col md:w-1/2 w-full mt-5" },
                            [
                              _c(
                                "div",
                                { staticClass: "centerx pt-6" },
                                [
                                  _c("vs-input-number", {
                                    attrs: { label: "Single:" },
                                    model: {
                                      value: _vm.form.sgl,
                                      callback: function($$v) {
                                        _vm.$set(_vm.form, "sgl", $$v)
                                      },
                                      expression: "form.sgl"
                                    }
                                  })
                                ],
                                1
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "vx-col md:w-1/2 w-full mt-5" },
                            [
                              _c(
                                "div",
                                { staticClass: "centerx pt-6" },
                                [
                                  _c("vs-input-number", {
                                    attrs: { label: "Child:" },
                                    model: {
                                      value: _vm.form.child,
                                      callback: function($$v) {
                                        _vm.$set(_vm.form, "child", $$v)
                                      },
                                      expression: "form.child"
                                    }
                                  })
                                ],
                                1
                              )
                            ]
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "tab-content",
                      { staticClass: "mb-5", attrs: { title: "Schedule" } },
                      [
                        _c(
                          "div",
                          { staticClass: "vx-row" },
                          [
                            _c(
                              "vs-button",
                              {
                                attrs: {
                                  size: "small",
                                  "icon-pack": "feather",
                                  icon: "icon-add"
                                },
                                on: { click: _vm.addSchedule }
                              },
                              [_vm._v("Add Row")]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _vm._l(_vm.form.schedule, function(section, index) {
                          return _c(
                            "div",
                            { staticClass: "vx-row" },
                            [
                              _c(
                                "div",
                                { staticClass: "vx-col md:w-1/2 w-full" },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "centerx pt-6" },
                                    [
                                      _c("vs-input-number", {
                                        attrs: { label: "Day Number:" },
                                        model: {
                                          value: section.day_number,
                                          callback: function($$v) {
                                            _vm.$set(section, "day_number", $$v)
                                          },
                                          expression: "section.day_number"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "vx-col md:w-1/2 w-full" },
                                [
                                  _c("vs-textarea", {
                                    attrs: { label: "Description" },
                                    model: {
                                      value: section.description,
                                      callback: function($$v) {
                                        _vm.$set(section, "description", $$v)
                                      },
                                      expression: "section.description"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "vx-col w-full" },
                                [
                                  _c(
                                    "vs-button",
                                    {
                                      staticClass: "mt-5",
                                      attrs: {
                                        size: "small",
                                        "icon-pack": "feather",
                                        color: "danger",
                                        icon: "icon-trash"
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.removeSchedule(index)
                                        }
                                      }
                                    },
                                    [_vm._v("Remove Row")]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("vs-divider")
                            ],
                            1
                          )
                        })
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c(
                      "tab-content",
                      {
                        staticClass: "mb-5",
                        attrs: { title: "Inclusions & Exclusions" }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "vx-row" },
                          [
                            _c(
                              "vs-button",
                              {
                                attrs: {
                                  size: "small",
                                  "icon-pack": "feather",
                                  icon: "icon-add"
                                },
                                on: { click: _vm.addInclusion }
                              },
                              [_vm._v("Add Inclusion")]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _vm._l(_vm.form.inclusions, function(inclusion, index) {
                          return _c("div", { staticClass: "vx-row" }, [
                            _c(
                              "div",
                              { staticClass: "vx-col w-full" },
                              [
                                _c("vs-input", {
                                  staticClass: "w-full mt-5",
                                  attrs: { label: "Inclusion " + (index + 1) },
                                  model: {
                                    value: inclusion.name,
                                    callback: function($$v) {
                                      _vm.$set(inclusion, "name", $$v)
                                    },
                                    expression: "inclusion.name"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "vs-button",
                                  {
                                    staticClass: "mt-5",
                                    attrs: {
                                      size: "small",
                                      "icon-pack": "feather",
                                      color: "danger",
                                      icon: "icon-trash"
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.removeInclusion(index)
                                      }
                                    }
                                  },
                                  [_vm._v("Remove Inclusion")]
                                )
                              ],
                              1
                            )
                          ])
                        }),
                        _vm._v(" "),
                        _c("vs-divider"),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "vx-row" },
                          [
                            _c(
                              "vs-button",
                              {
                                attrs: {
                                  size: "small",
                                  "icon-pack": "feather",
                                  icon: "icon-add"
                                },
                                on: { click: _vm.addExclusion }
                              },
                              [_vm._v("Add Exclusion")]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _vm._l(_vm.form.exclusions, function(inclusion, index) {
                          return _c("div", { staticClass: "vx-row" }, [
                            _c(
                              "div",
                              { staticClass: "vx-col w-full" },
                              [
                                _c("vs-input", {
                                  staticClass: "w-full mt-5",
                                  attrs: { label: "Exclusion " + (index + 1) },
                                  model: {
                                    value: inclusion.name,
                                    callback: function($$v) {
                                      _vm.$set(inclusion, "name", $$v)
                                    },
                                    expression: "inclusion.name"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "vs-button",
                                  {
                                    staticClass: "mt-5",
                                    attrs: {
                                      size: "small",
                                      "icon-pack": "feather",
                                      color: "danger",
                                      icon: "icon-trash"
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.removeExclusion(index)
                                      }
                                    }
                                  },
                                  [_vm._v("Remove Exclusion")]
                                )
                              ],
                              1
                            )
                          ])
                        })
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c(
                      "tab-content",
                      {
                        staticClass: "mb-5",
                        attrs: { title: "Accommodation" }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "vx-row" },
                          [
                            _c(
                              "vs-button",
                              {
                                attrs: {
                                  size: "small",
                                  "icon-pack": "feather",
                                  icon: "icon-add"
                                },
                                on: { click: _vm.addAccommodation }
                              },
                              [_vm._v("Add Accommodation")]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _vm._l(_vm.form.accommodations, function(
                          accommodation,
                          index
                        ) {
                          return _c(
                            "div",
                            { staticClass: "vx-row" },
                            [
                              _c(
                                "div",
                                { staticClass: "vx-col md:w-1/2 w-full mt-5" },
                                [
                                  _c("vs-input", {
                                    staticClass: "w-full mt-5",
                                    attrs: { label: "City" },
                                    model: {
                                      value: accommodation.city,
                                      callback: function($$v) {
                                        _vm.$set(accommodation, "city", $$v)
                                      },
                                      expression: "accommodation.city"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "vx-col md:w-1/2 w-full mt-5" },
                                [
                                  _c("vs-input", {
                                    staticClass: "w-full mt-5",
                                    attrs: { label: "Hotel" },
                                    model: {
                                      value: accommodation.hotel,
                                      callback: function($$v) {
                                        _vm.$set(accommodation, "hotel", $$v)
                                      },
                                      expression: "accommodation.hotel"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "vx-col md:w-1/2 w-full mt-5" },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "centerx pt-6" },
                                    [
                                      _c("vs-input-number", {
                                        attrs: { label: "Nights:" },
                                        model: {
                                          value: accommodation.nights,
                                          callback: function($$v) {
                                            _vm.$set(
                                              accommodation,
                                              "nights",
                                              $$v
                                            )
                                          },
                                          expression: "accommodation.nights"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "vx-col md:w-1/2 w-full mt-5" },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "centerx pt-6" },
                                    [
                                      _c("vs-input-number", {
                                        attrs: { label: "Rate:" },
                                        model: {
                                          value: accommodation.rate,
                                          callback: function($$v) {
                                            _vm.$set(accommodation, "rate", $$v)
                                          },
                                          expression: "accommodation.rate"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "vx-col w-full" },
                                [
                                  _c(
                                    "vs-button",
                                    {
                                      staticClass: "mt-5",
                                      attrs: {
                                        size: "small",
                                        "icon-pack": "feather",
                                        color: "danger",
                                        icon: "icon-trash"
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.removeAccommodation(index)
                                        }
                                      }
                                    },
                                    [_vm._v("Remove Row")]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("vs-divider")
                            ],
                            1
                          )
                        })
                      ],
                      2
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/package/create.vue":
/*!***************************************************!*\
  !*** ./resources/js/src/views/package/create.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_vue_vue_type_template_id_14a1ec22___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=14a1ec22& */ "./resources/js/src/views/package/create.vue?vue&type=template&id=14a1ec22&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/js/src/views/package/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/package/create.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_14a1ec22___WEBPACK_IMPORTED_MODULE_0__["render"],
  _create_vue_vue_type_template_id_14a1ec22___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/package/create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/package/create.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/src/views/package/create.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/package/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/package/create.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/package/create.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/package/create.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/package/create.vue?vue&type=template&id=14a1ec22&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/package/create.vue?vue&type=template&id=14a1ec22& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_14a1ec22___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=template&id=14a1ec22& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/package/create.vue?vue&type=template&id=14a1ec22&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_14a1ec22___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_14a1ec22___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);