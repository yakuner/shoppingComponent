import Vue from 'vue'
import App from '@/App'
import router from './router'
// 缓存原型上的push函数

new Vue({
    el:'#app',
    router,
    render: h => h(App)
})