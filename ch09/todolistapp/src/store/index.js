import Vue from 'vue'
import Vuex from 'vuex'
import Constant from '../Constant'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        todolist: [
            { id: 1, todo: "영화보기", done: false },
            { id: 2, todo: "산책", done: true },
            { id: 3, todo: "ES6 공부", done: false },
            { id: 4, todo: "배구보기", done: false }
        ]
    },
    mutations: {
        [Constant.ADD_TODO]: (state, payload) => {
            if (payload.todo !== "") {
                state.todolist.push({ id: new Date().getTime(), todo: payload.todo, done: false })
            }
        },
        [Constant.DONE_TOGGLE]: (state, payload) => {
            let index = state.todolist.findIndex((item) => item.id === payload.id)
            state.todolist[index].done = !state.todolist[index].done
        },
        [Constant.DELETE_TODO]: (state, payload) => {
            let index = state.todolist.findIndex((item) => item.id === payload.id)
            state.todolist.splice(index, 1)
        },
    }
})

export default store;