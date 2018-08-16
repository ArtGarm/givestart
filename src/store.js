import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tabsOnMain : location.hash   
    },
    mutations: {

        changeHash(state, data){

            location.hash = data;
            state.tabsOnMain = '#' + data;
            
        },

    },
    actions: {

        changeHashOnMain : (context, hashName ) =>{

            context.commit('changeHash', hashName ); 
            
        }

    }
})
