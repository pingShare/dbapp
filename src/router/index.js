import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/movie/Index'
import Index_Now from '@/components/movie/Indexnow'
import Index_Fut from '@/components/movie/Indexfut'
import Music from '@/components/music/Music'
Vue.use(Router)

export default new Router({
  routes: [
   {
      path:'/',
      component:Index,
    //  alias:"index",
      redirect:'/movie/index-now',
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
      path:"/music",
      component:Music
    }

  ]
})
