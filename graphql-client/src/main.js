import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import { createProvider } from './vue-apollo'
import VueRouter from 'vue-router';
import Bands from './components/Bands.vue'
import NewBand from './components/NewBand.vue'

Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  routes : [
    { path: '/bands', component: Bands },
    { path: '/band', component: NewBand }
  ]
})

new Vue({
  router: router,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')
