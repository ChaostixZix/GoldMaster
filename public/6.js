(window.webpackJsonp=window.webpackJsonp||[]).push([[6,22],{1:function(t,e,a){"use strict";function s(t,e,a,s,n,i,r,o){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=a,c._compiled=!0),s&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),r?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},c._ssrRegister=l):n&&(l=o?function(){n.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:n),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(t,e){return l.call(e),d(t,e)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,l):[l]}return{exports:t,options:c}}a.d(e,"a",(function(){return s}))},16:function(t,e,a){var s=a(63);"string"==typeof s&&(s=[[t.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a(14)(s,n);s.locals&&(t.exports=s.locals)},2:function(t,e,a){"use strict";var s={name:"App",components:{Messages:a(3).a},data:function(){return{message:""}},created:function(){var t=this;null!==this.$page.flash.id_user&&Echo.channel("Web."+this.$page.flash.id_user).listen("Message",(function(e){t.message=e.message,t.$bvToast.show("toast")}))},props:{topnav:String,breadcumb:Array}},n=a(1),i=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-content"},[a("notifications",{staticStyle:{"margin-top":"5rem"},attrs:{group:"foo"}}),t._v(" "),a("b-toast",{staticClass:"card card-primary",attrs:{id:"toast",variant:"warning",solid:""},scopedSlots:t._u([{key:"toast-title",fn:function(){return[a("div",{staticClass:"d-flex flex-grow-1 align-items-baseline"},[a("b-img",{staticClass:"mr-2",attrs:{blank:"","blank-color":"#ff5555",width:"12",height:"12"}}),t._v(" "),a("strong",{staticClass:"mr-auto"},[t._v("Notice!")])],1)]},proxy:!0}])},[t._v("\n        "+t._s(t.message)+"\n    ")]),t._v(" "),a("section",{staticClass:"section"},[void 0!==t.topnav||void 0!==t.breadcumb?a("div",{staticClass:"section-header"},[a("h1",[t._v(t._s(t.topnav))]),t._v(" "),a("div",{staticClass:"section-header-breadcrumb"},t._l(t.breadcumb,(function(e){return a("div",{staticClass:"breadcrumb-item"},[t._v(t._s(e))])})),0)]):t._e(),t._v(" "),a("Messages"),t._v(" "),a("div",{staticClass:"section-body"},[t._t("default")],2)],1)],1)}),[],!1,null,"44493a65",null);e.a=i.exports},28:function(t,e,a){"use strict";a.r(e);var s={name:"MemberStockAdd",components:{Spinner:a(6).a},props:{p:Object,server:Array,game:Array,type:String},data:function(){return{data:{id_kategori:this.p.id_kategori,id_item:this.p.id_item,id_user:this.$page.flash.id_user,stock:this.p.stock},loading:!1}},methods:{submit:function(){var t=this;this.loading=!0,"baru"===this.type?this.$inertia.post(this.$route("user.memberstock.insert"),this.data,{preserveState:!1,preserveScroll:!0,only:["stocks"]}).then((function(){t.loading=!1})):"edit"===this.type&&this.$inertia.post(this.$route("user.memberstock.update",{id:this.p.id_stock}),this.data,{preserveState:!1,preserveScroll:!0,only:["stocks"]}).then((function(){t.loading=!1}))}}},n=a(1),i=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card card-primary"},[t.loading?a("Spinner"):a("div",{staticClass:"card-body"},[a("label",{staticClass:"form-control-label"},[t._v("\n            Game\n        ")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.data.id_kategori,expression:"data.id_kategori"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.data,"id_kategori",e.target.multiple?a:a[0])}}},t._l(t.game,(function(e){return a("option",{domProps:{value:e.id_kategori}},[t._v(t._s(e.kategori))])})),0),t._v(" "),a("label",{staticClass:"form-control-label"},[t._v("\n            Server\n        ")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.data.id_item,expression:"data.id_item"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.data,"id_item",e.target.multiple?a:a[0])}}},t._l(t.server,(function(e){return a("option",{domProps:{value:e.id_item}},[t._v(t._s(e.server))])})),0),t._v(" "),a("label",{staticClass:"form-control-label"},[t._v("\n            Quantity\n        ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.stock,expression:"data.stock"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.data.stock},on:{input:function(e){e.target.composing||t.$set(t.data,"stock",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"card-footer"},[a("button",{staticClass:"btn btn-primary",on:{click:t.submit}},[a("i",{staticClass:"fa fa-paper-plane"}),t._v("\n            Submit\n        ")])])],1)}),[],!1,null,"55363cbd",null);e.default=i.exports},3:function(t,e,a){"use strict";var s={name:"Messages",data:function(){return{alert:!0}},mounted:function(){var t=this;setTimeout((function(){return t.alert=!1}),1e3)}},n=a(1),i=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.alert?a("div",{staticClass:"col-12"},[t.$page.flash.success?a("div",{staticClass:"alert alert-success"},[t._v("\n        "+t._s(t.$page.flash.success)+"\n    ")]):t._e(),t._v(" "),t.$page.flash.error?a("div",{staticClass:"alert alert-danger"},[t._v("\n        "+t._s(t.$page.flash.error)+"\n    ")]):t._e()]):t._e()}),[],!1,null,"03c53340",null);e.a=i.exports},4:function(t,e,a){"use strict";var s={props:["columns","sortKey","sortOrders"]},n=a(1),i=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table dataTable no-footer",attrs:{id:"dataTableExample",role:"grid","aria-describedby":"dataTableExample_info"}},[a("thead",[a("tr",{attrs:{role:"row"}},t._l(t.columns,(function(e){return a("th",{key:e.name,staticClass:"sorting_asc",class:t.sortKey===e.name?t.sortOrders[e.name]>0?"sorting_asc":"sorting_desc":"sorting",style:"width:"+e.width+";cursor:pointer;",on:{click:function(a){return t.$emit("sort",e.name)}}},[t._v("\n                "+t._s(e.label)+"\n            ")])})),0)]),t._v(" "),t._t("default")],2)])}),[],!1,null,null,null);e.a=i.exports},48:function(t,e,a){"use strict";a.r(e);var s=a(4),n=a(5),i=a(2),r=a(3),o={components:{MemberStockAdd:a(28).default,Messages:r.a,App:i.a,Pagination:n.a,Datatable:s.a},props:{stocks:Array,server:Array,game:Array,neededstocks:Array},created:function(){var t=this;Echo.channel("Item").listen("ItemEvents",(function(e){t.reload()}))},mounted:function(){this.load()},data:function(){var t={},e=[{width:"10%",label:"#"},{width:"10%",label:"Email"},{width:"15%",label:"Stock"},{width:"15%",label:"Server"},{width:"33%",label:"Game"},{width:"33%",label:"Action"}];return e.forEach((function(e){t[e.name]=-1})),{edit:!1,type:"",dataedit:{},columns:e,sortKey:"deadline",sortOrders:t,length:10,search:"",data:[],tableData:{client:!0},pagination:{currentPage:1,total:"",nextPage:"",prevPage:"",from:"",to:""}}},methods:{reload:function(){this.$inertia.reload({preserveState:!1,preserveScroll:!0,only:["neededstocks","stocks"]})},insert:function(){this.type="baru",this.edit=!0},ubah:function(t){this.type="edit",this.dataedit=t,this.edit=!0},hapus:function(t){var e=this;this.$inertia.post(this.$route("user.memberstock.delete",{id:t}),{},{preserveState:!1,preserveScroll:!0,only:["stocks","neededstocks"]}).then((function(){e.reload()}))},load:function(){this.pagination.total=this.data.length;var t=0,e=this;this.stocks.forEach((function(a,s){t++,a.nomer=t,e.data.push(a)}))},paginate:function(t,e,a){return this.pagination.from=t.length?(a-1)*e+1:" ",this.pagination.to=a*e>t.length?t.length:a*e,this.pagination.prevPage=a>1?a:"",this.pagination.nextPage=t.length>this.pagination.to?a+1:"",t.slice((a-1)*e,a*e)},resetPagination:function(){this.pagination.currentPage=1,this.pagination.prevPage="",this.pagination.nextPage=""},sortBy:function(t){this.resetPagination(),this.sortKey=t,this.sortOrders[t]=-1*this.sortOrders[t]},getIndex:function(t,e,a){return t.findIndex((function(t){return t[e]===a}))}},computed:{filteredProjects:function(){var t=this,e=this.data;this.search&&(e=e.filter((function(e){return Object.keys(e).some((function(a){return String(e[a]).toLowerCase().indexOf(t.search.toLowerCase())>-1}))})));var a=this.sortKey,s=this.sortOrders[a]||1;return a&&(e=e.slice().sort((function(e,n){var i=t.getIndex(t.columns,"name",a)+1;return e=String(e[a]).toLowerCase(),n=String(n[a]).toLowerCase(),t.columns[i].type&&"date"===t.columns[i].type?(e===n?0:new Date(e).getTime()>new Date(n).getTime()?1:-1)*s:t.columns[i].type&&"number"===t.columns[i].type?(+e==+n?0:+e>+n?1:-1)*s:(e===n?0:e>n?1:-1)*s}))),e},paginated:function(){return this.paginate(this.filteredProjects,this.length,this.pagination.currentPage)}}},l=a(1),c=Object(l.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("App",{attrs:{topnav:"Stocks"}},[a("div",{staticClass:"row"},[a("Messages"),t._v(" "),a("div",{staticClass:"col-12"},[t._l(t.neededstocks[0],(function(e){return a("div",{staticClass:"alert alert-info"},[t._v("Admin needed  "+t._s(e.butuh)+" in "+t._s(e.kategori)+" - "+t._s(e.server))])})),t._v(" "),a("div",{staticClass:"card card-primary"},[a("div",{staticClass:"card-header bg-primary"},[a("div",{staticClass:"dataTables_filter",attrs:{id:"dataTableExample_filter"}},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control",attrs:{type:"search",placeholder:"Search"},domProps:{value:t.search},on:{input:[function(e){e.target.composing||(t.search=e.target.value)},function(e){return t.resetPagination()}]}})])])]),t._v(" "),a("div",{staticClass:"card-body"},[a("div",[a("div",{staticClass:"dataTables_wrapper dt-bootstrap4 no-footer",attrs:{id:"dataTableExample_wrapper"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12"},[a("Datatable",{attrs:{"hide-header":"false",columns:t.columns,sortKey:t.sortKey,sortOrders:t.sortOrders},on:{sort:t.sortBy}},[a("tbody",[t._l(t.paginated,(function(e){return null!==e.server&&null!==e.kategori&&null!==e.email?a("tr",{staticClass:"odd",attrs:{role:"row"}},[a("td",[t._v("#"+t._s(e.id_stock))]),t._v(" "),a("td",[t._v(t._s(e.email))]),t._v(" "),a("td",[t._v(t._s(e.stock))]),t._v(" "),a("td",[t._v(t._s(e.server))]),t._v(" "),a("td",[t._v(t._s(e.kategori))]),t._v(" "),a("td",[a("button",{staticClass:"btn btn-sm btn-white",on:{click:function(a){return t.ubah(e)}}},[a("i",{staticClass:"fa fa-edit"})]),t._v(" "),a("button",{staticClass:"btn btn-sm btn-danger",on:{click:function(a){return t.hapus(e.id_stock)}}},[a("i",{staticClass:"fa fa-trash"})])])]):t._e()})),t._v(" "),t._l(t.paginated,(function(e){return null===e.server||null===e.kategori||null===e.email?a("tr",{staticClass:"odd text-white bg-danger",attrs:{e:"",role:"row"}},[a("td",[t._v("#"+t._s(e.id_stock))]),t._v(" "),a("td",[t._v(t._s(e.email))]),t._v(" "),a("td",[t._v(t._s(e.stock))]),t._v(" "),a("td",[t._v(t._s(e.server))]),t._v(" "),a("td",[t._v(t._s(e.kategori))]),t._v(" "),a("td",[a("button",{staticClass:"btn btn-sm btn-primary",on:{click:function(a){return t.ubah(e)}}},[a("i",{staticClass:"fa fa-edit"})]),t._v(" "),a("button",{staticClass:"btn btn-sm btn-danger",on:{click:function(a){return t.hapus(e.id_stock)}}},[a("i",{staticClass:"fa fa-trash"})])])]):t._e()}))],2)])],1)]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12 col-md-5"}),t._v(" "),a("Pagination",{attrs:{pagination:t.pagination,client:!0,filtered:t.filteredProjects},on:{prev:function(e){--t.pagination.currentPage},next:function(e){++t.pagination.currentPage}}})],1)])])]),t._v(" "),a("div",{staticClass:"card-footer"},[a("button",{staticClass:"btn btn-primary",on:{click:t.insert}},[a("i",{staticClass:"fa fa-plus"}),t._v("\n                        Tambah\n                    ")])])])],2),t._v(" "),a("div",{staticClass:"col-12"},[t.edit?a("MemberStockAdd",{attrs:{type:t.type,server:t.server,game:t.game,p:t.dataedit}}):t._e()],1)],1)])}),[],!1,null,null,null);e.default=c.exports},5:function(t,e,a){"use strict";var s={props:["pagination","client","filtered"]},n=(a(62),a(1)),i=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"pagination"},[t.pagination.prevPage?a("li",{staticClass:"page-item",on:{click:function(e){return t.$emit("prev")}}},[t._m(0)]):a("li",{staticClass:"page-item disabled",attrs:{disabled:!0}},[t._m(1)]),t._v(" "),t.pagination.nextPage?a("li",{staticClass:"page-item",on:{click:function(e){return t.$emit("next")}}},[t._m(2)]):a("li",{staticClass:"page-item disabled",attrs:{disabled:!0}},[t._m(3)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"page-link",attrs:{href:"#",tabindex:"-1"}},[e("i",{staticClass:"fas fa-chevron-left"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"page-link",attrs:{href:"#",tabindex:"-1"}},[e("i",{staticClass:"fas fa-chevron-left"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"page-link",attrs:{href:"#"}},[e("i",{staticClass:"fas fa-chevron-right"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"page-link",attrs:{href:"#"}},[e("i",{staticClass:"fas fa-chevron-right"})])}],!1,null,null,null);e.a=i.exports},6:function(t,e,a){"use strict";var s={name:"Spinner"},n=a(1),i=Object(n.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"col-12 text-center"},[this._v("\n            Loading...\n")])}),[],!1,null,"598e47cf",null);e.a=i.exports},62:function(t,e,a){"use strict";var s=a(16);a.n(s).a},63:function(t,e,a){(t.exports=a(13)(!1)).push([t.i,".pagination {\n  justify-content: flex-end !important;\n}\n.pagination .page-stats {\n  align-items: center;\n  margin-right: 5px;\n}\n.pagination i {\n  color: #3273dc !important;\n}",""])}}]);