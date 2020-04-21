(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/agency/view.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/agency/view.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "viewData",
  mounted: function mounted() {
    this.getAgencyData();
  },
  data: function data() {
    return {
      agency: null,
      is_requesting: false
    };
  },
  methods: {
    getAgencyData: function getAgencyData() {
      var _this = this;

      this.$vs.loading({
        container: this.$refs.view.$refs.content,
        scale: 0.5
      });
      this.$store.dispatch('agency/view', this.$route.params.id).then(function (response) {
        _this.agency = response.data.data.data;

        _this.$vs.loading.close(_this.$refs.view.$refs.content);
      }).catch(function (error) {
        console.log(error);

        _this.$vs.loading.close(_this.$refs.view.$refs.content);

        _this.$vs.notify({
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/agency/view.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/agency/view.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".txt-hover:hover{\n  color: black !important;\n}[dir] .txt-hover:hover{\n  cursor: pointer;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/agency/view.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/agency/view.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./view.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/agency/view.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/agency/view.vue?vue&type=template&id=5f4af856&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/agency/view.vue?vue&type=template&id=5f4af856& ***!
  \*************************************************************************************************************************************************************************************************************/
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
    _vm.can("view-agency") ||
    _vm.$store.getters["auth/userData"].id === _vm.$route.params.id
      ? _c(
          "div",
          { staticClass: "vx-col w-full mb-base" },
          [
            _c(
              "vx-card",
              {
                ref: "view",
                attrs: { title: "Personal Information", collapseAction: "" }
              },
              [
                _vm.agency
                  ? _c(
                      "vs-row",
                      [
                        _c(
                          "vs-row",
                          { staticClass: "mb-5" },
                          [
                            _c(
                              "vs-col",
                              {
                                attrs: {
                                  "vs-type": "flex",
                                  "vs-justify": "center",
                                  "vs-align": "center",
                                  "vs-w": "12"
                                }
                              },
                              [
                                _c("vs-avatar", {
                                  staticClass: "mx-auto mb-2 block",
                                  attrs: {
                                    size: "120px",
                                    src: _vm.agency.image.url
                                  }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-row",
                          { staticClass: "mb-2" },
                          [
                            _c(
                              "vs-col",
                              {
                                staticClass: "m-3",
                                attrs: {
                                  "vs-type": "flex",
                                  "vs-justify": "center",
                                  "vs-align": "center",
                                  "vs-w": "12"
                                }
                              },
                              [
                                _vm._v(
                                  "\n                        Name: " +
                                    _vm._s(_vm.agency.name) +
                                    "\n                    "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "vs-col",
                              {
                                staticClass: "m-3",
                                attrs: {
                                  "vs-type": "flex",
                                  "vs-justify": "center",
                                  "vs-align": "center",
                                  "vs-w": "12"
                                }
                              },
                              [
                                _vm._v(
                                  "\n                        Email: " +
                                    _vm._s(_vm.agency.email) +
                                    "\n                    "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "vs-col",
                              {
                                staticClass: "m-3",
                                attrs: {
                                  "vs-type": "flex",
                                  "vs-justify": "center",
                                  "vs-align": "center",
                                  "vs-w": "12"
                                }
                              },
                              [
                                _vm._v(
                                  "\n                        Address: " +
                                    _vm._s(_vm.agency.address) +
                                    "\n                    "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "vs-col",
                              {
                                staticClass: "m-3",
                                attrs: {
                                  "vs-type": "flex",
                                  "vs-justify": "center",
                                  "vs-align": "center",
                                  "vs-w": "12"
                                }
                              },
                              [
                                _vm._v(
                                  "\n                        Phone: " +
                                    _vm._s(_vm.agency.phone) +
                                    "\n                    "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "vs-col",
                              {
                                staticClass: "m-3",
                                attrs: {
                                  "vs-type": "flex",
                                  "vs-justify": "center",
                                  "vs-align": "center",
                                  "vs-w": "12"
                                }
                              },
                              [
                                _vm._v(
                                  "\n                        Working Hours: " +
                                    _vm._s(_vm.agency.working_hours) +
                                    "\n                    "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "vs-col",
                              {
                                staticClass: "m-3",
                                attrs: {
                                  "vs-type": "flex",
                                  "vs-justify": "center",
                                  "vs-align": "center",
                                  "vs-w": "12"
                                }
                              },
                              [
                                _vm._v(
                                  "\n                        Display in Homepage: " +
                                    _vm._s(_vm.agency.homepage) +
                                    "\n                    "
                                )
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-row",
                          { staticClass: "mb-2" },
                          [
                            _c(
                              "vs-col",
                              {
                                staticClass: "m-3",
                                attrs: {
                                  "vs-type": "flex",
                                  "vs-justify": "center",
                                  "vs-align": "center",
                                  "vs-w": "12"
                                }
                              },
                              [
                                _vm._v(
                                  "\n                        Description: " +
                                    _vm._s(_vm.agency.description) +
                                    "\n                    "
                                )
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-row",
                          { staticClass: "mb-2" },
                          [
                            _c(
                              "vs-col",
                              {
                                staticClass: "m-3",
                                attrs: {
                                  "vs-type": "flex",
                                  "vs-justify": "center",
                                  "vs-align": "center",
                                  "vs-w": "12"
                                }
                              },
                              [
                                _c("span", {
                                  domProps: {
                                    innerHTML: _vm._s(_vm.agency.location_embed)
                                  }
                                })
                              ]
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  : _vm._e()
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

/***/ "./resources/js/src/views/agency/view.vue":
/*!************************************************!*\
  !*** ./resources/js/src/views/agency/view.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_vue_vue_type_template_id_5f4af856___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.vue?vue&type=template&id=5f4af856& */ "./resources/js/src/views/agency/view.vue?vue&type=template&id=5f4af856&");
/* harmony import */ var _view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.vue?vue&type=script&lang=js& */ "./resources/js/src/views/agency/view.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _view_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/agency/view.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _view_vue_vue_type_template_id_5f4af856___WEBPACK_IMPORTED_MODULE_0__["render"],
  _view_vue_vue_type_template_id_5f4af856___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/agency/view.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/agency/view.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/agency/view.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./view.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/agency/view.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/agency/view.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/agency/view.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./view.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/agency/view.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/agency/view.vue?vue&type=template&id=5f4af856&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/agency/view.vue?vue&type=template&id=5f4af856& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_5f4af856___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./view.vue?vue&type=template&id=5f4af856& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/agency/view.vue?vue&type=template&id=5f4af856&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_5f4af856___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_5f4af856___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);