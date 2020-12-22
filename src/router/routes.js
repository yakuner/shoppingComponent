import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Reginter from '@/pages/Reginter'
import Login from '@/pages/Login'

export default [
    {
        path:'/',
        component:Home,
        meta:{
            isFooterShow:false
        }
    },
    {
        path:'/search/:keyWord?',
        component:Search,
        name:'search',
        props(route){
            return{
                keyWord:route.params.keyWord,
                keyWord2:route.query.keyWord2
            }
        },
        meta:{
            isFooterShow:false
        }
    },
    {
        path:'/reginter',
        component:Reginter,
        meta:{
            isFooterShow:true
        }
    },
    {
        path:'/login',
        component:Login,
        meta:{
            isFooterShow:true
        }
    }
]