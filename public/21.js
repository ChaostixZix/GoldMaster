(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1:function(t,e,a){"use strict";function n(t,e,a,n,i,r,o,s){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=a,c._compiled=!0),n&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),o?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=l):i&&(l=s?function(){i.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:i),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(t,e){return l.call(e),d(t,e)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,l):[l]}return{exports:t,options:c}}a.d(e,"a",(function(){return n}))},22:function(t,e,a){"use strict";a.r(e);var n={name:"MemberStockAdd",components:{Spinner:a(6).a},props:{p:Object,server:Array,game:Array,type:String},data:function(){return{data:{id_kategori:this.p.id_kategori,id_item:this.p.id_item,stock:this.p.stock},loading:!1}},methods:{submit:function(){var t=this;this.loading=!0,"baru"===this.type?this.$inertia.post(this.$route("admin.memberstock.insert"),this.data,{preserveState:!1,preserveScroll:!0,only:["stocks"]}).then((function(){t.loading=!1})):"edit"===this.type&&this.$inertia.post(this.$route("admin.memberstock.update",{id:this.p.id_stock}),this.data,{preserveState:!1,preserveScroll:!0,only:["stocks"]}).then((function(){t.loading=!1}))}}},i=a(1),r=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card card-primary"},[t.loading?a("Spinner"):a("div",{staticClass:"card-body"},[a("label",{staticClass:"form-control-label"},[t._v("\n            Game\n        ")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.data.id_kategori,expression:"data.id_kategori"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.data,"id_kategori",e.target.multiple?a:a[0])}}},t._l(t.game,(function(e){return a("option",{domProps:{value:e.id_kategori}},[t._v(t._s(e.kategori))])})),0),t._v(" "),a("label",{staticClass:"form-control-label"},[t._v("\n            Server\n        ")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.data.id_item,expression:"data.id_item"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.data,"id_item",e.target.multiple?a:a[0])}}},t._l(t.server,(function(e){return a("option",{domProps:{value:e.id_item}},[t._v(t._s(e.server))])})),0),t._v(" "),a("label",{staticClass:"form-control-label"},[t._v("\n            Quantity\n        ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.stock,expression:"data.stock"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.data.stock},on:{input:function(e){e.target.composing||t.$set(t.data,"stock",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"card-footer"},[a("button",{staticClass:"btn btn-primary",on:{click:t.submit}},[a("i",{staticClass:"fa fa-paper-plane"}),t._v("\n            Submit\n        ")])])],1)}),[],!1,null,"413cf04a",null);e.default=r.exports},6:function(t,e,a){"use strict";var n={name:"Spinner"},i=a(1),r=Object(i.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"col-12 text-center"},[this._v("\n            Loading...\n")])}),[],!1,null,"598e47cf",null);e.a=r.exports}}]);