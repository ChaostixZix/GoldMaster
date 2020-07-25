(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/User/History/History.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/User/History/History.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils_Shared_Datatable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Utils/Shared/Datatable */ "./resources/js/Utils/Shared/Datatable.vue");
/* harmony import */ var _Utils_Shared_Pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Utils/Shared/Pagination */ "./resources/js/Utils/Shared/Pagination.vue");
/* harmony import */ var _Utils_Layout_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Utils/Layout/App */ "./resources/js/Utils/Layout/App.vue");
/* harmony import */ var _Utils_Shared_Messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Utils/Shared/Messages */ "./resources/js/Utils/Shared/Messages.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Messages: _Utils_Shared_Messages__WEBPACK_IMPORTED_MODULE_3__["default"],
    App: _Utils_Layout_App__WEBPACK_IMPORTED_MODULE_2__["default"],
    Pagination: _Utils_Shared_Pagination__WEBPACK_IMPORTED_MODULE_1__["default"],
    Datatable: _Utils_Shared_Datatable__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    orders: Array
  },
  mounted: function mounted() {
    this.load();
    console.log(this.orders);
  },
  data: function data() {
    var sortOrders = {};
    var columns = [{
      width: '33%',
      label: '#'
    }, {
      width: '33%',
      label: 'Character Name'
    }, {
      width: '33%',
      label: 'Game'
    }, {
      width: '33%',
      label: 'Server'
    }, {
      width: '33%',
      label: 'Action'
    }];
    columns.forEach(function (column) {
      sortOrders[column.name] = -1;
    });
    return {
      tambah: false,
      columns: columns,
      sortKey: 'deadline',
      sortOrders: sortOrders,
      length: 10,
      search: '',
      data: [],
      tableData: {
        client: true
      },
      pagination: {
        currentPage: 1,
        total: '',
        nextPage: '',
        prevPage: '',
        from: '',
        to: ''
      }
    };
  },
  methods: {
    hapus: function hapus(id) {// this.$inertia.post(this.$route('admin.server.delete', {id: id}), {}, {
      //     replace: true,
      //     preserveState: false,
      //     preserveScroll: false,
      //     only: ['server'],
      // })
    },
    load: function load() {
      this.pagination.total = this.data.length;
      var i = 0;
      var vm = this;
      this.orders.forEach(function (value, index) {
        i++;
        value.nomer = i;
        vm.data.push(value);
      });
    },
    paginate: function paginate(array, length, pageNumber) {
      this.pagination.from = array.length ? (pageNumber - 1) * length + 1 : ' ';
      this.pagination.to = pageNumber * length > array.length ? array.length : pageNumber * length;
      this.pagination.prevPage = pageNumber > 1 ? pageNumber : '';
      this.pagination.nextPage = array.length > this.pagination.to ? pageNumber + 1 : '';
      return array.slice((pageNumber - 1) * length, pageNumber * length);
    },
    resetPagination: function resetPagination() {
      this.pagination.currentPage = 1;
      this.pagination.prevPage = '';
      this.pagination.nextPage = '';
    },
    sortBy: function sortBy(key) {
      this.resetPagination();
      this.sortKey = key;
      this.sortOrders[key] = this.sortOrders[key] * -1;
    },
    getIndex: function getIndex(array, key, value) {
      return array.findIndex(function (i) {
        return i[key] === value;
      });
    }
  },
  computed: {
    filteredProjects: function filteredProjects() {
      var _this = this;

      var data = this.data;

      if (this.search) {
        data = data.filter(function (row) {
          return Object.keys(row).some(function (key) {
            return String(row[key]).toLowerCase().indexOf(_this.search.toLowerCase()) > -1;
          });
        });
      }

      var sortKey = this.sortKey;
      var order = this.sortOrders[sortKey] || 1;

      if (sortKey) {
        data = data.slice().sort(function (a, b) {
          var index = _this.getIndex(_this.columns, 'name', sortKey) + 1;
          a = String(a[sortKey]).toLowerCase();
          b = String(b[sortKey]).toLowerCase();

          if (_this.columns[index].type && _this.columns[index].type === 'date') {
            return (a === b ? 0 : new Date(a).getTime() > new Date(b).getTime() ? 1 : -1) * order;
          } else if (_this.columns[index].type && _this.columns[index].type === 'number') {
            return (+a === +b ? 0 : +a > +b ? 1 : -1) * order;
          } else {
            return (a === b ? 0 : a > b ? 1 : -1) * order;
          }
        });
      }

      return data;
    },
    paginated: function paginated() {
      return this.paginate(this.filteredProjects, this.length, this.pagination.currentPage);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/User/History/History.vue?vue&type=template&id=5121963e&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/User/History/History.vue?vue&type=template&id=5121963e& ***!
  \******************************************************************************************************************************************************************************************************************/
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
  return _c("App", { attrs: { topnav: "Your Orders" } }, [
    _c(
      "div",
      { staticClass: "row" },
      [
        _c("Messages"),
        _vm._v(" "),
        _c("div", { staticClass: "col-12" }, [
          _c("div", { staticClass: "alert alert-warning" }, [
            _vm._v(
              "\n                    You need to wait for admin approval before you can continue\n                "
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-12" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-header" }, [
              _c("h4", [_vm._v("History")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c(
                "ul",
                {
                  staticClass:
                    "list-unstyled list-unstyled-border list-unstyled-noborder"
                },
                _vm._l(_vm.paginated, function(p) {
                  return _c("li", { staticClass: "media" }, [
                    _c("div", { staticClass: "media-body" }, [
                      p.status_o === "pending"
                        ? _c("div", { staticClass: "media-right" }, [
                            _c("div", { staticClass: "text-warning" }, [
                              _vm._v("Pending")
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      p.status_o === "aktif"
                        ? _c("div", { staticClass: "media-right" }, [
                            _c("div", { staticClass: "text-primary" }, [
                              _vm._v("Active")
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("div", { staticClass: "media-title mb-1" }, [
                        _vm._v("#" + _vm._s(p.id_order))
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "text-time" }, [
                        _vm._v(_vm._s(p.tgl_pesan))
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "media-description text-muted" },
                        [_vm._v("Order .")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "media-links" }, [
                        _c(
                          "a",
                          {
                            staticClass: "btn btn-sm btn-info text-white",
                            attrs: { href: "#" }
                          },
                          [_vm._v("Delivery Details")]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "bullet" }),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "btn btn-sm btn-info text-white",
                            attrs: { href: "#" }
                          },
                          [_vm._v("File Upload")]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "bullet" }),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "btn btn-sm btn-danger text-white",
                            attrs: { href: "#" }
                          },
                          [_vm._v("Cancel")]
                        )
                      ])
                    ])
                  ])
                }),
                0
              )
            ])
          ])
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/User/History/History.vue":
/*!*****************************************************!*\
  !*** ./resources/js/Pages/User/History/History.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _History_vue_vue_type_template_id_5121963e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./History.vue?vue&type=template&id=5121963e& */ "./resources/js/Pages/User/History/History.vue?vue&type=template&id=5121963e&");
/* harmony import */ var _History_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./History.vue?vue&type=script&lang=js& */ "./resources/js/Pages/User/History/History.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _History_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _History_vue_vue_type_template_id_5121963e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _History_vue_vue_type_template_id_5121963e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/User/History/History.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/User/History/History.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/User/History/History.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_History_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./History.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/User/History/History.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_History_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/User/History/History.vue?vue&type=template&id=5121963e&":
/*!************************************************************************************!*\
  !*** ./resources/js/Pages/User/History/History.vue?vue&type=template&id=5121963e& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_History_vue_vue_type_template_id_5121963e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./History.vue?vue&type=template&id=5121963e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/User/History/History.vue?vue&type=template&id=5121963e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_History_vue_vue_type_template_id_5121963e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_History_vue_vue_type_template_id_5121963e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);