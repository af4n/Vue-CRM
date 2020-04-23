import Vue from 'vue'
import Vuelidate from 'vuelidate' // Vuelidate https://vuelidate.js.org/
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from './filters/date.filter' // Intl.DateTimeFormat https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize' // Materialize https://vuematerial.io/

Vue.config.productionTip = false

Vue.use(Vuelidate)

Vue.filter('date', dateFilter)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
