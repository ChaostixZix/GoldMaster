import { InertiaApp } from '@inertiajs/inertia-vue'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'


Vue.use(InertiaApp)
Vue.use(BootstrapVue)

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
