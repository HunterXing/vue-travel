import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'

//使用vuex的插件
Vue.use(Vuex)

export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters :{
        doubleCity (state) {
            return state.city + '' +state.city;
        }
    }
})
