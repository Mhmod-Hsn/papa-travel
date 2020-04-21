(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/client/browse.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/client/browse.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.css");
/* harmony import */ var _fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/all.js */ "./node_modules/@fortawesome/fontawesome-free/js/all.js");
/* harmony import */ var _fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Client",
  mounted: function mounted() {
    this.getClients();
  },
  data: function data() {
    return {
      searchText: "",
      resultTime: 0,
      clients: [],
      is_requesting: false
    };
  },
  methods: {
    getClients: function getClients() {
      var _this = this;

      this.$store.dispatch('client/getData', '').then(function (response) {
        _this.clients = response.data.data.data;
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
    confirmDeleteClient: function confirmDeleteClient(type) {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: "Are you sure!",
        text: 'This data can not be retrieved again.',
        accept: this.deleteClient,
        parameters: [type]
      });
    },
    deleteClient: function deleteClient(params) {
      var _this2 = this;

      this.is_requesting = true;
      this.$vs.loading({
        container: "#btn-delete-".concat(params[0].id),
        color: 'danger',
        scale: 0.45
      });
      this.$store.dispatch('client/delete', params[0].id).then(function (response) {
        _this2.is_requesting = false;

        _this2.$vs.loading.close("#btn-delete-".concat(params[0].id, " > .con-vs-loading"));

        _this2.clients = _this2.clients.filter(function (type) {
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/client/browse.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/client/browse.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".txt-hover:hover{\n  color: black !important;\n}[dir] .txt-hover:hover{\n  cursor: pointer;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/client/browse.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/client/browse.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./browse.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/client/browse.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/client/browse.vue?vue&type=template&id=60e63fb4&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/client/browse.vue?vue&type=template&id=60e63fb4& ***!
  \***************************************************************************************************************************************************************************************************************/
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
  return _vm.can("browse-booking")
    ? _c(
        "div",
        { staticClass: "vx-col w-full mb-base" },
        [
          _c(
            "vx-card",
            {
              ref: "browse",
              attrs: {
                title: "Clients List",
                "collapse-action": "",
                refreshContentAction: ""
              },
              on: { refresh: _vm.getClients }
            },
            [
              _c(
                "vs-table",
                {
                  attrs: { search: "", data: _vm.clients },
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "default",
                        fn: function(ref) {
                          var data = ref.data
                          return _vm._l(data, function(client, index) {
                            return _c(
                              "vs-tr",
                              { key: index },
                              [
                                _c("vs-td", { attrs: { data: client.id } }, [
                                  _vm._v(
                                    "\n                        " +
                                      _vm._s(client.id) +
                                      "\n                    "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("vs-td", { attrs: { data: client.name } }, [
                                  _vm._v(
                                    "\n                        " +
                                      _vm._s(client.name) +
                                      "\n                    "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("vs-td", { attrs: { data: client.email } }, [
                                  _vm._v(
                                    "\n                        " +
                                      _vm._s(client.email) +
                                      "\n                    "
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "vs-td",
                                  { attrs: { data: client.telephone } },
                                  [
                                    _vm._v(
                                      "\n                        " +
                                        _vm._s(client.phone) +
                                        "\n                    "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "vs-td",
                                  { attrs: { data: client.adults } },
                                  [
                                    _vm._v(
                                      "\n                        " +
                                        _vm._s(client.adults) +
                                        "\n                    "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "vs-td",
                                  { attrs: { data: client.children } },
                                  [
                                    _vm._v(
                                      "\n                        " +
                                        _vm._s(client.children) +
                                        "\n                    "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "vs-td",
                                  [
                                    _c("vs-row", [
                                      _c("div", { staticClass: "flex mb-4" }, [
                                        _vm.can("delete-booking")
                                          ? _c(
                                              "div",
                                              { staticClass: "w-1/3 ml-5" },
                                              [
                                                _c("vs-button", {
                                                  staticClass:
                                                    "vs-con-loading__container",
                                                  attrs: {
                                                    id:
                                                      "btn-delete-" + client.id,
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
                                                        : _vm.confirmDeleteClient(
                                                            client
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
                                ),
                                _vm._v(" "),
                                _c(
                                  "template",
                                  {
                                    staticClass: "expand-user",
                                    slot: "expand"
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass: "con-expand-users w-full"
                                      },
                                      [
                                        client.package
                                          ? _c(
                                              "vs-row",
                                              [
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
                                                      {
                                                        staticClass: "font-bold"
                                                      },
                                                      [_vm._v("Title: ")]
                                                    ),
                                                    _vm._v(
                                                      "\n                                    " +
                                                        _vm._s(
                                                          client.package.title
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
                                                      {
                                                        staticClass: "font-bold"
                                                      },
                                                      [_vm._v("Rate: ")]
                                                    ),
                                                    _vm._v(
                                                      "\n                                    " +
                                                        _vm._s(
                                                          client.package.price
                                                        ) +
                                                        " " +
                                                        _vm._s(
                                                          client.package
                                                            .currency
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
                                                      {
                                                        staticClass: "font-bold"
                                                      },
                                                      [_vm._v("Period: ")]
                                                    ),
                                                    _vm._v(
                                                      "\n                                    " +
                                                        _vm._s(
                                                          client.package.days
                                                        ) +
                                                        " Days / " +
                                                        _vm._s(
                                                          client.package.nights
                                                        ) +
                                                        " Nights\n                                "
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
                                                      {
                                                        staticClass: "font-bold"
                                                      },
                                                      [_vm._v("Rate: ")]
                                                    ),
                                                    _vm._v(
                                                      "\n                                    " +
                                                        _vm._s(
                                                          client.package.rate
                                                        ) +
                                                        " Stars\n                                "
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
                                                      {
                                                        staticClass: "font-bold"
                                                      },
                                                      [_vm._v("Season: ")]
                                                    ),
                                                    _vm._v(
                                                      "\n                                    " +
                                                        _vm._s(
                                                          client.package.season
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
                                                      {
                                                        staticClass: "font-bold"
                                                      },
                                                      [_vm._v("Date: ")]
                                                    ),
                                                    _vm._v(
                                                      "\n                                    " +
                                                        _vm._s(
                                                          client.package.date
                                                        ) +
                                                        "\n                                "
                                                    )
                                                  ]
                                                )
                                              ],
                                              1
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        client.custom_package
                                          ? [
                                              _c("h2", [
                                                _vm._v("Custom Package")
                                              ]),
                                              _vm._v(" "),
                                              _c(
                                                "vs-row",
                                                [
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
                                                        {
                                                          staticClass:
                                                            "font-bold"
                                                        },
                                                        [_vm._v("Date: ")]
                                                      ),
                                                      _vm._v(
                                                        "\n                                        " +
                                                          _vm._s(
                                                            client
                                                              .custom_package
                                                              .travel_date
                                                          ) +
                                                          "\n                                    "
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
                                                        {
                                                          staticClass:
                                                            "font-bold"
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Flexibility: "
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(
                                                        "\n                                        " +
                                                          _vm._s(
                                                            client
                                                              .custom_package
                                                              .flexibility
                                                          ) +
                                                          " Days\n                                    "
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
                                                        {
                                                          staticClass:
                                                            "font-bold"
                                                        },
                                                        [_vm._v("Budget: ")]
                                                      ),
                                                      _vm._v(
                                                        "\n                                        " +
                                                          _vm._s(
                                                            client
                                                              .custom_package
                                                              .budget
                                                          ) +
                                                          "\n                                    "
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
                                                        {
                                                          staticClass:
                                                            "font-bold"
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Flexibility: "
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(
                                                        "\n                                        " +
                                                          _vm._s(
                                                            client
                                                              .custom_package
                                                              .flexibility
                                                          ) +
                                                          "\n                                    "
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
                                                        {
                                                          staticClass:
                                                            "font-bold"
                                                        },
                                                        [_vm._v("Room Type: ")]
                                                      ),
                                                      _vm._v(
                                                        "\n                                        " +
                                                          _vm._s(
                                                            client
                                                              .custom_package
                                                              .room_type
                                                          ) +
                                                          "\n                                    "
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
                                                        {
                                                          staticClass:
                                                            "font-bold"
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Hotel Rating: "
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(
                                                        "\n                                        " +
                                                          _vm._s(
                                                            client
                                                              .custom_package
                                                              .hotel_rating
                                                          ) +
                                                          " Stars\n                                    "
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
                                                        {
                                                          staticClass:
                                                            "font-bold"
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Hotel Location: "
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(
                                                        "\n                                        " +
                                                          _vm._s(
                                                            client
                                                              .custom_package
                                                              .hotel_location
                                                          ) +
                                                          "\n                                    "
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
                                                        {
                                                          staticClass:
                                                            "font-bold"
                                                        },
                                                        [_vm._v("Notes: ")]
                                                      ),
                                                      _vm._v(
                                                        "\n                                        " +
                                                          _vm._s(
                                                            client
                                                              .custom_package
                                                              .notes
                                                          ) +
                                                          "\n                                    "
                                                      )
                                                    ]
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c("h3", [
                                                _vm._v("Destinations: ")
                                              ]),
                                              _vm._v(" "),
                                              _vm._l(
                                                client.custom_package
                                                  .destinations,
                                                function(dest) {
                                                  return [
                                                    _c(
                                                      "vs-row",
                                                      [
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
                                                              {
                                                                staticClass:
                                                                  "font-bold"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Country: "
                                                                )
                                                              ]
                                                            ),
                                                            _vm._v(
                                                              "\n                                            " +
                                                                _vm._s(
                                                                  dest.country
                                                                ) +
                                                                "\n                                        "
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
                                                              {
                                                                staticClass:
                                                                  "font-bold"
                                                              },
                                                              [_vm._v("City: ")]
                                                            ),
                                                            _vm._v(
                                                              "\n                                            " +
                                                                _vm._s(
                                                                  dest.city
                                                                ) +
                                                                "\n                                        "
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
                                                              {
                                                                staticClass:
                                                                  "font-bold"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Nights: "
                                                                )
                                                              ]
                                                            ),
                                                            _vm._v(
                                                              "\n                                            " +
                                                                _vm._s(
                                                                  dest.nights
                                                                ) +
                                                                " Night\n                                        "
                                                            )
                                                          ]
                                                        )
                                                      ],
                                                      1
                                                    )
                                                  ]
                                                }
                                              )
                                            ]
                                          : _vm._e()
                                      ],
                                      2
                                    )
                                  ]
                                )
                              ],
                              2
                            )
                          })
                        }
                      }
                    ],
                    null,
                    false,
                    995475605
                  )
                },
                [
                  _c(
                    "template",
                    { slot: "thead" },
                    [
                      _c("vs-th", [_vm._v("ID")]),
                      _vm._v(" "),
                      _c("vs-th", [_vm._v("Name")]),
                      _vm._v(" "),
                      _c("vs-th", [_vm._v("Email")]),
                      _vm._v(" "),
                      _c("vs-th", [_vm._v("Telephone")]),
                      _vm._v(" "),
                      _c("vs-th", [_vm._v("Adults")]),
                      _vm._v(" "),
                      _c("vs-th", [_vm._v("Children")]),
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/client/browse.vue":
/*!**************************************************!*\
  !*** ./resources/js/src/views/client/browse.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _browse_vue_vue_type_template_id_60e63fb4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browse.vue?vue&type=template&id=60e63fb4& */ "./resources/js/src/views/client/browse.vue?vue&type=template&id=60e63fb4&");
/* harmony import */ var _browse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browse.vue?vue&type=script&lang=js& */ "./resources/js/src/views/client/browse.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _browse_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./browse.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/client/browse.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _browse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _browse_vue_vue_type_template_id_60e63fb4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _browse_vue_vue_type_template_id_60e63fb4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/client/browse.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/client/browse.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/client/browse.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./browse.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/client/browse.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/client/browse.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/client/browse.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./browse.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/client/browse.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/client/browse.vue?vue&type=template&id=60e63fb4&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/client/browse.vue?vue&type=template&id=60e63fb4& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_template_id_60e63fb4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./browse.vue?vue&type=template&id=60e63fb4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/client/browse.vue?vue&type=template&id=60e63fb4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_template_id_60e63fb4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_template_id_60e63fb4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);