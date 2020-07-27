(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/MemberStock/MemberStock.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/MemberStock/MemberStock.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    stocks: Array
  },
  mounted: function mounted() {
    this.load();
  },
  data: function data() {
    var sortOrders = {};
    var columns = [{
      width: '10%',
      label: '#'
    }, {
      width: '10%',
      label: 'Email'
    }, {
      width: '15%',
      label: 'Stock'
    }, {
      width: '33%',
      label: 'Server'
    }, {
      width: '33%',
      label: 'Game'
    }, {
      width: '33%',
      label: 'Action'
    }];
    columns.forEach(function (column) {
      sortOrders[column.name] = -1;
    });
    return {
      edit: false,
      dataedit: {},
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
    hapus: function hapus(id) {
      this.$inertia.post(this.$route('admin.memberstock.delete', {
        id: id
      }), {}, {
        preserveState: false,
        preserveScroll: true,
        only: ['stocks']
      });
    },
    load: function load() {
      this.pagination.total = this.data.length;
      var i = 0;
      var vm = this;
      this.stocks.forEach(function (value, index) {
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/MemberStock/MemberStock.vue?vue&type=template&id=09fef350&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/MemberStock/MemberStock.vue?vue&type=template&id=09fef350& ***!
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
  return _c("App", { attrs: { topnav: "List Order" } }, [
    _c(
      "div",
      { staticClass: "row" },
      [
        _c("Messages"),
        _vm._v(" "),
        _c("div", { staticClass: "col-12" }, [
          _c("div", { staticClass: "card card-primary" }, [
            _c("div", { staticClass: "card-header bg-primary" }, [
              _c(
                "div",
                {
                  staticClass: "dataTables_filter",
                  attrs: { id: "dataTableExample_filter" }
                },
                [
                  _c("label", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.search,
                          expression: "search"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "search", placeholder: "Search" },
                      domProps: { value: _vm.search },
                      on: {
                        input: [
                          function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.search = $event.target.value
                          },
                          function($event) {
                            return _vm.resetPagination()
                          }
                        ]
                      }
                    })
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("div", [
                _c(
                  "div",
                  {
                    staticClass: "dataTables_wrapper dt-bootstrap4 no-footer",
                    attrs: { id: "dataTableExample_wrapper" }
                  },
                  [
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "col-sm-12" },
                        [
                          _c(
                            "Datatable",
                            {
                              attrs: {
                                "hide-header": "false",
                                columns: _vm.columns,
                                sortKey: _vm.sortKey,
                                sortOrders: _vm.sortOrders
                              },
                              on: { sort: _vm.sortBy }
                            },
                            [
                              _c(
                                "tbody",
                                [
                                  _vm._l(_vm.paginated, function(p) {
                                    return p.server !== null &&
                                      p.kategori !== null &&
                                      p.email !== null
                                      ? _c(
                                          "tr",
                                          {
                                            staticClass: "odd",
                                            attrs: { role: "row" }
                                          },
                                          [
                                            _c("td", [
                                              _vm._v("#" + _vm._s(p.id_stock))
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [_vm._v(_vm._s(p.email))]),
                                            _vm._v(" "),
                                            _c("td", [_vm._v(_vm._s(p.stock))]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _vm._v(_vm._s(p.server))
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _vm._v(_vm._s(p.kategori))
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _c(
                                                "button",
                                                {
                                                  staticClass:
                                                    "btn btn-sm btn-danger",
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.hapus(
                                                        p.id_stock
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _c("i", {
                                                    staticClass: "fa fa-trash"
                                                  })
                                                ]
                                              )
                                            ])
                                          ]
                                        )
                                      : _vm._e()
                                  }),
                                  _vm._v(" "),
                                  _vm._l(_vm.paginated, function(p) {
                                    return p.server === null ||
                                      p.kategori === null ||
                                      p.email === null
                                      ? _c(
                                          "tr",
                                          {
                                            staticClass:
                                              "odd text-white bg-danger",
                                            attrs: { e: "", role: "row" }
                                          },
                                          [
                                            _c("td", [
                                              _vm._v("#" + _vm._s(p.id_stock))
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [_vm._v(_vm._s(p.email))]),
                                            _vm._v(" "),
                                            _c("td", [_vm._v(_vm._s(p.stock))]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _vm._v(_vm._s(p.server))
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _vm._v(_vm._s(p.kategori))
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _c(
                                                "button",
                                                {
                                                  staticClass:
                                                    "btn btn-sm btn-white",
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.hapus(
                                                        p.id_stock
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _c("i", {
                                                    staticClass: "fa fa-trash"
                                                  })
                                                ]
                                              )
                                            ])
                                          ]
                                        )
                                      : _vm._e()
                                  })
                                ],
                                2
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "row" },
                      [
                        _c("div", { staticClass: "col-sm-12 col-md-5" }),
                        _vm._v(" "),
                        _c("Pagination", {
                          attrs: {
                            pagination: _vm.pagination,
                            client: true,
                            filtered: _vm.filteredProjects
                          },
                          on: {
                            prev: function($event) {
                              --_vm.pagination.currentPage
                            },
                            next: function($event) {
                              ++_vm.pagination.currentPage
                            }
                          }
                        })
                      ],
                      1
                    )
                  ]
                )
              ])
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

/***/ "./resources/js/Pages/Admin/MemberStock/MemberStock.vue":
/*!**************************************************************!*\
  !*** ./resources/js/Pages/Admin/MemberStock/MemberStock.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MemberStock_vue_vue_type_template_id_09fef350___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MemberStock.vue?vue&type=template&id=09fef350& */ "./resources/js/Pages/Admin/MemberStock/MemberStock.vue?vue&type=template&id=09fef350&");
/* harmony import */ var _MemberStock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MemberStock.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Admin/MemberStock/MemberStock.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MemberStock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MemberStock_vue_vue_type_template_id_09fef350___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MemberStock_vue_vue_type_template_id_09fef350___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Admin/MemberStock/MemberStock.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Admin/MemberStock/MemberStock.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/MemberStock/MemberStock.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MemberStock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MemberStock.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/MemberStock/MemberStock.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MemberStock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Admin/MemberStock/MemberStock.vue?vue&type=template&id=09fef350&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/MemberStock/MemberStock.vue?vue&type=template&id=09fef350& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MemberStock_vue_vue_type_template_id_09fef350___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MemberStock.vue?vue&type=template&id=09fef350& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/MemberStock/MemberStock.vue?vue&type=template&id=09fef350&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MemberStock_vue_vue_type_template_id_09fef350___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MemberStock_vue_vue_type_template_id_09fef350___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);