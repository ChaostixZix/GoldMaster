(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/User/Sell/SellNow.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/User/Sell/SellNow.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils_Shared_Spinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Utils/Shared/Spinner */ "./resources/js/Utils/Shared/Spinner.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "SellNow",
  components: {
    Spinner: _Utils_Shared_Spinner__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      data: {
        quantity: '',
        id_items: this.p.id_items,
        id_user: this.$page.flash.id_user,
        price: 0,
        nama: '',
        status_o: 'pending'
      },
      loading: false,
      idr: 0
    };
  },
  props: {
    p: Object
  },
  watch: {
    'data.quantity': function dataQuantity() {
      this.data.price = parseInt(this.data.quantity) * this.p.dollar;
      this.idr = parseInt(this.data.price * this.$page.flash.idrrate);
    }
  },
  methods: {
    submit: function submit() {
      var _this = this;

      if (this.data.quantity > this.p.butuh) {
        alert('Quantity must be lower than needed stock');
      } else {
        this.loading = true;
        console.log('tes');
        this.$inertia.post(this.$route('user.history.addorder'), this.data).then(function () {
          _this.$inertia.visit(_this.$route('user.history'));
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Utils/Shared/Spinner.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Utils/Shared/Spinner.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Spinner"
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/User/Sell/SellNow.vue?vue&type=template&id=1f6a6c52&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/User/Sell/SellNow.vue?vue&type=template&id=1f6a6c52&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "card card-primary" },
    [
      _vm.loading
        ? _c("Spinner")
        : _c("div", { staticClass: "card-body" }, [
            _c("label", { staticClass: "form-control-label" }, [
              _vm._v("\n            Server\n        ")
            ]),
            _vm._v(" "),
            _c("p", [_vm._v(_vm._s(_vm.p.server))]),
            _vm._v(" "),
            _c("label", { staticClass: "form-control-label" }, [
              _vm._v("\n            Game\n        ")
            ]),
            _vm._v(" "),
            _c("p", [_vm._v(_vm._s(_vm.p.kategori))]),
            _vm._v(" "),
            _c("label", { staticClass: "form-control-label" }, [
              _vm._v("\n\n            Quantity "),
              _c("span", [
                _vm._v(
                  " (" +
                    _vm._s(
                      this.$page.flash.currency === "usd"
                        ? "$" + _vm.data.price
                        : "Rp. " + _vm.idr
                    ) +
                    ") "
                )
              ])
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.data.quantity,
                  expression: "data.quantity"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "number" },
              domProps: { value: _vm.data.quantity },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.data, "quantity", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "alert alert-info" }, [
              _vm._v(
                "Quantity: How much gold you want to sell (must be lower than " +
                  _vm._s(_vm.p.butuh) +
                  ")\n        "
              )
            ]),
            _vm._v(" "),
            _c("label", { staticClass: "form-control-label" }, [
              _vm._v("\n            Nickname\n        ")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.data.nama,
                  expression: "data.nama"
                }
              ],
              staticClass: "form-control",
              domProps: { value: _vm.data.nama },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.data, "nama", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "alert alert-info" }, [
              _vm._v("Nickname: Your character name in game")
            ])
          ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-footer" }, [
        _c(
          "button",
          { staticClass: "btn btn-primary", on: { click: _vm.submit } },
          [
            _c("i", { staticClass: "fa fa-paper-plane" }),
            _vm._v("\n            Submit\n        ")
          ]
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Utils/Shared/Spinner.vue?vue&type=template&id=5ed76aaa&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Utils/Shared/Spinner.vue?vue&type=template&id=5ed76aaa&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "col-12 text-center" }, [
    _vm._v("\n            Loading...\n")
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/Pages/User/Sell/SellNow.vue":
/*!**************************************************!*\
  !*** ./resources/js/Pages/User/Sell/SellNow.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SellNow_vue_vue_type_template_id_1f6a6c52_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SellNow.vue?vue&type=template&id=1f6a6c52&scoped=true& */ "./resources/js/Pages/User/Sell/SellNow.vue?vue&type=template&id=1f6a6c52&scoped=true&");
/* harmony import */ var _SellNow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SellNow.vue?vue&type=script&lang=js& */ "./resources/js/Pages/User/Sell/SellNow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SellNow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SellNow_vue_vue_type_template_id_1f6a6c52_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SellNow_vue_vue_type_template_id_1f6a6c52_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1f6a6c52",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/User/Sell/SellNow.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/User/Sell/SellNow.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/Pages/User/Sell/SellNow.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SellNow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SellNow.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/User/Sell/SellNow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SellNow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/User/Sell/SellNow.vue?vue&type=template&id=1f6a6c52&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Pages/User/Sell/SellNow.vue?vue&type=template&id=1f6a6c52&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SellNow_vue_vue_type_template_id_1f6a6c52_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SellNow.vue?vue&type=template&id=1f6a6c52&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/User/Sell/SellNow.vue?vue&type=template&id=1f6a6c52&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SellNow_vue_vue_type_template_id_1f6a6c52_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SellNow_vue_vue_type_template_id_1f6a6c52_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Utils/Shared/Spinner.vue":
/*!***********************************************!*\
  !*** ./resources/js/Utils/Shared/Spinner.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Spinner_vue_vue_type_template_id_5ed76aaa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Spinner.vue?vue&type=template&id=5ed76aaa&scoped=true& */ "./resources/js/Utils/Shared/Spinner.vue?vue&type=template&id=5ed76aaa&scoped=true&");
/* harmony import */ var _Spinner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Spinner.vue?vue&type=script&lang=js& */ "./resources/js/Utils/Shared/Spinner.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Spinner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Spinner_vue_vue_type_template_id_5ed76aaa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Spinner_vue_vue_type_template_id_5ed76aaa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5ed76aaa",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Utils/Shared/Spinner.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Utils/Shared/Spinner.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/Utils/Shared/Spinner.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Spinner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Spinner.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Utils/Shared/Spinner.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Spinner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Utils/Shared/Spinner.vue?vue&type=template&id=5ed76aaa&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/Utils/Shared/Spinner.vue?vue&type=template&id=5ed76aaa&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Spinner_vue_vue_type_template_id_5ed76aaa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Spinner.vue?vue&type=template&id=5ed76aaa&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Utils/Shared/Spinner.vue?vue&type=template&id=5ed76aaa&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Spinner_vue_vue_type_template_id_5ed76aaa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Spinner_vue_vue_type_template_id_5ed76aaa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);