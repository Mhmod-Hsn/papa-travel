(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/insurance/browse.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/insurance/browse.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  name: "browse",
  mounted: function mounted() {
    this.getInsurances();
  },
  data: function data() {
    return {
      insurances: [],
      is_requesting: false
    };
  },
  methods: {
    getInsurances: function getInsurances() {
      var _this = this;

      this.$store.dispatch('insurance/getData', '').then(function (response) {
        _this.insurances = response.data.data.data;
      }).catch(function (error) {
        console.log(error);

        _this.$vs.notify({
          title: 'Error',
          text: error.response.data.error,
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    },
    confirmDeleteInsurance: function confirmDeleteInsurance(insurance) {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: "Are you sure!",
        text: 'This data can not be retrieved again.',
        accept: this.deleteInsurance,
        parameters: [insurance]
      });
    },
    deleteInsurance: function deleteInsurance(params) {
      var _this2 = this;

      this.is_requesting = true;
      this.$vs.loading({
        container: "#btn-delete-".concat(params[0].id),
        color: 'danger',
        scale: 0.45
      });
      this.$store.dispatch('insurance/delete', params[0].id).then(function (response) {
        _this2.is_requesting = false;

        _this2.$vs.loading.close("#btn-delete-".concat(params[0].id, " > .con-vs-loading"));

        _this2.insurances = _this2.insurances.filter(function (insurance) {
          return insurance.id !== params[0].id;
        });

        _this2.$vs.notify({
          title: 'Success',
          text: response.data.message,
          iconPack: 'feather',
          icon: 'icon-check',
          color: 'success'
        });
      }).catch(function (error) {
        console.log(error);
        _this2.is_requesting = false;

        _this2.$vs.loading.close("#btn-delete-".concat(params[0].id, " > .con-vs-loading"));

        _this2.$vs.notify({
          title: 'Error',
          text: error.response.data.error,
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/insurance/browse.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/insurance/browse.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".txt-hover:hover{\n  color: black !important;\n}[dir] .txt-hover:hover{\n  cursor: pointer;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/insurance/browse.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/insurance/browse.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./browse.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/insurance/browse.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/insurance/browse.vue?vue&type=template&id=4db48ce9&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/insurance/browse.vue?vue&type=template&id=4db48ce9& ***!
  \******************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "vx-col w-full mb-base" },
    [
      _c(
        "vx-card",
        {
          ref: "browse",
          attrs: {
            title: "Insurance List",
            "collapse-action": "",
            refreshContentAction: ""
          },
          on: { refresh: _vm.getInsurances }
        },
        [
          _c(
            "vs-table",
            {
              attrs: { search: "", data: _vm.insurances },
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(ref) {
                    var data = ref.data
                    return _vm._l(_vm.insurances, function(insurance, index) {
                      return _c(
                        "vs-tr",
                        { key: index },
                        [
                          _c("vs-td", { attrs: { data: insurance.id } }, [
                            _vm._v(
                              "\n                        " +
                                _vm._s(index + 1) +
                                "\n                    "
                            )
                          ]),
                          _vm._v(" "),
                          _c("vs-td", { attrs: { data: insurance.image } }, [
                            insurance.image
                              ? _c(
                                  "a",
                                  {
                                    attrs: {
                                      href: "" + insurance.image.url,
                                      target: "_blank"
                                    }
                                  },
                                  [
                                    _c("img", {
                                      attrs: {
                                        src: "" + insurance.image.url,
                                        width: "50px",
                                        height: "50px"
                                      }
                                    })
                                  ]
                                )
                              : _c("b", [_vm._v("No Image")])
                          ]),
                          _vm._v(" "),
                          _c("vs-td", { attrs: { data: insurance.name } }, [
                            _vm._v(
                              "\n                        " +
                                _vm._s(insurance.name) +
                                "\n                    "
                            )
                          ]),
                          _vm._v(" "),
                          _c("vs-td", { attrs: { data: insurance.phone } }, [
                            _vm._v(
                              "\n                        " +
                                _vm._s(insurance.phone) +
                                "\n                    "
                            )
                          ]),
                          _vm._v(" "),
                          _c("vs-td", { attrs: { data: insurance.address } }, [
                            _vm._v(
                              "\n                        " +
                                _vm._s(insurance.address) +
                                "\n                    "
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            { attrs: { data: insurance.created_at } },
                            [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(insurance.created_at) +
                                  "\n                    "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "template",
                            { staticClass: "expand-user", slot: "expand" },
                            [
                              _c(
                                "div",
                                { staticClass: "con-expand-users w-full" },
                                [
                                  !insurance.image
                                    ? _c(
                                        "vs-row",
                                        [
                                          _c(
                                            "vs-col",
                                            {
                                              attrs: {
                                                "vs-xs": "6",
                                                "vs-sm": "6",
                                                "vs-lg": "6"
                                              }
                                            },
                                            [
                                              _c(
                                                "label",
                                                { staticClass: "font-bold" },
                                                [_vm._v("Passport Name: ")]
                                              ),
                                              _vm._v(
                                                "\n                                    " +
                                                  _vm._s(
                                                    insurance.passport_name
                                                  ) +
                                                  "\n                                "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "vs-col",
                                            {
                                              attrs: {
                                                "vs-xs": "6",
                                                "vs-sm": "4",
                                                "vs-lg": "3"
                                              }
                                            },
                                            [
                                              _c(
                                                "label",
                                                { staticClass: "font-bold" },
                                                [_vm._v("Birth Date: ")]
                                              ),
                                              _vm._v(
                                                "\n                                    " +
                                                  _vm._s(insurance.birth_date) +
                                                  "\n                                "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "vs-col",
                                            {
                                              attrs: {
                                                "vs-xs": "6",
                                                "vs-sm": "4",
                                                "vs-lg": "3"
                                              }
                                            },
                                            [
                                              _c(
                                                "label",
                                                { staticClass: "font-bold" },
                                                [_vm._v("Expire Date: ")]
                                              ),
                                              _vm._v(
                                                "\n                                    " +
                                                  _vm._s(
                                                    insurance.expire_date
                                                  ) +
                                                  "\n                                "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "vs-col",
                                            {
                                              attrs: {
                                                "vs-xs": "6",
                                                "vs-sm": "4",
                                                "vs-lg": "3"
                                              }
                                            },
                                            [
                                              _c(
                                                "label",
                                                { staticClass: "font-bold" },
                                                [_vm._v("Nationality: ")]
                                              ),
                                              _vm._v(
                                                "\n                                    " +
                                                  _vm._s(
                                                    insurance.nationality
                                                  ) +
                                                  "\n                                "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "vs-col",
                                            {
                                              attrs: {
                                                "vs-xs": "6",
                                                "vs-sm": "4",
                                                "vs-lg": "3"
                                              }
                                            },
                                            [
                                              _c(
                                                "label",
                                                { staticClass: "font-bold" },
                                                [_vm._v("Gender: ")]
                                              ),
                                              _vm._v(
                                                "\n                                    " +
                                                  _vm._s(insurance.gender) +
                                                  "\n                                "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "vs-col",
                                            {
                                              attrs: {
                                                "vs-xs": "6",
                                                "vs-sm": "4",
                                                "vs-lg": "3"
                                              }
                                            },
                                            [
                                              _c(
                                                "label",
                                                { staticClass: "font-bold" },
                                                [_vm._v("Passport Number: ")]
                                              ),
                                              _vm._v(
                                                "\n                                    " +
                                                  _vm._s(
                                                    insurance.passport_number
                                                  ) +
                                                  "\n                                "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "vs-col",
                                            {
                                              attrs: {
                                                "vs-xs": "6",
                                                "vs-sm": "4",
                                                "vs-lg": "3"
                                              }
                                            },
                                            [
                                              _c(
                                                "label",
                                                { staticClass: "font-bold" },
                                                [_vm._v("Country: ")]
                                              ),
                                              _vm._v(
                                                "\n                                    " +
                                                  _vm._s(insurance.country) +
                                                  "\n                                "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "vs-col",
                                            {
                                              attrs: {
                                                "vs-xs": "6",
                                                "vs-sm": "4",
                                                "vs-lg": "3"
                                              }
                                            },
                                            [
                                              _c(
                                                "label",
                                                { staticClass: "font-bold" },
                                                [_vm._v("Start Date: ")]
                                              ),
                                              _vm._v(
                                                "\n                                    " +
                                                  _vm._s(insurance.start_date) +
                                                  "\n                                "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "vs-col",
                                            {
                                              attrs: {
                                                "vs-xs": "6",
                                                "vs-sm": "4",
                                                "vs-lg": "3"
                                              }
                                            },
                                            [
                                              _c(
                                                "label",
                                                { staticClass: "font-bold" },
                                                [_vm._v("Duration: ")]
                                              ),
                                              _vm._v(
                                                "\n                                    " +
                                                  _vm._s(insurance.duration) +
                                                  "\n                                "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "vs-col",
                                            {
                                              attrs: {
                                                "vs-xs": "6",
                                                "vs-sm": "6",
                                                "vs-lg": "6"
                                              }
                                            },
                                            [
                                              _c(
                                                "label",
                                                { staticClass: "font-bold" },
                                                [_vm._v("Insurance Type: ")]
                                              ),
                                              _vm._v(
                                                "\n                                    " +
                                                  _vm._s(
                                                    insurance.insurance_type
                                                  ) +
                                                  "\n                                "
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                    : _vm._e()
                                ],
                                1
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            [
                              _c("vs-row", [
                                _c("div", { staticClass: "flex mb-4" }, [
                                  _vm.can("delete-insurance")
                                    ? _c(
                                        "div",
                                        { staticClass: "w-1/3 ml-5" },
                                        [
                                          _c("vs-button", {
                                            staticClass:
                                              "vs-con-loading__container",
                                            attrs: {
                                              id: "btn-delete-" + insurance.id,
                                              radius: "",
                                              color: "danger",
                                              type: "border",
                                              "icon-pack": "feather",
                                              icon: "icon-trash"
                                            },
                                            on: {
                                              click: function($event) {
                                                _vm.is_requesting
                                                  ? _vm.$store.dispatch(
                                                      "viewWaitMessage",
                                                      _vm.$vs
                                                    )
                                                  : _vm.confirmDeleteInsurance(
                                                      insurance
                                                    )
                                              }
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    : _vm._e()
                                ])
                              ])
                            ],
                            1
                          )
                        ],
                        2
                      )
                    })
                  }
                }
              ])
            },
            [
              _c(
                "template",
                { slot: "thead" },
                [
                  _c("vs-th", [_vm._v("#")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Image")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Name")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Telephone")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Address")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Created At")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Action")])
                ],
                1
              )
            ],
            2
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/insurance/browse.vue":
/*!*****************************************************!*\
  !*** ./resources/js/src/views/insurance/browse.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _browse_vue_vue_type_template_id_4db48ce9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browse.vue?vue&type=template&id=4db48ce9& */ "./resources/js/src/views/insurance/browse.vue?vue&type=template&id=4db48ce9&");
/* harmony import */ var _browse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browse.vue?vue&type=script&lang=js& */ "./resources/js/src/views/insurance/browse.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _browse_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./browse.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/insurance/browse.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _browse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _browse_vue_vue_type_template_id_4db48ce9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _browse_vue_vue_type_template_id_4db48ce9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/insurance/browse.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/insurance/browse.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/insurance/browse.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./browse.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/insurance/browse.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/insurance/browse.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/insurance/browse.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./browse.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/insurance/browse.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/insurance/browse.vue?vue&type=template&id=4db48ce9&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/insurance/browse.vue?vue&type=template&id=4db48ce9& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_template_id_4db48ce9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./browse.vue?vue&type=template&id=4db48ce9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/insurance/browse.vue?vue&type=template&id=4db48ce9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_template_id_4db48ce9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_template_id_4db48ce9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);