(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{1:function(t,e,n){"use strict";function a(t,e,n,a,i,r,o,s){var d,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),a&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),o?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=d):i&&(d=s?function(){i.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:i),d)if(c.functional){c._injectStyles=d;var l=c.render;c.render=function(t,e){return d.call(e),l(t,e)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,d):[d]}return{exports:t,options:c}}n.d(e,"a",(function(){return a}))},25:function(t,e,n){"use strict";n.r(e);var a={name:"TradeMode",data:function(){return{data:{pengiriman:""}}},methods:{tambah:function(){var t=this;this.$inertia.post(this.$route("admin.trademode.tambah"),this.data,{replace:!0,preserveState:!1,preserveScroll:!1,only:["trademode"]}).then((function(){t.$parent.tambah=!1}))}}},i=n(1),r=Object(i.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("div",{staticClass:"card-header text-white bg-info"},[t._v("\n        Tambah Trade Mode\n    ")]),t._v(" "),n("div",{staticClass:"card-body"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.data.pengiriman,expression:"data.pengiriman"}],staticClass:"form-control",domProps:{value:t.data.pengiriman},on:{input:function(e){e.target.composing||t.$set(t.data,"pengiriman",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"card-footer bg-info"},[n("button",{staticClass:"btn",on:{click:t.tambah}},[t._v("\n            Submit\n        ")])])])}),[],!1,null,"4373e854",null);e.default=r.exports}}]);