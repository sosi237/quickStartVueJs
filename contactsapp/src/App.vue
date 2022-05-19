<template>
  <div id="container">
      <div class="page-header">
         <h1 class="text-center">연락처 관리 애플리케이션</h1>
         <p>(Vue-router + Vuex + Axios) </p>
         <div class="btn-group">
           <router-link to="/home" class="btn btn-info menu">Home</router-link>
           <router-link to="/about" class="btn btn-info menu">About</router-link>
           <router-link to="/contacts" class="btn btn-info menu">Contacts</router-link>
         </div>
      </div>
      <!-- 메인화면 전환시 플립 효과 일으키기 -->
      <!-- transsition이 router-view를 감싸고 있으므로 router-view에 의해 나타나는 컴포넌트 변경시 트랜지션 효과가 적용된다.
      mode: 트랜지션을 적용하는 순서, out-in 은 leave 단계 완료시 enter 단계가 시작한다는 의미
      mode를 지정하지 않으면 in, out이 동시에 진행된다. in-out으로 지정시 enter 단계 완료후 leave 단계가 시작한다.
      -->
      <transition name="flip" mode="out-in">
        <router-view></router-view>
      </transition>
      <loading v-show="isloading"></loading>
  </div>
</template>

<script>
import Loading from './components/Loading'
import {mapState} from 'vuex'
export default {    
    name: 'app',
    components:{Loading},
    computed:mapState(['isloading'])
}
</script>

<style scoped>
#container {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.flip-enter-active{transition: all .4s ease-in-out;}
.flip-leave-active{transition: all .4s ease-in-out;}
.flip-enter, .flip-leave-to{transition: scaleY(0) translateZ(0); opacity: 0}
</style>