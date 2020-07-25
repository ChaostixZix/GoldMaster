(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Pengumuman/SMA/PindahTugas.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Pengumuman/SMA/PindahTugas.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TableSMA__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TableSMA */ "./resources/js/Pages/Pengumuman/SMA/TableSMA.vue");
/* harmony import */ var _Utils_Layout_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Utils/Layout/App */ "./resources/js/Utils/Layout/App.vue");
/* harmony import */ var _SMA__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SMA */ "./resources/js/Pages/Pengumuman/SMA/SMA.vue");
//
//
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
  components: {
    SMA: _SMA__WEBPACK_IMPORTED_MODULE_2__["default"],
    App: _Utils_Layout_App__WEBPACK_IMPORTED_MODULE_1__["default"],
    TableSMA: _TableSMA__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    pesertas: Array,
    datasma: Object
  },
  mounted: function mounted() {
    this.$parent.rendering = false;
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Pengumuman/SMA/PindahTugas.vue?vue&type=template&id=4fa07e1f&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Pengumuman/SMA/PindahTugas.vue?vue&type=template&id=4fa07e1f& ***!
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
  return _c("SMA", { attrs: { datasma: _vm.datasma } }, [
    _c(
      "div",
      { staticClass: "card" },
      [
        _c("div", { staticClass: "card-header bg-info text-white" }, [
          _vm._v("\n            Pindah Tugas\n        ")
        ]),
        _vm._v(" "),
        _c("TableSMA", { attrs: { pesertass: _vm.pesertas } })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Pengumuman/SMA/PindahTugas.vue":
/*!***********************************************************!*\
  !*** ./resources/js/Pages/Pengumuman/SMA/PindahTugas.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PindahTugas_vue_vue_type_template_id_4fa07e1f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PindahTugas.vue?vue&type=template&id=4fa07e1f& */ "./resources/js/Pages/Pengumuman/SMA/PindahTugas.vue?vue&type=template&id=4fa07e1f&");
/* harmony import */ var _PindahTugas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PindahTugas.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Pengumuman/SMA/PindahTugas.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PindahTugas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PindahTugas_vue_vue_type_template_id_4fa07e1f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PindahTugas_vue_vue_type_template_id_4fa07e1f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Pengumuman/SMA/PindahTugas.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Pengumuman/SMA/PindahTugas.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/Pages/Pengumuman/SMA/PindahTugas.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PindahTugas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PindahTugas.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Pengumuman/SMA/PindahTugas.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PindahTugas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Pengumuman/SMA/PindahTugas.vue?vue&type=template&id=4fa07e1f&":
/*!******************************************************************************************!*\
  !*** ./resources/js/Pages/Pengumuman/SMA/PindahTugas.vue?vue&type=template&id=4fa07e1f& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PindahTugas_vue_vue_type_template_id_4fa07e1f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PindahTugas.vue?vue&type=template&id=4fa07e1f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Pengumuman/SMA/PindahTugas.vue?vue&type=template&id=4fa07e1f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PindahTugas_vue_vue_type_template_id_4fa07e1f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PindahTugas_vue_vue_type_template_id_4fa07e1f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);