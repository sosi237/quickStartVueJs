<template>
    <!-- 재귀 컴포넌트 : 템플릿에서 자기 자신을 호출하는 컴포넌트 -->
    <!-- 반드시 name 옵션을 지정해야 한다. -->
    <ul>
        <li v-for="s in subs" :class="s.type" :key="s.name">
            {{s.name}}
            <tree :subs="s.subs"></tree>
        </li>
    </ul>
</template>
<script>
export default {
    name:"tree",
    props:["subs"]
}
</script>
