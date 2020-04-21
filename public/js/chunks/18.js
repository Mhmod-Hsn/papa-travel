(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/settings/Role/Roles.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/settings/Role/Roles.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    this.getRoles();
  },
  data: function data() {
    return {
      roles: [],
      roleIdToDelete: null,
      is_requesting: false
    };
  },
  methods: {
    //Get A List Of All Roles.
    getRoles: function getRoles() {
      var _this = this;

      this.$vs.loading({
        container: this.$refs.roles.$refs.content,
        scale: 0.5
      });
      this.$store.dispatch('rolesAndPermissions/getRoles', '').then(function (response) {
        _this.$vs.loading.close(_this.$refs.roles.$refs.content);

        _this.roles = response.data.data.data;
      }).catch(function (error) {
        console.log(error);

        _this.$vs.loading.close(_this.$refs.roles.$refs.content);

        _this.$vs.notify({
          title: 'Error',
          text: error.response.data.error,
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    },
    // Confirm Dialog To Delete The Role
    confirmDeleteRole: function confirmDeleteRole(role) {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: "Are you sure!",
        text: 'This data can not be retrieved again.',
        accept: this.deleteRole,
        parameters: [role]
      });
    },
    //Delete A Single Role By RoleID.
    deleteRole: function deleteRole(params) {
      var _this2 = this;

      this.is_requesting = true;
      this.$vs.loading({
        container: "#btn-type-delete-".concat(params[0].id),
        color: 'danger',
        scale: 0.45
      });
      this.$store.dispatch('rolesAndPermissions/delete', params[0].id).then(function (response) {
        _this2.is_requesting = false;

        _this2.$vs.loading.close("#btn-type-delete-".concat(params[0].id, " > .con-vs-loading"));

        _this2.roles = _this2.roles.filter(function (type) {
          return type.id !== params[0].id;
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

        _this2.$vs.loading.close("#btn-type-delete-".concat(params[0].id, " > .con-vs-loading"));

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/settings/Role/Roles.vue?vue&type=template&id=d52fd794&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/settings/Role/Roles.vue?vue&type=template&id=d52fd794& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
    _vm.can("browse-role")
      ? _c(
          "div",
          { staticClass: "vx-col w-full mb-base" },
          [
            _c(
              "vx-card",
              {
                ref: "roles",
                attrs: {
                  title: "Roles List",
                  "collapse-action": "",
                  refreshContentAction: ""
                },
                on: { refresh: _vm.getRoles }
              },
              [
                _c(
                  "vs-table",
                  {
                    attrs: { search: "", data: _vm.roles },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "default",
                          fn: function(ref) {
                            var data = ref.data
                            return _vm._l(data, function(role, index) {
                              return _c(
                                "vs-tr",
                                { key: index },
                                [
                                  _c("vs-td", { attrs: { data: role.id } }, [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(index + 1) +
                                        "\n                            "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("vs-td", { attrs: { data: role.name } }, [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(role.name) +
                                        "\n                            "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "vs-td",
                                    { attrs: { data: role.created_at } },
                                    [
                                      _vm._v(
                                        "\n                                " +
                                          _vm._s(role.created_at) +
                                          "\n                            "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "vs-td",
                                    [
                                      _c("vs-row", [
                                        _c(
                                          "div",
                                          { staticClass: "flex mb-4" },
                                          [
                                            _vm.can("view-role")
                                              ? _c(
                                                  "div",
                                                  { staticClass: "w-1/3" },
                                                  [
                                                    _c("vs-button", {
                                                      attrs: {
                                                        to:
                                                          "/dashboard/settings/role/" +
                                                          role.id,
                                                        radius: "",
                                                        color: "primary",
                                                        type: "border",
                                                        "icon-pack": "feather",
                                                        icon: "icon-eye"
                                                      }
                                                    })
                                                  ],
                                                  1
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _vm.can("edit-role")
                                              ? _c(
                                                  "div",
                                                  { staticClass: "w-1/3 ml-5" },
                                                  [
                                                    _c("vs-button", {
                                                      attrs: {
                                                        to:
                                                          "/dashboard/settings/role/edit/" +
                                                          role.id,
                                                        radius: "",
                                                        color: "warning",
                                                        type: "border",
                                                        "icon-pack": "feather",
                                                        icon: "icon-edit"
                                                      }
                                                    })
                                                  ],
                                                  1
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _vm.can("delete-role")
                                              ? _c(
                                                  "div",
                                                  { staticClass: "w-1/3 ml-5" },
                                                  [
                                                    _c("vs-button", {
                                                      staticClass:
                                                        "vs-con-loading__container",
                                                      attrs: {
                                                        id:
                                                          "btn-type-delete-" +
                                                          role.id,
                                                        radius: "",
                                                        color: "danger",
                                                        type: "border",
                                                        "icon-pack": "feather",
                                                        icon: "icon-trash"
                                                      },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          _vm.is_requesting
                                                            ? _vm.$store.dispatch(
                                                                "viewWaitMessage",
                                                                _vm.$vs
                                                              )
                                                            : _vm.confirmDeleteRole(
                                                                role
                                                              )
                                                        }
                                                      }
                                                    })
                                                  ],
                                                  1
                                                )
                                              : _vm._e()
                                          ]
                                        )
                                      ])
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            })
                          }
                        }
                      ],
                      null,
                      false,
                      1173203458
                    )
                  },
                  [
                    _c(
                      "template",
                      { slot: "header" },
                      [
                        _vm.can("create-role")
                          ? _c(
                              "vs-button",
                              {
                                attrs: {
                                  size: "small",
                                  to: "/dashboard/settings/role/create",
                                  "icon-pack": "feather",
                                  icon: "icon-plus",
                                  type: "filled"
                                }
                              },
                              [_vm._v("Create Role")]
                            )
                          : _vm._e()
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "template",
                      { slot: "thead" },
                      [
                        _c("vs-th", { attrs: { "sort-key": "id" } }, [
                          _vm._v("ID")
                        ]),
                        _vm._v(" "),
                        _c("vs-th", { attrs: { "sort-key": "display_name" } }, [
                          _vm._v("Role")
                        ]),
                        _vm._v(" "),
                        _c("vs-th", { attrs: { "sort-key": "created_at" } }, [
                          _vm._v("Created At")
                        ]),
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
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/settings/Role/Roles.vue":
/*!********************************************************!*\
  !*** ./resources/js/src/views/settings/Role/Roles.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Roles_vue_vue_type_template_id_d52fd794___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Roles.vue?vue&type=template&id=d52fd794& */ "./resources/js/src/views/settings/Role/Roles.vue?vue&type=template&id=d52fd794&");
/* harmony import */ var _Roles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Roles.vue?vue&type=script&lang=js& */ "./resources/js/src/views/settings/Role/Roles.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Roles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Roles_vue_vue_type_template_id_d52fd794___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Roles_vue_vue_type_template_id_d52fd794___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/settings/Role/Roles.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/settings/Role/Roles.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/settings/Role/Roles.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Roles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Roles.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/settings/Role/Roles.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Roles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/settings/Role/Roles.vue?vue&type=template&id=d52fd794&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/settings/Role/Roles.vue?vue&type=template&id=d52fd794& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Roles_vue_vue_type_template_id_d52fd794___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Roles.vue?vue&type=template&id=d52fd794& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/settings/Role/Roles.vue?vue&type=template&id=d52fd794&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Roles_vue_vue_type_template_id_d52fd794___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Roles_vue_vue_type_template_id_d52fd794___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);