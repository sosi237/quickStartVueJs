<template>
    <div>
        <p class="addnew">
            <button class="btn btn-primary" @click="addContact()">새로운 연락처 추가하기</button>
        </p>
        <div id="example">
            <table id="list" class="table table-stripped table-bordered table-hover">
                <thead>
                    <tr>
                        <th>이름</th>
                        <th>전화번호</th>
                        <th>주소</th>
                        <th>사진</th>
                        <th>편집/삭제</th>
                    </tr>
                </thead>
                <tbody id="contacts">
                    <tr v-for="contact in contactlist.contacts" :key="contact.no">
                        <td>{{contact.name}}</td>
                        <td>{{contact.tel}}</td>
                        <td>{{contact.address}}</td>
                        <td><img class="thumbnail" :src="contact.photo" @click="editPhoto(contact.no)" /></td>
                        <td>
                            <button class="btn btn-primary" @click="editContact(contact.no)">편집</button>
                            <button class="btn btn-primary" @click="deleteContact(contact.no)">삭제</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <paginate ref="pagebuttons"
            :page-count="totalpage"
            :page-range="7"
            :margin-pages="3"
            :click-handler="pageChanged"
            :prev-text="'이전'"
            :next-text="'다음'"
            :container-class="'pagination'"
            :page-class="'page-item'">
        </paginate>
    </div>
</template>
<script>
import eventBus from '../EventBus'
import Paginate from 'vuejs-paginate'

export default {
    name:"contactList",
    components:{Paginate},
    props:["contactlist"],
    computed:{
        totalpage:function(){
            return Math.floor((this.contactlist.totalcount - 1 ) / this.contactlist.pagesize) + 1
        }
    },
    watch:{
        ["contactlist.pageno"]:function(){
            this.$refs.pagebuttons.selected = this.contactlist.pageno -1
        }
    },
    methods:{
        pageChanged:function(page){
            eventBus.$emit("pageChanged", page)
        },
        addContact:function(){
            eventBus.$emit("addContactForm")
        },
        editContact:function(no){
            eventBus.$emit("editContactForm", no)
        },
        deleteContact:function(no){
            if(confirm("정말로 삭제하시겠습니까?") == true){
                eventBus.$emit("deleteContact", no)
            }
        },
        editPhoto:function(no){
            eventBus.$emit("editPhoto", no)
        }
    }
}
</script>
<style scoped>
.addnew { margin:10px auto; max-width:820px; min-width: 820px; padding: 40px 0px 0px 0px; text-align: left;}
</style>
