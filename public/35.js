(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  },
  data: function data() {
    //
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
      uploading: false,
      photo: [],
      tambah: false,
      datadetails: {},
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
    selectFile: function selectFile(event) {
      this.photo.push(event.target.files[0]);
    },
    // selectFile(e) {
    //     let files = e.target.files || e.dataTransfer.files;
    //     if (!files.length)
    //         return;
    //     this.createImage(files[0]);
    // },
    // createImage(file){
    //     let reader = new FileReader();
    //     let vm = this;
    //     reader.onload = (e) => {
    //         vm.photo = e.target.result;
    //     }
    //     reader.readAsDataURL(file);
    // },
    submitFile: function submitFile() {
      var _this = this;

      var data = new FormData();
      this.photo.forEach(function (value, index) {
        data.append('photo[]', value);
      });
      data.append('id_order', this.datadetails.id_order);
      this.uploading = true;
      this.$inertia.post(this.$route('user.history.uploadFoto'), data, {
        preserveState: false,
        preserveScroll: true,
        only: ['orders']
      }).then(function () {
        _this.uploading = false;
      });
    },
    cancel: function cancel(id) {
      this.$inertia.post(this.$route('user.history.cancel', {
        id: id
      }), {}, {
        preserveState: false,
        preserveScroll: true,
        only: ['orders']
      });
    },
    details: function details(data) {
      this.datadetails = data;
      this.$refs['details'].show();
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
      var _this2 = this;

      var data = this.data;

      if (this.search) {
        data = data.filter(function (row) {
          return Object.keys(row).some(function (key) {
            return String(row[key]).toLowerCase().indexOf(_this2.search.toLowerCase()) > -1;
          });
        });
      }

      var sortKey = this.sortKey;
      var order = this.sortOrders[sortKey] || 1;

      if (sortKey) {
        data = data.slice().sort(function (a, b) {
          var index = _this2.getIndex(_this2.columns, 'name', sortKey) + 1;
          a = String(a[sortKey]).toLowerCase();
          b = String(b[sortKey]).toLowerCase();

          if (_this2.columns[index].type && _this2.columns[index].type === 'date') {
            return (a === b ? 0 : new Date(a).getTime() > new Date(b).getTime() ? 1 : -1) * order;
          } else if (_this2.columns[index].type && _this2.columns[index].type === 'number') {
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Utils/Layout/App.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Utils/Layout/App.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "App",
  props: {
    topnav: String,
    breadcumb: Array
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/User/History/History.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/User/History/History.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.modal-backdrop {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1040;\n    background-color: #000;\n    opacity: 0.3;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/User/History/History.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/User/History/History.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./History.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/User/History/History.vue?vue&type=style&index=0&lang=css&");

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
              "\n                You need to wait for admin approval before you can continue\n            "
            )
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          [
            _c(
              "b-modal",
              {
                ref: "details",
                attrs: { "ok-only": "", title: "Delivery Details" }
              },
              [
                _c("div", { staticClass: "invoice" }, [
                  _c("div", { staticClass: "invoice-print" }, [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-lg-12" }, [
                        _c("div", { staticClass: "invoice-title" }, [
                          _c("div", { staticClass: "invoice-number" }, [
                            _vm._v("Order #" + _vm._s(_vm.datadetails.id_order))
                          ])
                        ]),
                        _vm._v(" "),
                        _c("hr"),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-md-6" }, [
                            _c("address", [
                              _c("strong", [_vm._v("Send To:")]),
                              _c("br"),
                              _vm._v(
                                "\n                                            " +
                                  _vm._s(_vm.datadetails.n_karakter)
                              ),
                              _c("br")
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-6 text-md-right" }, [
                            _c("address", [
                              _c("strong", [_vm._v("From:")]),
                              _c("br"),
                              _vm._v(
                                "\n                                            " +
                                  _vm._s(_vm.datadetails.nama)
                              ),
                              _c("br")
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-md-6" }, [
                            _c("address", [
                              _c("strong", [_vm._v("Trade Method:")]),
                              _c("br"),
                              _vm._v(
                                "\n                                            " +
                                  _vm._s(_vm.datadetails.pengiriman)
                              ),
                              _c("br")
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-6 text-md-right" }, [
                            _c("address", [
                              _c("strong", [_vm._v("Order Date:")]),
                              _c("br"),
                              _vm._v(
                                "\n                                            " +
                                  _vm._s(_vm.datadetails.tgl_pesan)
                              ),
                              _c("br"),
                              _c("br")
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-md-6" }, [
                            _c("address", [
                              _c("strong", [_vm._v("Quantity:")]),
                              _c("br"),
                              _vm._v(
                                "\n                                            " +
                                  _vm._s(_vm.datadetails.quantity) +
                                  "G"
                              ),
                              _c("br")
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-6 text-md-right" }, [
                            _c("address", [
                              _c("strong", [_vm._v("Price:")]),
                              _c("br"),
                              _vm._v(
                                "\n                                            $" +
                                  _vm._s(_vm.datadetails.price)
                              ),
                              _c("br"),
                              _c("br")
                            ])
                          ])
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c("div", { staticClass: "text-md-right" }, [
                    _c("div", { staticClass: "float-lg-left mb-lg-0 mb-3" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary btn-icon icon-left",
                          on: {
                            click: function($event) {
                              return _vm.$refs.fileUpload.show()
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "fa fa-cloud" }),
                          _vm._v(" Upload File\n                            ")
                        ]
                      ),
                      _vm._v(" "),
                      _vm.datadetails.file === null
                        ? _c(
                            "button",
                            {
                              staticClass: "btn btn-danger btn-icon icon-left",
                              on: {
                                click: function($event) {
                                  return _vm.cancel(_vm.datadetails.id_order)
                                }
                              }
                            },
                            [
                              _c("i", { staticClass: "fas fa-times" }),
                              _vm._v(" Cancel\n                            ")
                            ]
                          )
                        : _vm._e()
                    ])
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "b-modal",
              {
                ref: "fileUpload",
                attrs: { "hide-footer": "", title: "Upload File" }
              },
              [
                _vm.uploading
                  ? _c("div", [
                      _vm._v(
                        "\n                    Uploading... Dont close!!\n                "
                      )
                    ])
                  : _c("div", { staticClass: "invoice" }, [
                      _c("div", { staticClass: "invoice-print" }, [
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "col-lg-12" },
                            [
                              _c("div", { staticClass: "invoice-title" }, [
                                _c("div", { staticClass: "invoice-number" }, [
                                  _vm._v(
                                    "Order #" + _vm._s(_vm.datadetails.id_order)
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("hr"),
                              _vm._v(" "),
                              _vm._l(_vm.photo, function(p) {
                                return _c("p", [_vm._v(_vm._s(p.name))])
                              }),
                              _vm._v(" "),
                              _c("input", {
                                staticClass: "form-control-file",
                                attrs: { type: "file" },
                                on: { change: _vm.selectFile }
                              })
                            ],
                            2
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c("div", { staticClass: "text-md-right" }, [
                        _c(
                          "div",
                          { staticClass: "float-lg-left mb-lg-0 mb-3" },
                          [
                            _c(
                              "button",
                              {
                                staticClass:
                                  "btn btn-primary btn-icon icon-left",
                                on: { click: _vm.submitFile }
                              },
                              [
                                _c("i", { staticClass: "fa fa-cloud" }),
                                _vm._v(
                                  " Upload File\n                            "
                                )
                              ]
                            )
                          ]
                        )
                      ])
                    ])
              ]
            )
          ],
          1
        ),
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
                      p.file !== null
                        ? _c("div", { staticClass: "media-right" }, [
                            _c("div", { staticClass: "text-info" }, [
                              _vm._v("Pending Approval")
                            ])
                          ])
                        : p.status_o === "pending"
                        ? _c("div", { staticClass: "media-right" }, [
                            _c("div", { staticClass: "text-warning" }, [
                              _vm._v("Pending")
                            ])
                          ])
                        : p.status_o === "aktif"
                        ? _c("div", { staticClass: "media-right" }, [
                            _c("div", { staticClass: "text-primary" }, [
                              _vm._v("Active")
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("div", { staticClass: "media-title mb-1" }, [
                        _vm._v(
                          "Order #" +
                            _vm._s(p.id_order) +
                            " ($" +
                            _vm._s(p.price) +
                            ")"
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "text-time" }, [
                        _vm._v(_vm._s(p.tgl_pesan))
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "media-description text-muted" },
                        [
                          _vm._v(
                            "Sell " +
                              _vm._s(p.quantity) +
                              "G for ($" +
                              _vm._s(p.price) +
                              ")\n                                "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      p.status_o !== "done"
                        ? _c("div", { staticClass: "media-links" }, [
                            p.status_o === "aktif"
                              ? _c(
                                  "a",
                                  {
                                    staticClass:
                                      "btn btn-sm btn-info text-white",
                                    attrs: { href: "#" },
                                    on: {
                                      click: function($event) {
                                        return _vm.details(p)
                                      }
                                    }
                                  },
                                  [_vm._v("Delivery Details")]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            p.status_o === "aktif"
                              ? _c("div", { staticClass: "bullet" })
                              : _vm._e(),
                            _vm._v(" "),
                            p.file === null
                              ? _c(
                                  "a",
                                  {
                                    staticClass:
                                      "btn btn-sm btn-danger text-white",
                                    attrs: { href: "#" },
                                    on: {
                                      click: function($event) {
                                        return _vm.cancel(p.id_order)
                                      }
                                    }
                                  },
                                  [_vm._v("Cancel")]
                                )
                              : _vm._e()
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
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Utils/Layout/App.vue?vue&type=template&id=9cbc5510&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Utils/Layout/App.vue?vue&type=template&id=9cbc5510&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "main-content" }, [
    _c("section", { staticClass: "section" }, [
      typeof _vm.topnav !== "undefined" || typeof _vm.breadcumb !== "undefined"
        ? _c("div", { staticClass: "section-header" }, [
            _c("h1", [_vm._v(_vm._s(_vm.topnav))]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "section-header-breadcrumb" },
              _vm._l(_vm.breadcumb, function(bc) {
                return _c("div", { staticClass: "breadcrumb-item" }, [
                  _vm._v(_vm._s(bc))
                ])
              }),
              0
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "section-body" }, [_vm._t("default")], 2)
    ])
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
/* empty/unused harmony star reexport *//* harmony import */ var _History_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./History.vue?vue&type=style&index=0&lang=css& */ "./resources/js/Pages/User/History/History.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
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

/***/ "./resources/js/Pages/User/History/History.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/User/History/History.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_History_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./History.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/User/History/History.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_History_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_History_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_History_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_History_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_History_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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



/***/ }),

/***/ "./resources/js/Utils/Layout/App.vue":
/*!*******************************************!*\
  !*** ./resources/js/Utils/Layout/App.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_9cbc5510_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=9cbc5510&scoped=true& */ "./resources/js/Utils/Layout/App.vue?vue&type=template&id=9cbc5510&scoped=true&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./resources/js/Utils/Layout/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_9cbc5510_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_9cbc5510_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9cbc5510",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Utils/Layout/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Utils/Layout/App.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/Utils/Layout/App.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Utils/Layout/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Utils/Layout/App.vue?vue&type=template&id=9cbc5510&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/Utils/Layout/App.vue?vue&type=template&id=9cbc5510&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_9cbc5510_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=9cbc5510&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Utils/Layout/App.vue?vue&type=template&id=9cbc5510&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_9cbc5510_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_9cbc5510_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);