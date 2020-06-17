import loadable from './loadable'
const home = loadable(()=>import('../views/home/home'))
const user = loadable(()=>import('../views/user/user'))
const login = loadable(()=>import('../views/login/login'))
const explosive = loadable(()=>import('../views/imageList/explosive/explosive'))
const sexy = loadable(()=>import('../views/imageList/sexy/sexy'))
const sweet = loadable(()=>import('../views/imageList/sweet/sweet'))

export const routerConfig = [
    {
        path:'/',
        component:home,
        auth:true,
        title:'首页'
    },
    {
        path:'/user',
        component:user,
        auth:true,
        title:'个人中心'
    },
    {
        path:'/login',
        component:login,
        auth:false,
        title:'登录'
    },
    {
        path:'/explosive',
        component:explosive,
        auth:false,
        title:'劲爆火辣'
    },
    {
        path:'/sexy',
        component:sexy,
        auth:false,
        title:'性感迷人'
    },
    {
        path:'/sweet',
        component:sweet,
        auth:false,
        title:'甜美可爱'
    }
]