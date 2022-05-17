import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css"
import VueRouter from 'vue-router'
// Vue 2.6 버전 + vue router 4버전일시 에러 발생. 라우터 3.5버전으로 다운그레이드 할 것

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
    render: h => h(App),
}).$mount('#app')