<style>
    *{box-sizing: border-box;}
    .header {background-color: purple;padding: 30px;color: yellow;text-align: center;}
    .header::after{content: ""; display: table; clear: both;}
</style>
<template>
    <div id="todolistapp">
        <div id="header" class="header">
            <h2>Todo List App</h2>
            <!-- components 옵션으로 등록한 컴포넌트들은 태그 형태로 사용할 수 있다.
                이 때, 태그명은 반드시 케밥표기법을 사용해야 한다.
             -->
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
