import Vue from 'vue'
import Vuelidate from 'vuelidate' // Vuelidate https://vuelidate.js.org/
import App from './App.vue'
import router from './router'
import store from './store'
import currencyFilter from '@/filters/currency.filter' // Intl.NumberFormat https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
import dateFilter from '@/filters/date.filter' // Intl.DateTimeFormat https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
import mesagePlagin from '@/utils/message.plagin'
import Loader from '@/components/app/Loader'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize' // Materialize https://materializecss.com/

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(mesagePlagin)
Vue.use(Vuelidate)
Vue.filter('currency', currencyFilter)
Vue.filter('date', dateFilter)
Vue.component('Loader', Loader)

firebase.initializeApp({
  apiKey: 'AIzaSyBlV7J8E3J69MwnTihaYOkmXUBnElooaLY',
  authDomain: 'vue-crm-6868.firebaseapp.com',
  databaseURL: 'https://vue-crm-6868.firebaseio.com',
  projectId: 'vue-crm-6868',
  storageBucket: 'vue-crm-6868.appspot.com',
  messagingSenderId: '705546845097',
  appId: '1:705546845097:web:c9f178b420c5526901a2b8',
  measurementId: 'G-S09ZTC4CJE'
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
