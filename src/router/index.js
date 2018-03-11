import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/movie/Index'
import Index_Now from '@/components/movie/Indexnow'
import Index_Fut from '@/components/movie/Indexfut'
import MovieDetail from '@/components/movie/MovieDetail'
import Futmovie from '@/components/movie/Futmovie'
import Music from '@/components/music/Music'
import Read from '@/components/read/Read'

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
      component:Music
    },{
        path:"/read",
        component:Read
      }

  ]
})
