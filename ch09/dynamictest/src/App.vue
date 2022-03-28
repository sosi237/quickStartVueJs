<template>
<div>
  <div class="header">
    <h1 class="headerText">(주) OpenSG</h1>
    <nav>
      <ul>
        <li><a href="#" @click="changeMenu('home')">Home</a></li>
        <li><a href="#" @click="changeMenu('about')">about</a></li>
        <li><a href="#" @click="changeMenu('contact')">contact</a></li>
      </ul>
    </nav>
  </div>
  <div class="container">
    <!-- 클릭시마다 new Date()의 시간이 달라진다. 즉, 매번 실행된다. -->
    <!-- 정적 콘텐츠의 경우 매번 실행하는 것은 비효율적이므로 <keep-alive>요소로 컴포넌트를 감싸서 캐싱하자. -->
      <!-- 컴포넌트에서 name속성에 부여한 이름으로 특정 컴포넌트만 캐싱(inclue) 혹은 캐싱 제외(exclude) 할 수 있다. -->
    <keep-alive include="about, home">
      <component :is="currentView"></component>
    </keep-alive>
  </div>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'

export default {
  name: 'App',
  components: {Home, About, Contact},
  data(){return {currentView:'home'}},
  methods:{
    changeMenu(view){
      this.currentView = view;
    }
  }
}
</script>

<style scoped>
.header{background-color: aqua; padding: 10px 0px 0px 0px;}
.headerText{padding: 0px 20px 0px 20px;}
ul {list-style-type:none; margin:0; padding:0; overflow:hidden;background-color: purple;}
li{float: left;}
li a {display:block; color:yellow; text-align: center; padding: 14px 16px; text-decoration: none;}
li a:hover {background-color: aqua; color:black;}
</style>
