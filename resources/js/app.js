require('./bootstrap');
import { InertiaApp } from '@inertiajs/inertia-vue'
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Notifications from 'vue-notification'


Vue.use(Notifications)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


Vue.use(InertiaApp)
import 'bootstrap-vue/dist/bootstrap-vue.css'
const app = document.getElementById('app')

new Vue({
    render: h => h(InertiaApp, {
        props: {
            initialPage: JSON.parse(app.dataset.page),
            resolveComponent: name => import(`./Pages/${name}`).then(module => module.default),
        },
    }),
}).$mount(app);
Vue.prototype.$route = (...args) => route(...args).url();
