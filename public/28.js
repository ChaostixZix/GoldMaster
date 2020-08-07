(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/User/Auth/Register.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/User/Auth/Register.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_recaptcha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-recaptcha */ "./node_modules/vue-recaptcha/dist/vue-recaptcha.es.js");
/* harmony import */ var _Utils_Layout_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Utils/Layout/App */ "./resources/js/Utils/Layout/App.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Register",
  components: {
    App: _Utils_Layout_App__WEBPACK_IMPORTED_MODULE_1__["default"],
    VueRecaptcha: vue_recaptcha__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      passwordconfirm: '',
      input: {},
      robot: false,
      payment: '',
      country: []
    };
  },
  mounted: function mounted() {
    this.loadCountry();
  },
  methods: {
    loadCountry: function loadCountry() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('https://restcountries.eu/rest/v2/all').then(function (response) {
        _this.country = response.data;
      });
    },
    onVerify: function onVerify(response) {
      if (response) this.robot = true;
    },
    register: function register() {
      if (this.input.password === this.passwordconfirm) {
        this.$inertia.post(this.$route('user.auth.register'), this.input, {
          preserveState: false,
          preserveScroll: true,
          replace: true
        }); // this.$refs['form'].submit()
      } else {
        alert('Password does not match');
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/User/Auth/Register.vue?vue&type=template&id=2d135362&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/User/Auth/Register.vue?vue&type=template&id=2d135362&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
  return _c("App", [
    _c("section", { staticClass: "section" }, [
      _c("div", { staticClass: "container mt-5" }, [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            {
              staticClass:
                "col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2"
            },
            [
              _c("div", { staticClass: "login-brand" }, [
                _c("img", {
                  attrs: {
                    src: this.$route("depan.index") + "logo.png",
                    alt: "logo",
                    width: "100"
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card card-primary" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("h4", [_vm._v("Register")])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card-body" }, [
                  _c(
                    "form",
                    {
                      ref: "form",
                      attrs: {
                        method: "POST",
                        action: _vm.$route("user.auth.register")
                      }
                    },
                    [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "username" } }, [
                          _vm._v("Username")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.input.username,
                              expression: "input.username"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { id: "username", type: "text" },
                          domProps: { value: _vm.input.username },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.input,
                                "username",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "invalid-feedback" })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "name" } }, [
                          _vm._v("Full Name")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.input.fullname,
                              expression: "input.fullname"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { id: "name", type: "text" },
                          domProps: { value: _vm.input.fullname },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.input,
                                "fullname",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "invalid-feedback" })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "email" } }, [
                          _vm._v("Email")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.input.email,
                              expression: "input.email"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { id: "email", type: "email" },
                          domProps: { value: _vm.input.email },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.input, "email", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "invalid-feedback" })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "form-group col-6" }, [
                          _c("label", { attrs: { for: "n_bank" } }, [
                            _vm._v("Contact Type")
                          ]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.input.contacttype,
                                  expression: "input.contacttype"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { id: "n_bank" },
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.input,
                                    "contacttype",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                }
                              }
                            },
                            [
                              _c("option", [_vm._v("Skype")]),
                              _vm._v(" "),
                              _c("option", [_vm._v("Discord")]),
                              _vm._v(" "),
                              _c("option", [_vm._v("Telegram")]),
                              _vm._v(" "),
                              _c("option", [_vm._v("WhatSapp")]),
                              _vm._v(" "),
                              _c("option", [_vm._v("Facebook")])
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group col-6" }, [
                          _c("label", { attrs: { for: "telp" } }, [
                            _vm._v("Contact")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.input.telp,
                                expression: "input.telp"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { id: "telp", type: "text" },
                            domProps: { value: _vm.input.telp },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.input, "telp", $event.target.value)
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "payment" } }, [
                          _vm._v("Payment Method")
                        ]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.payment,
                                expression: "payment"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { id: "payment", type: "text" },
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.payment = $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "indonesian" } }, [
                              _vm._v("Indonesian Bank")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "virtual" } }, [
                              _vm._v("Virtual Wallet/Bank")
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "invalid-feedback" })
                      ]),
                      _vm._v(" "),
                      _vm.payment === "indonesian"
                        ? _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "form-group col-4" }, [
                              _c("label", { attrs: { for: "n_bank" } }, [
                                _vm._v("Bank")
                              ]),
                              _vm._v(" "),
                              _c(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.input.n_bank,
                                      expression: "input.n_bank"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { id: "n_bank" },
                                  on: {
                                    change: function($event) {
                                      var $$selectedVal = Array.prototype.filter
                                        .call($event.target.options, function(
                                          o
                                        ) {
                                          return o.selected
                                        })
                                        .map(function(o) {
                                          var val =
                                            "_value" in o ? o._value : o.value
                                          return val
                                        })
                                      _vm.$set(
                                        _vm.input,
                                        "n_bank",
                                        $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      )
                                    }
                                  }
                                },
                                [
                                  _c("option", [_vm._v("Mandiri")]),
                                  _vm._v(" "),
                                  _c("option", [_vm._v("BRI")]),
                                  _vm._v(" "),
                                  _c("option", [_vm._v("BCA")]),
                                  _vm._v(" "),
                                  _c("option", [_vm._v("BNI")]),
                                  _vm._v(" "),
                                  _c("option", [_vm._v("BTPN")]),
                                  _vm._v(" "),
                                  _c("option", [_vm._v("Bank Lain")])
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group col-4" }, [
                              _c("label", { attrs: { for: "a_nama" } }, [
                                _vm._v("Atas Nama")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.input.a_nama,
                                    expression: "input.a_nama"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { id: "a_nama", type: "text" },
                                domProps: { value: _vm.input.a_nama },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.input,
                                      "a_nama",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group col-4" }, [
                              _c("label", { attrs: { for: "n_rekening" } }, [
                                _vm._v("Nomor Rekening")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.input.n_rekening,
                                    expression: "input.n_rekening"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { id: "n_rekening", type: "text" },
                                domProps: { value: _vm.input.n_rekening },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.input,
                                      "n_rekening",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.payment === "virtual"
                        ? _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "form-group col-4" }, [
                              _c("label", { attrs: { for: "n_bank" } }, [
                                _vm._v("Virtual Bank Type")
                              ]),
                              _vm._v(" "),
                              _c(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.input.n_bank,
                                      expression: "input.n_bank"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { id: "n_bank" },
                                  on: {
                                    change: function($event) {
                                      var $$selectedVal = Array.prototype.filter
                                        .call($event.target.options, function(
                                          o
                                        ) {
                                          return o.selected
                                        })
                                        .map(function(o) {
                                          var val =
                                            "_value" in o ? o._value : o.value
                                          return val
                                        })
                                      _vm.$set(
                                        _vm.input,
                                        "n_bank",
                                        $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      )
                                    }
                                  }
                                },
                                [
                                  _c("option", [_vm._v("Paypal")]),
                                  _vm._v(" "),
                                  _c("option", [_vm._v("Webmoney")]),
                                  _vm._v(" "),
                                  _c("option", [_vm._v("Bitcoin")]),
                                  _vm._v(" "),
                                  _c("option", [_vm._v("Etherum")])
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group col-4" }, [
                              _c("label", { attrs: { for: "a_nama" } }, [
                                _vm._v("Issued Name (Optional)")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.input.a_nama,
                                    expression: "input.a_nama"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { id: "a_nama", type: "text" },
                                domProps: { value: _vm.input.a_nama },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.input,
                                      "a_nama",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group col-4" }, [
                              _c("label", { attrs: { for: "n_rekening" } }, [
                                _vm._v("Payment Address")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.input.n_rekening,
                                    expression: "input.n_rekening"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { id: "n_rekening", type: "text" },
                                domProps: { value: _vm.input.n_rekening },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.input,
                                      "n_rekening",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "form-group col-6" }, [
                          _c(
                            "label",
                            {
                              staticClass: "d-block",
                              attrs: { for: "password" }
                            },
                            [_vm._v("Password")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.input.password,
                                expression: "input.password"
                              }
                            ],
                            staticClass: "form-control pwstrength",
                            attrs: {
                              id: "password",
                              type: "password",
                              "data-indicator": "pwindicator"
                            },
                            domProps: { value: _vm.input.password },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.input,
                                  "password",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "pwindicator",
                              attrs: { id: "pwindicator" }
                            },
                            [
                              _c("div", { staticClass: "bar" }),
                              _vm._v(" "),
                              _c("div", { staticClass: "label" })
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group col-6" }, [
                          _c(
                            "label",
                            {
                              staticClass: "d-block",
                              attrs: { for: "password2" }
                            },
                            [_vm._v("Password Confirmation")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.passwordconfirm,
                                expression: "passwordconfirm"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { id: "password2", type: "password" },
                            domProps: { value: _vm.passwordconfirm },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.passwordconfirm = $event.target.value
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-divider" }, [
                        _vm._v(
                          "\n                                    Your Home\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", [_vm._v("Country")]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "selectric-wrapper selectric-form-control selectric-selectric"
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "selectric-hide-select" },
                              [
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.input.negara,
                                        expression: "input.negara"
                                      }
                                    ],
                                    staticClass: "form-control selectric",
                                    attrs: { tabindex: "-1" },
                                    on: {
                                      change: function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
                                            return o.selected
                                          })
                                          .map(function(o) {
                                            var val =
                                              "_value" in o ? o._value : o.value
                                            return val
                                          })
                                        _vm.$set(
                                          _vm.input,
                                          "negara",
                                          $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        )
                                      }
                                    }
                                  },
                                  _vm._l(_vm.country, function(c) {
                                    return _c("option", [
                                      _vm._v(_vm._s(c.name))
                                    ])
                                  }),
                                  0
                                )
                              ]
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", [_vm._v("Capthca")]),
                          _vm._v(" "),
                          _c("VueRecaptcha", {
                            ref: "recaptcha",
                            attrs: {
                              sitekey:
                                "6LfUq7kZAAAAANr2AHfnAZ_v67nkLEDUJC_wHiiU"
                            },
                            on: { verify: _vm.onVerify }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.robot
                        ? _c("div", { staticClass: "form-group" }, [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-primary btn-lg btn-block",
                                attrs: { type: "button" },
                                on: { click: _vm.register }
                              },
                              [
                                _vm._v(
                                  "\n                                        Register\n                                    "
                                )
                              ]
                            )
                          ])
                        : _vm._e()
                    ]
                  )
                ])
              ])
            ]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/User/Auth/Register.vue":
/*!***************************************************!*\
  !*** ./resources/js/Pages/User/Auth/Register.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_2d135362_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=2d135362&scoped=true& */ "./resources/js/Pages/User/Auth/Register.vue?vue&type=template&id=2d135362&scoped=true&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/Pages/User/Auth/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_2d135362_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Register_vue_vue_type_template_id_2d135362_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2d135362",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/User/Auth/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/User/Auth/Register.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/User/Auth/Register.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/User/Auth/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/User/Auth/Register.vue?vue&type=template&id=2d135362&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Pages/User/Auth/Register.vue?vue&type=template&id=2d135362&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_2d135362_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=template&id=2d135362&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/User/Auth/Register.vue?vue&type=template&id=2d135362&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_2d135362_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_2d135362_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);