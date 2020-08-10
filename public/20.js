(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Items/ItemsEdit.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/Items/ItemsEdit.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
//
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
  components: {
    Spinner: _Utils_Shared_Spinner__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    data: Object,
    server: Array,
    game: Array,
    trademode: Array,
    type: String,
    loading: false
  },
  methods: {
    submit: function submit() {
      this.loading = true;

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
  return _vm.loading
    ? _c("Spinner")
    : _c("div", { staticClass: "card" }, [
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