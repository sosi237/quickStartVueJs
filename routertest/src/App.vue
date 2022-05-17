<template>
  <div>
    <div class="header">
      <h1 class="headerText">(주)OpenSG</h1>
      <nav>
        <ul>
          <li><router-link to="/home">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/contacts">Contacts</router-link></li>
        </ul>
      </nav>
    </div>
    <div class="container">
      <!-- router-view: URI 경로에 따라 라우터 객체에서 매핑한 컴포넌트가 이 위치에 나타남 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import About from './components/About.vue'
import Contacts from './components/Contacts.vue'
import ContactByNo from './components/ContactByNo.vue'
import VueRouter from 'vue-router'  // vue-router 참조

// 각 경로별로 보여줄 컴포넌트를 매핑한 router 객체 생성
const router = new VueRouter({
  routes:[
    {path:"/", component:Home},
    {path:"/home", component:Home},
    {path:"/about", component:About},
    {path:"/contacts", component:Contacts,
      children:[
        {path:":no", component:ContactByNo},
    ]},
    
  ]
})

// vue 인스턴스 생성시 router 객체 지정
export default {
  name: 'app',
  router
}
</script>

<style>
.header {background-color: aqua; padding: 10px 0px 0px 0px;}
.headerText {padding: 0px 20px 0px 20px;}
ul {list-style-type: none; margin: 0; padding: 0; overflow: hidden; background-color: purple;}
li {float: left;}
li a {display: block; color: yellow; text-align: center; padding: 14px 16px; text-decoration: none;}
li a:hover { background-color: aqua; color: black;}

</style>
