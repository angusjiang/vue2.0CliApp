import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
       count: 0,
       isClose: false
    },
    mutations: {
      switchs (state) {
        state.isClose = !state.isClose;
      }
    },
    getters: {
    	myResult: state => state.isClose
    },
    // actions: {
    // 	switchs(context) {
    // 		context.commit('switchs');
    // 	}
    // }
})
export default store