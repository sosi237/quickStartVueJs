<template>
    <div>
        <hr class="divider"></hr>
        <h1>연락처 상세</h1>
        <div>
            <table class="detail table table-bordered">
                <tbody>
                    <tr class="active">
                        <td>일련번호</td>
                        <td>{{contact.no}}</td>
                    </tr>
                    <tr class="active">
                        <td>이름</td>
                        <td>{{contact.name}}</td>
                    </tr>
                    <tr class="active">
                        <td>전화</td>
                        <td>{{contact.tel}}</td>
                    </tr>
                    <tr class="active">
                        <td>주소</td>
                        <td>{{contact.address}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import contactlist from '../ContactList'

export default {
    name:'contactbyno',
    props:["no"],   // 속성의 사용으로 더이상 라우트 정보에 의존적이지 않다.
    data:function(){
        return {
            contacts:contactlist.contacts
        }
    }, 
    // 속성을 사용하지 않는 경우
    // data:function(){
    //     return {
    //         no:0, contacts:contactlist.contacts
    //     }
    // }, 

    // 속성(props의 사용으로 더이상 필요하지 않으므로 주석 처리)
    // created: function(){
    //     // /contacts/:no 와 같이 URI 경로의 문자열은 this.$route.params.no 와 같이 획득한다.
    //     // this.$route.query 객체도 지원한다 : /users?keyword=test -> this.$route.query.keyword
    //     this.no=this.$route.params.no;
    // },
    // // /contacts 에서 /contacts/:no로의 이동만 허용하게 하기 위함
    // // 라우트 정보가 변경될때만 호출된다. 처음 컴포넌트 생성시에는 호출되지 않는다.
    // // 따라서 created() 훅도 필요하다
    // beforeRouteUpdate(to, from, next){
    //     console.log("** beforeRouteUpdate")
    //     this.no = to.params.no
    //     next()  // 반드시 호출해야. 호출하지 않으면 내비게이션이 완료되지 않아 URL 경로가 변경되지 않음
    // },


    // 첫번째 호출 이후에는 ContactByNo 컴포넌트가 이미 Contacts.vue 안에 생성되어있으므로 
    // created() 나 mounted() 가 호출되지 않는 문제를 해결하기 위해 watch 사용
    // watch:{
    //     '$route':function(to, from){
    //         // to : 현재의 라우트 객체 / from : 이전의 라우트 객체
    //         // 현재의 라우트 객체의 no값을 이용해야 하므로 to.params.no 값을 no 데이터 속성에 할당한다.
    //         this.no = to.params.no
    //     }
    // },
    computed:{
        contact:function(){
            let no = this.no;
            let arr = this.contacts.filter(function(item, index){
                return item.no == no;
            })
            if(arr.length == 1) return arr[0]
            else return {}
        }
    }
}
</script>
<style >
table.detail {width:400px;}
.divider {
    height: 3px; margin-left: auto; margin-right: auto; background-color: #FF0066; color:#FF0066; border: 0 none;
}
</style>