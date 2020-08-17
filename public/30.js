(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/User/Withdraw/Withdraw.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/User/Withdraw/Withdraw.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils_Layout_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Utils/Layout/App */ "./resources/js/Utils/Layout/App.vue");
/* harmony import */ var vue_recaptcha__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-recaptcha */ "./node_modules/vue-recaptcha/dist/vue-recaptcha.es.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Withdraw",
  components: {
    App: _Utils_Layout_App__WEBPACK_IMPORTED_MODULE_0__["default"],
    VueRecaptcha: vue_recaptcha__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    requests: Array
  },
  mounted: function mounted() {
    this.show = true;

    if (this.$page.flash.saldo < 10) {
      this.show = false;
    }
  },
  created: function created() {
    var _this = this;

    Echo.channel('Item').listen('ItemEvents', function (e) {
      _this.$inertia.reload({
        preserveState: false,
        preserveScroll: true
      });
    });
  },
  data: function data() {
    return {
      data: {
        dollar: 1
      },
      dollar: 1,
      show: true,
      robot: false
    };
  },
  watch: {
    'dollar': function dollar() {
      if (this.$page.flash.currency === 'usd' && this.dollar > this.$page.flash.saldo) {
        this.dollar = this.$page.flash.saldo;
      }

      console.log(this.$page.flash.currency);

      if (this.$page.flash.currency === 'idr' && this.dollar > this.$page.flash.idrrate * this.$page.flash.saldo) {
        this.dollar = parseInt(this.$page.flash.saldo * this.$page.flash.idrrate);
      }

      if (this.dollar < 1) {
        this.dollar = 1;
      }

      this.data.dollar = this.dollar / this.$page.flash.idrrate;
    }
  },
  methods: {
    onVerify: function onVerify(response) {
      if (response) this.robot = true;
    },
    request: function request() {
      var _this2 = this;

      this.$inertia.post(this.$route('user.withdraw.request'), this.data).then(function () {
        _this2.$inertia.reload({
          reload: true,
          preserveState: false,
          preserveScroll: true,
          only: ['request']
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/User/Withdraw/Withdraw.vue?vue&type=template&id=07a34a94&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/User/Withdraw/Withdraw.vue?vue&type=template&id=07a34a94&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
  return _c("App", { attrs: { topnav: "Withdraw" } }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12" }, [
        _c("div", { staticClass: "alert alert-info" }, [
          _vm._v(
            "Minimum withdraw (" +
              _vm._s(
                _vm.$page.flash.currency === "usd"
                  ? "$" + 10
                  : "Rp." + 10 * _vm.$page.flash.idrrate
              ) +
              ")\n            "
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-6" }, [
        _c("div", { staticClass: "card card primary" }, [
          _c("div", { staticClass: "card-header" }, [
            _vm._v(
              "Balance left : (" +
                _vm._s(
                  _vm.$page.flash.currency === "usd"
                    ? "$" + _vm.$page.flash.saldo
                    : "Rp. " + _vm.$page.flash.saldo * _vm.$page.flash.idrrate
                ) +
                ")\n                "
            )
          ]),
          _vm._v(" "),
          _vm.$page.flash.saldo > 0 && _vm.show
            ? _c("div", { staticClass: "card-body" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { staticClass: "form-control-label" }, [
                    _vm._v(
                      "\n                            Withdraw Amount\n                        "
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.dollar,
                      expression: "dollar"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "number" },
                  domProps: { value: _vm.dollar },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.dollar = $event.target.value
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { staticClass: "form-control-label" }, [
                      _vm._v("Capthca")
                    ]),
                    _vm._v(" "),
                    _c("VueRecaptcha", {
                      ref: "recaptcha",
                      attrs: {
                        sitekey: "6LfUq7kZAAAAANr2AHfnAZ_v67nkLEDUJC_wHiiU"
                      },
                      on: { verify: _vm.onVerify }
                    })
                  ],
                  1
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.$page.flash.saldo > 0 && _vm.show && _vm.robot
            ? _c("div", { staticClass: "card-footer" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    on: { click: _vm.request }
                  },
                  [_vm._v("Submit")]
                )
              ])
            : _vm._e()
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-6" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-header" }, [
            _c("h4", [_vm._v("Request History")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body p-0" }, [
            _c("table", { staticClass: "table" }, [
              _c("thead", [
                _c("tr", [
                  _c("th", { attrs: { scope: "col" } }, [_vm._v("#")]),
                  _vm._v(" "),
                  _c("th", { attrs: { scope: "col" } }, [_vm._v("Amount")]),
                  _vm._v(" "),
                  _c("th", { attrs: { scope: "col" } }, [_vm._v("Status")])
                ])
              ]),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.requests, function(r) {
                  return _c("tr", [
                    _c("th", { attrs: { scope: "row" } }, [
                      _vm._v(_vm._s(r.id))
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        _vm._s(
                          _vm.$page.flash.currency === "usd"
                            ? "$" + r.dollar
                            : "Rp." +
                                parseInt(r.dollar * _vm.$page.flash.idrrate)
                        ) + "\n                            "
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      r.status_wd === "pending"
                        ? _c("div", { staticClass: "badge badge-warning" }, [
                            _vm._v("Pending")
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      r.status_wd === "process"
                        ? _c("div", { staticClass: "badge badge-primary" }, [
                            _vm._v("Process")
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      r.status_wd === "done"
                        ? _c("div", { staticClass: "badge badge-success" }, [
                            _vm._v("Done")
                          ])
                        : _vm._e()
                    ])
                  ])
                }),
                0
              )
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/User/Withdraw/Withdraw.vue":
/*!*******************************************************!*\
  !*** ./resources/js/Pages/User/Withdraw/Withdraw.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Withdraw_vue_vue_type_template_id_07a34a94_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Withdraw.vue?vue&type=template&id=07a34a94&scoped=true& */ "./resources/js/Pages/User/Withdraw/Withdraw.vue?vue&type=template&id=07a34a94&scoped=true&");
/* harmony import */ var _Withdraw_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Withdraw.vue?vue&type=script&lang=js& */ "./resources/js/Pages/User/Withdraw/Withdraw.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Withdraw_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Withdraw_vue_vue_type_template_id_07a34a94_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Withdraw_vue_vue_type_template_id_07a34a94_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "07a34a94",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/User/Withdraw/Withdraw.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/User/Withdraw/Withdraw.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/User/Withdraw/Withdraw.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Withdraw_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Withdraw.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/User/Withdraw/Withdraw.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Withdraw_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/User/Withdraw/Withdraw.vue?vue&type=template&id=07a34a94&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/Pages/User/Withdraw/Withdraw.vue?vue&type=template&id=07a34a94&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Withdraw_vue_vue_type_template_id_07a34a94_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Withdraw.vue?vue&type=template&id=07a34a94&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/User/Withdraw/Withdraw.vue?vue&type=template&id=07a34a94&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Withdraw_vue_vue_type_template_id_07a34a94_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Withdraw_vue_vue_type_template_id_07a34a94_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);