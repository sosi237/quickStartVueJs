import Vue from 'vue'
import App from './App.vue'
// import App from './AppAxiosTest.vue'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import ES6Promise from 'es6-promise'
ES6Promise.polyfill()

Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
    render: h => h(App),
}).$mount('#app')