(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/settings/Role/Edit.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/settings/Role/Edit.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    this.getPermissions();
  },
  data: function data() {
    return {
      role: null,
      permissions: [],
      role_name: "",
      rolePermissions: [],
      groupPermissions: [],
      is_requesting: false
    };
  },
  computed: {
    validateForm: function validateForm() {
      return !this.errors.any() && this.role_name !== "";
    }
  },
  methods: {
    //Get All Roles
    getPermissions: function getPermissions() {
      var _this = this;

      this.$vs.loading({
        container: this.$refs.edit.$refs.content,
        scale: 0.5
      });
      this.$store.dispatch('rolesAndPermissions/getPermissions').then(function (response) {
        _this.permissions = response.data.data;

        _this.getRole();
      }).catch(function (error) {
        console.log(error);

        _this.$vs.loading.close(_this.$refs.edit.$refs.content);

        _this.$vs.notify({
          title: 'Error',
          text: error.response.data.error,
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    },
    getRole: function getRole() {
      var _this2 = this;

      this.$store.dispatch('rolesAndPermissions/view', this.$route.params.id).then(function (response) {
        _this2.$vs.loading.close(_this2.$refs.edit.$refs.content);

        _this2.role = response.data.data.data;

        if (response.data.data.data.length === 0) {
          _this2.$router.push('/dashboard/error-404');
        } else {
          response.data.data.data.permissions.forEach(function (permission) {
            _this2.rolePermissions.push(permission.name);
          }); // this.rolePermissions = response.data.data.data.permissions;

          _this2.role_name = response.data.data.data.name;
        }
      }).catch(function (error) {
        console.log(error);

        _this2.$vs.loading.close(_this2.$refs.edit.$refs.content);

        _this2.$vs.notify({
          title: 'Error',
          text: error.response.data.error,
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    },
    //Save Role Submission
    saveRole: function saveRole() {
      var _this3 = this;

      if (!this.validateForm) return;
      this.is_requesting = true;
      this.$vs.loading({
        container: "#btn-save",
        color: 'primary',
        scale: 0.45
      });
      this.$store.dispatch('rolesAndPermissions/update', {
        id: this.$route.params.id,
        data: {
          permissions: this.rolePermissions,
          name: this.role_name,
          display_name: this.role_name
        }
      }).then(function (response) {
        _this3.is_requesting = false;

        _this3.$vs.loading.close("#btn-save > .con-vs-loading");

        _this3.$router.push("/dashboard/settings/role/".concat(_this3.$route.params.id));

        _this3.$vs.notify({
          title: 'Success',
          text: response.data.message,
          iconPack: 'feather',
          icon: 'icon-check',
          color: 'success'
        });
      }).catch(function (error) {
        console.log(error);
        _this3.is_requesting = false;

        _this3.$vs.loading.close("#btn-save > .con-vs-loading");

        _this3.$vs.notify({
          title: 'Error',
          text: error.response.data.errors[Object.keys(error.response.data.errors)[0]][0],
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    },
    //Check and Un-Check by group
    groupPressed: function groupPressed(group) {
      if (this.groupPermissions.includes(group[0].group)) {
        for (var i = 0; i < group.length; i++) {
          if (!this.rolePermissions.includes(group[i].name)) this.rolePermissions.push(group[i].name);
        }
      } else {
        for (var _i = 0; _i < group.length; _i++) {
          if (this.rolePermissions.includes(group[_i].name)) this.rolePermissions.splice(this.rolePermissions.indexOf(group[_i].name), 1);
        }
      }
    },
    //View Loader on button on submit
    startBtnLoader: function startBtnLoader(buttonID) {
      this.is_loading = true;
      this.$vs.loading({
        background: 'primary',
        color: '#fff',
        container: buttonID,
        scale: 0.45
      });
    },
    //Hide Loader on button
    endBtnLoader: function endBtnLoader(buttonID) {
      this.is_loading = false;
      this.$vs.loading.close("".concat(buttonID, " > .con-vs-loading"));
    },
    //View a warning notification to wait for response
    notifyToWait: function notifyToWait() {
      this.vs_alert('Please, wait!', 'Your request is under process', 'warning', 'icon-clock');
    },
    //Vuesax alert
    vs_alert: function vs_alert(title, text, color, icon) {
      this.$vs.notify({
        title: title,
        text: text,
        color: color,
        iconPack: 'feather',
        icon: icon
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/settings/Role/Edit.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/settings/Role/Edit.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".centerx li {\n  display: -webkit-inline-box;\n  display: inline-flex;\n}[dir] .centerx li {\n  margin: 10px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/settings/Role/Edit.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/settings/Role/Edit.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/settings/Role/Edit.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/settings/Role/Edit.vue?vue&type=template&id=63906221&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/settings/Role/Edit.vue?vue&type=template&id=63906221& ***!
  \********************************************************************************************************************************************************************************************************************/
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
    [
      _vm.can("edit-role")
        ? _c("vx-card", { ref: "edit", attrs: { title: "Update Role" } }, [
            _c("form", [
              _c("div", { staticClass: "vx-row" }, [
                _c(
                  "div",
                  { staticClass: "vx-col w-full mb-2" },
                  [
                    _c("vs-input", {
                      directives: [
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "w-full",
                      attrs: {
                        danger: _vm.errors.has("role_name"),
                        "danger-text": _vm.errors.first("role_name"),
                        "val-icon-danger": "clear",
                        "icon-pack": "feather",
                        icon: "icon-shield",
                        "icon-no-border": "",
                        "label-placeholder": "Role Name",
                        name: "role_name"
                      },
                      model: {
                        value: _vm.role_name,
                        callback: function($$v) {
                          _vm.role_name = $$v
                        },
                        expression: "role_name"
                      }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "vx-row mt-5" }, [
                _c(
                  "div",
                  { staticClass: "vx-col w-full" },
                  [
                    _c("b", [_vm._v("Role Permissions:")]),
                    _vm._v(" "),
                    _vm._l(_vm.permissions, function(group, groupName) {
                      return _c(
                        "ul",
                        [
                          _c("br"),
                          _vm._v(" "),
                          _c(
                            "vs-checkbox",
                            {
                              attrs: { "vs-value": groupName },
                              on: {
                                change: function($event) {
                                  return _vm.groupPressed(group)
                                }
                              },
                              model: {
                                value: _vm.groupPermissions,
                                callback: function($$v) {
                                  _vm.groupPermissions = $$v
                                },
                                expression: "groupPermissions"
                              }
                            },
                            [_c("b", [_vm._v(_vm._s(groupName))])]
                          ),
                          _vm._v(" "),
                          _vm._l(group, function(permission, index) {
                            return _c(
                              "li",
                              { key: index, staticClass: "ml-8" },
                              [
                                _c(
                                  "vs-checkbox",
                                  {
                                    attrs: { "vs-value": permission.name },
                                    model: {
                                      value: _vm.rolePermissions,
                                      callback: function($$v) {
                                        _vm.rolePermissions = $$v
                                      },
                                      expression: "rolePermissions"
                                    }
                                  },
                                  [_vm._v(_vm._s(permission["display_name"]))]
                                )
                              ],
                              1
                            )
                          })
                        ],
                        2
                      )
                    })
                  ],
                  2
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "vx-row mt-10" }, [
                _c(
                  "div",
                  { staticClass: "vx-col w-full" },
                  [
                    _c(
                      "vs-button",
                      {
                        staticClass: "vs-con-loading__container",
                        attrs: {
                          id: "btn-save",
                          disabled: !_vm.validateForm,
                          "icon-pack": "feather",
                          icon: "icon-save"
                        },
                        on: {
                          click: function($event) {
                            _vm.is_requesting
                              ? _vm.$store.dispatch("viewWaitMessage", _vm.$vs)
                              : _vm.saveRole()
                          }
                        }
                      },
                      [_vm._v("Save")]
                    )
                  ],
                  1
                )
              ])
            ])
          ])
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/settings/Role/Edit.vue":
/*!*******************************************************!*\
  !*** ./resources/js/src/views/settings/Role/Edit.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_63906221___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=63906221& */ "./resources/js/src/views/settings/Role/Edit.vue?vue&type=template&id=63906221&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/src/views/settings/Role/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Edit.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/settings/Role/Edit.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_63906221___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_63906221___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/settings/Role/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/settings/Role/Edit.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/settings/Role/Edit.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/settings/Role/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/settings/Role/Edit.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/settings/Role/Edit.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/settings/Role/Edit.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/settings/Role/Edit.vue?vue&type=template&id=63906221&":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/settings/Role/Edit.vue?vue&type=template&id=63906221& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_63906221___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=63906221& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/settings/Role/Edit.vue?vue&type=template&id=63906221&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_63906221___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_63906221___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);