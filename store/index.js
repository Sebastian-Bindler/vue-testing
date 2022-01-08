import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({


    state:{
        num1: { id: 1, value: 0, },
        num2: { id: 1, value: 0, },
        operator: { value: 0}, 
    },

    getters: {
        getSum(state) { var sum;
                        if (state.operator.value == 0) { sum = state.num1.value + state.num2.value }
                        if (state.operator.value == 1) { sum = state.num1.value - state.num2.value }
                        if (state.operator.value == 2) { sum = state.num1.value * state.num2.value }
                        if (state.operator.value == 3) { sum = state.num1.value / state.num2.value }
                        return sum },
    },

    mutations: {},
    actions: {

    },
    modules: {},

  })