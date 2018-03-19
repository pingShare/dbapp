import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/movie/Index'
import Index_Now from '@/components/movie/Indexnow'
import Index_Fut from '@/components/movie/Indexfut'
import MovieDetail from '@/components/movie/MovieDetail'
import Futmovie from '@/components/movie/Futmovie'
import Music from '@/components/music/Music'
import Musiclist from '@/components/music/Musiclist'
import Musicalbum from '@/components/music/Musicalbum'
import Index_Pic from '@/components/picture/Index-pic'
import PicList from '@/components/picture/PicList'
import PicDetail from '@/components/picture/Picdetail'
import Login from '@/components/person/Login'
import Reg from '@/components/person/Reg'
import Logined from '@/components/person/Logined'
import Person from '@/components/person/Person'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
   {
      path:'/',
      component:Index,
    //  alias:"index",
     redirect:'/index-now',
      children:[
        {
          path:'index-now',
          component:Index_Now
        },{
          path:'index-fut',
          component:Index_Fut
        }
      ]
    },{
      path:"/movie/moviedetail/:mid",
      component:MovieDetail
    },{
      path:"/movie/Futmovie/:mid",
      component:Futmovie
    },{
      path:"/music",
      component:Music,
      children:[{
        path:"/music/musiclist",
        component:Musiclist
      },{
        path:"/music/musicalbum/:musicid",
        component:Musicalbum
      }]
    },{
      path:'/index_pic',
      component:Index_Pic,
      children:[{
        path:'/piclist',
        component:PicList
      },{
        path:'/picdetail/:index',
        component:PicDetail
      }]
    },{
      path:'/person',
      component:Person,
      children:[
        {
          path:"/login",
          component:Login
        },{
          path:"/reg",
          component:Reg
        },{
          path:"/logined",
          component:Logined
        }
      ]
    }

  ]
})
