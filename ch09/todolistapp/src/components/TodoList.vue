<style>
    *{box-sizing: border-box;}
    .header {background-color: purple;padding: 30px;color: yellow;text-align: center;}
    .header::after{content: ""; display: table; clear: both;}
</style>
<template>
<!-- 여러 컴포넌트가 공유하는 데이터가 있는 경우, 컴포넌트마다 데이터를 보유하면 데이터 중복이 발생하고 데이터 변경관리가 어려워진다.
이를 해결하기 위해
1. 이벤트 버스를 사용하여 최상위 부모 컴포넌트/주요 거점 컴포넌트에 모든 상태정보를 작성하고 자식 컴포넌트로 속성을 이용해 전달하는 방법
    : 속성은 직접 변경되지 않으므로 상태 데이터를 변경하는 메소드는 상태가 위치한 컴포넌트에 작성되어야 한다.
      다른 컴포넌트에서 속성을 전달받은 상태를 변경하기 위해서는 이벤트 버스 객체를 이용해야 한다.
2. 전역 객체를 반들어 각 컴포넌트에서 참조하여 사용하는 방법
    : 하나의 객체 정보를 여러 컴포넌트가 공유할 수 있고, 한 컴포넌트에서 데이터를 변경하면 다른 컴포넌트에도 영향을 미침.
    : 그러나 모든 컴포넌트에서 데이터를 변경할 수 있으므로 상태관리가 어려움

- Vuex
: 애플리케이션 내부의 모든 컴포넌트들이 공유하는 중앙집중화된 상태 정보 저장소 역할
: 상태 변경을 투명하게 할 수 있음. 컴포넌트에 저장소 객체의 데이터와 메소드들을 로컬 컴포넌트의 계산형 속성이나 메소드로 연결하면 됨.
: 저장소가 상태 / 변이 / 액션을 모두 관리함.
: 저장소는 저장소의 상태를 직접 변경하지 않고, 반드시 변이를 통해서만 변경한다.

 -->
    <div id="todolistapp">
        <div id="header" class="header">
            <h2>Todo List App</h2>
            <!-- components 옵션으로 등록한 컴포넌트들은 태그 형태로 사용할 수 있다.
                이 때, 태그명은 반드시 케밥표기법을 사용해야 한다.-->
            <input-todo></input-todo>
        </div>
        <list-todo></list-todo>
    </div>
</template>
<script type="text/javascript">
import InputTodo from './InputTodo.vue'
import ListTodo from './ListTodo.vue'

export default {
    name:"todo-list",
    components:{InputTodo, ListTodo}
}
</script>
