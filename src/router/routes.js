import Home from '../pages/Home'
import Regisn from '../pages/Regisn'
import Search from '../pages/Search'
import Login from '../pages/Login'

export default [
    {
        path:'/',
        component:Home
    },
    {
        path:'/regisn',
        component:Regisn
    },
    {
        path:'/search/:keyWord?', //问号代表不传或者传一位都可以
        component:Search,
        name:'search',
        props(route){
            return{
                keyWord:route.params.keyWord,
                keyWord2:route.query.keyWord2
            }
        }
    },
    {
        path:'/login',
        component:Login
    },
]