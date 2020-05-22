import Vue from 'vue'
import App from './App.vue'
import "./../node_modules/bulma/css/bulma.css"
import VueI18n from "vue-i18n"
import i18n from './i18n'

Vue.use(VueI18n)

Vue.config.productionTip = false

new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app')
