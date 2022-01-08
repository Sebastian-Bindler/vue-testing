import Vue from 'vue'
import VueRouter from 'vue-router'

//import Index from '../src/components/index.vue'
import Calc from '../src/components/calc.vue'
import Hello from '../src/components/HelloWorld.vue'

Vue.use(VueRouter)

const routes = [
    
    //{path: '/', component: Index},
    {path: '/calc', component: Calc},
    {path: '/hello', component: Hello},
 ];

const router = new VueRouter({
    mode: 'history',
    base: process.env.Base_URL,
    routes
})

export default router;

