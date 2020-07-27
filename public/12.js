(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Items/ItemsEdit.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/Items/ItemsEdit.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ItemsEdit",
  props: {
    data: Object,
    server: Array,
    game: Array,
    trademode: Array,
    type: String
  },
  methods: {
    submit: function submit() {
      if (this.type === 'edit') {
        this.$inertia.post(this.$route('admin.items.update'), {
          id_items: this.data.id_items,
          id_kategori: this.data.id_kategori,
          id_item: this.data.id_item,
          id_pengiriman: this.data.id_pengiriman,
          dollar: this.data.dollar,
          butuh: this.data.butuh,
          n_karakter: this.data.n_karakter
        }, {
          preserveState: false
        });
      } else if (this.type === 'baru') {
        this.$inertia.post(this.$route('admin.items.insert'), {
          id_items: this.data.id_items,
          id_kategori: this.data.id_kategori,
          id_item: this.data.id_item,
          id_pengiriman: this.data.id_pengiriman,
          dollar: this.data.dollar,
          butuh: this.data.butuh,
          n_karakter: this.data.n_karakter
        }, {
          preserveState: false
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Items/ItemsEdit.vue?vue&type=template&id=51fb5c02&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/Items/ItemsEdit.vue?vue&type=template&id=51fb5c02&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "card" }, [
    _c("div", { staticClass: "card-header text-white bg-info" }, [
      _vm._v("\n        Edit Item #" + _vm._s(_vm.data.id_items) + "\n    ")
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card-body" }, [
      _c("label", { staticClass: "form-control-label" }, [
        _vm._v("\n            Game\n        ")
      ]),
      _vm._v(" "),
      _c(
        "select",
        {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.data.id_kategori,
              expression: "data.id_kategori"
            }
          ],
          staticClass: "form-control",
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
              _vm.$set(
                _vm.data,
                "id_kategori",
                $event.target.multiple ? $$selectedVal : $$selectedVal[0]
              )
            }
          }
        },
        _vm._l(_vm.game, function(g) {
          return _c("option", { domProps: { value: g.id_kategori } }, [
            _vm._v(_vm._s(g.kategori))
          ])
        }),
        0
      ),
      _vm._v(" "),
      _c("label", { staticClass: "form-control-label" }, [
        _vm._v("\n            Server\n        ")
      ]),
      _vm._v(" "),
      _c(
        "select",
        {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.data.id_item,
              expression: "data.id_item"
            }
          ],
          staticClass: "form-control",
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
              _vm.$set(
                _vm.data,
                "id_item",
                $event.target.multiple ? $$selectedVal : $$selectedVal[0]
              )
            }
          }
        },
        _vm._l(_vm.server, function(s) {
          return _c("option", { domProps: { value: s.id_item } }, [
            _vm._v(_vm._s(s.server))
          ])
        }),
        0
      ),
      _vm._v(" "),
      _c("label", { staticClass: "form-control-label" }, [
        _vm._v("\n            Needed Stock\n        ")
      ]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.data.butuh,
            expression: "data.butuh"
          }
        ],
        staticClass: "form-control",
        domProps: { value: _vm.data.butuh },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.data, "butuh", $event.target.value)
          }
        }
      }),
      _vm._v(" "),
      _c("label", { staticClass: "form-control-label" }, [
        _vm._v("\n            Harga(Dollar)\n        ")
      ]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.data.dollar,
            expression: "data.dollar"
          }
        ],
        staticClass: "form-control",
        domProps: { value: _vm.data.dollar },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.data, "dollar", $event.target.value)
          }
        }
      }),
      _vm._v(" "),
      _c("label", { staticClass: "form-control-label" }, [
        _vm._v("\n            In-Game Name\n        ")
      ]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.data.n_karakter,
            expression: "data.n_karakter"
          }
        ],
        staticClass: "form-control",
        domProps: { value: _vm.data.n_karakter },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.data, "n_karakter", $event.target.value)
          }
        }
      }),
      _vm._v(" "),
      _c("label", { staticClass: "form-control-label" }, [
        _vm._v("\n            Trade Method\n        ")
      ]),
      _vm._v(" "),
      _c(
        "select",
        {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.data.id_pengiriman,
              expression: "data.id_pengiriman"
            }
          ],
          staticClass: "form-control",
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
              _vm.$set(
                _vm.data,
                "id_pengiriman",
                $event.target.multiple ? $$selectedVal : $$selectedVal[0]
              )
            }
          }
        },
        _vm._l(_vm.trademode, function(s) {
          return _c("option", { domProps: { value: s.id_pengiriman } }, [
            _vm._v(_vm._s(s.pengiriman))
          ])
        }),
        0
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card-footer bg-info" }, [
      _c("button", { staticClass: "btn", on: { click: _vm.submit } }, [
        _vm._v("\n            Submit\n        ")
      ])
    ])
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

/***/ "./resources/js/Pages/Admin/Items/ItemsEdit.vue":
/*!******************************************************!*\
  !*** ./resources/js/Pages/Admin/Items/ItemsEdit.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ItemsEdit_vue_vue_type_template_id_51fb5c02_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemsEdit.vue?vue&type=template&id=51fb5c02&scoped=true& */ "./resources/js/Pages/Admin/Items/ItemsEdit.vue?vue&type=template&id=51fb5c02&scoped=true&");
/* harmony import */ var _ItemsEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemsEdit.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Admin/Items/ItemsEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ItemsEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ItemsEdit_vue_vue_type_template_id_51fb5c02_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ItemsEdit_vue_vue_type_template_id_51fb5c02_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "51fb5c02",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Admin/Items/ItemsEdit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Admin/Items/ItemsEdit.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Items/ItemsEdit.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemsEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ItemsEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Items/ItemsEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemsEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Admin/Items/ItemsEdit.vue?vue&type=template&id=51fb5c02&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Items/ItemsEdit.vue?vue&type=template&id=51fb5c02&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemsEdit_vue_vue_type_template_id_51fb5c02_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ItemsEdit.vue?vue&type=template&id=51fb5c02&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Items/ItemsEdit.vue?vue&type=template&id=51fb5c02&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemsEdit_vue_vue_type_template_id_51fb5c02_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemsEdit_vue_vue_type_template_id_51fb5c02_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);