<template>
  <div>
    <div class="header">
      <h1 class="headerText">(주)OpenSG</h1>
      <nav>
        <!-- 명명된 라우트 사용 -->
        <!-- 객체를 바인딩하므로 반드시 v-bind를 사용하여 바인딩해야 함 -->
        <!-- name 과 함께 params, query 객체를 전달할 수 있음 -->
        <ul>
          <li><router-link v-bind:to="{name:'home'}">Home</router-link></li>
          <li><router-link v-bind:to="{name:'about'}">About</router-link></li>
          <li><router-link v-bind:to="{name:'contacts'}">Contacts</router-link></li>
        </ul>
        <!-- 
        <ul>
          <li><router-link to="/home">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/contacts">Contacts</router-link></li>
        </ul> 
        -->
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
  //명명된 라우트 : 라우트 정보에 고유 이름을 부여 
  // URI 경로가 아닌 라우트 이름으로 내비게이션하도록 함으로써 URI 경로 변경시 유지보수 용이
  routes:[
    {path:"/", component:Home},
    {path:"/home", name:"home", component:Home},
    {path:"/about", name:"about", component:About},
    {path:"/contacts", name:"contacts", component:Contacts,
      children:[
        {path:":no", name:"contactbyno", component:ContactByNo, beforeEnter:(to, from, next)=>{
          console.log("@@ beforeEnter: " + from.path + "--> " + to.path)
          // /contacts 에서 /contacts/:no로의 이동만 허용하게 하기 위함
          // http://localhost:8081/#/contacts/1004 처럼 입력하여 이동해보기
          if(from.path.startsWith("/contacts"))   next()
          else next("/home")
        }},
    ]},
    
  ]
})

// 특히, 애플리케이션의 인증 처리에 사용 가능
// 사용자 인증 여부를 beforeEach에서 확인하고 인증하지 않았거나 접근 권한이 없을시 로그인화면으로 이동시키도록 next() 활용 가능
router.beforeEach((to, from, next)=>{
  console.log("** beforeEach")
  next()
})
router.afterEach((to, from)=>{
  console.log("** afterEach")
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
