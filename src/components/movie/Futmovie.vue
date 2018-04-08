<template>
  <div class="detail now">
      <commonHeader></commonHeader>
     <div id="detail_top" class="clearfix">   <!--轮播图 -->
    
    <swipe id="my-swipe">
        <swipe-item  v-for="imgsrc in detail.stageImg.list" :key="imgsrc.imgUrl">
            <img :src="imgsrc.imgUrl" alt="">
        </swipe-item>
    </swipe>
       </div> 
          <div class="detail_pro">
            <h3>{{detail.name}}</h3>
            <p>{{detail.nameEn}}</p> 
    <br>    
            <span v-for="nm in detail.type" :key="nm">{{nm}}<span class="line">/</span></span>
            <p>{{detail.releaseArea}}<span>|</span>{{detail.mins}}</p>
            <p>{{detail.commentSpecial}}</p>  
           <div class="score">评分：{{detail.overallRating}}</div>     
         </div> 
             <span class="star">想看</span>
            <span class="star" style="margin-left:10px">看过</span>
        <div @click="show()" class="detail_story">
            <p :class="{story:isStory}">{{detail.story}}</p>
        </div>
      <commonFooter></commonFooter>
  </div>
</template>

<script>
require("vue-swipe/dist/vue-swipe.css");
import  {Swipe,SwiperItem }from "vue-swiper";
//import   SwiperItem  from "vue-swiper";
import Axios from "axios";
import commonHeader from "../Header";
import commonFooter from "../Footer";
export default {
  // name:'carrousel',
  data() {
    return {
      detail: {},
      isStory:false,
      num: [] //存放序号的新数组        
    };
  },
  mounted() {
    /* let url1 =
      API_PROXY +
      `https://ticket-api-m.mtime.cn/movie/detail.api?locationId=829&movieId=${
        this.$root.$route.params.mid
      }`; */
    // let url1= API_PROXY+"https://ticket-api-m.mtime.cn/movie/detail.api?locationId=829&movieId=254741";

    let url2 = "../../static/nowdetail.json";
    Axios.get(url2)
      .then(res => {
        // console.log(this.$root.$route.params.mid);
        //console.log($route.params.mid); $route is not defined
       // console.log(res.data.data.basic);
        this.detail = res.data.data.basic;
      })
      .catch();
  },
  components: {
    commonHeader,
    commonFooter,
    'swipe':Swipe,
    'swipe-item':SwiperItem
  },
  methods: {
      show(){
          this.isStory = !this.isStory;
      }
    /*  onSlideChangeStart(currentPage) {
      console.log("onSlideChangeStart", currentPage);
    },
    onSlideChangeEnd(currentPage) {
      console.log("onSlideChangeEnd", currentPage);
    }*/
  }
};
</script>

<style scoped>
#detail_top:after{
    content: '';
    display: block;
    clear: both;
}
.detail {
  overflow-y: scroll;
  position: absolute;
  top: 65px;
  bottom: 55px;
}
#detail_top {
  font-size: 1.2em;
  position: relative;
  height: 250px;
}

#my-swipe img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 250px;
  display: block;
  margin: 0 auto;
}

.detail_pro {
  text-align: left;
  margin-left:0.4rem;
  margin-top: 0.4rem;
    position: relative;
}
.detail_story {
  padding: 0.4rem;
  text-indent: 0.5rem;
  font-size: 0.3rem;
  text-align: left;
}
.star {
  display: inline-block;
  width: 140px;
  height: 45px;
  line-height: 45px;
  background-color: rgb(243, 241, 241);
  color: #777;
  border-radius: 6px;
  margin: 12px 0;
}
.story {
  display: -webkit-box;
  overflow: hidden;
  white-space: normal !important;
  text-overflow: ellipsis;
  word-wrap: break-word;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.score{
    position: absolute;
    right: 0.4rem;
    top: 0.4rem;
    box-shadow:0 0 3px  #777 ;
    /* border:1px solid #777; */
    width: 80px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border-radius: 2px;
}
</style>
