import Vue from 'vue'
import App from './App.vue'
import store from './store'

import '@/assets/stylus/main.styl'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
