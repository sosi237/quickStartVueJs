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
    data:function(){
        return {
            no:0, contacts:contactlist.contacts
        }
    }, 
    created: function(){
        // /contacts/:no 와 같이 URI 경로의 문자열은 this.$route.params.no 와 같이 획득한다.
        // this.$route.query 객체도 지원한다 : /users?keyword=test -> this.$route.query.keyword
        this.no=this.$route.params.no;
    },
    // 첫번째 호출 이후에는 ContactByNo 컴포넌트가 이미 Contacts.vue 안에 생성되어있으므로 
    // created() 나 mounted() 가 호출되지 않는 문제를 해결하기 위해 watch 사용
    watch:{
        '$route':function(to, from){
            // to : 현재의 라우트 객체 / from : 이전의 라우트 객체
            // 현재의 라우트 객체의 no값을 이용해야 하므로 to.params.no 값을 no 데이터 속성에 할당한다.
            this.no = to.params.no
        }
    },
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