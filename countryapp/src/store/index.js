import Vue from 'vue'
import Vuex from 'vuex'
import Constant from '../Constant'
import _ from 'lodash'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        currentRegion: "all",
        countries: [
            { no: 1, name: "미국", capital: "워싱턴DC", region: "america" },
            { no: 2, name: "프랑스", capital: "파리", region: "europe" },
            { no: 3, name: "영국", capital: "런던", region: "europe" },
            { no: 4, name: "중국", capital: "베이징", region: "asia" },
            { no: 5, name: "태국", capital: "방콕", region: "asia" },
            { no: 6, name: "모로코", capital: "라바트", region: "africa" },
            { no: 7, name: "라오스", capital: "비엔티안", region: "asia" },
            { no: 8, name: "베트남", capital: "하노이", region: "asia" },
            { no: 9, name: "피지", capital: "수바", region: "america" },
            { no: 10, name: "솔로몬제도", capital: "호니아라", region: "oceania" },
        ]
    },
    getters: {
        countriesByRegion(state) {
            if (state.currentRegion == "all") {
                return state.countries
            } else {
                return state.countries.filter(c => c.region == state.currentRegion)
            }
        },
        regions(state) {
            var temp = state.countries.map((c) => c.region)
            temp = _.uniq(temp) // 중복 지역명 제거
            temp.slice(0, 0, "all")
            return temp;
        },
        currentRegion(state) {
            return state.currentRegion
        },
    },
    mutations: {
        [Constant.CHANGE_REGION]: (state, payload) => {
            state.currentRegion = payload.region
        }
    },
})

export default store;