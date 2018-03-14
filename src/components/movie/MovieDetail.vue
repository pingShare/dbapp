<template>
  <div class="detail now">
      <commonHeader></commonHeader>
        <div class="detail_name">
         <img v-lazy="detail.img" alt="">
         <div class="detail_pro">
            <h3>{{detail.name}}</h3>
            <p>{{detail.nameEn}}</p>
    <br>    
            <span v-for="nm in detail.type" :key="nm">{{nm}}<span class="line">/</span></span>
       <!-- 这种情况下，最后一个/怎么去掉 -->
            <p>{{detail.releaseArea}}<span>|</span>{{detail.mins}}</p>
            <p>{{detail.commentSpecial}}</p>
               
         </div> 
        </div>  <span class="star">想看</span>
            <span class="star" style="margin-left:10px">看过</span>
        <div class="detail_story">
          
            <p class="story">{{detail.story}}</p>
        </div>
        <div class="pic">
            <h3>剧照</h3>
            <!-- <video :src="detail.video.hightUrl" controls="controls">403啦</video> -->
            <!-- <ul> -->
                <span id="imglist" v-for="imgsrc in detail.stageImg.list"  :key="imgsrc.imgUrl" >
                    <img class="pic_img" style="vertical-align:middle" v-lazy="imgsrc.imgUrl" alt="图片找不到啦">
                </span>
                
            <!-- </ul> -->
        </div>
      <commonFooter></commonFooter>
  </div>
</template>

<script>
import Router from '../../router'
import Axios from 'axios'
import commonHeader from "../Header"
import commonFooter from "../Footer"
export default{
    data(){
        return{
            detail:{}
        }
    },
    mounted(){
        //https://ticket-api-m.mtime.cn/movie/detail.api?locationId=829&movieId=240425
       //let url1= API_PROXY+`https://ticket-api-m.mtime.cn/movie/detail.api?locationId=829&movieId=${this.$root.$route.params.mid}`;
        // let url1= API_PROXY+"https://ticket-api-m.mtime.cn/movie/detail.api?locationId=829&movieId=254741";
       let url2 = "../../static/nowdetail.json";
       Axios.get(url2).then(res=>{
           // console.log(this.$root.$route.params.mid);
           // console.log($route.params.mid); $route is not defined
            console.log(res.data.data.basic);
          this.detail=res.data.data.basic;

        }).catch();
  },
    methods:{

    },
    components:{
    commonHeader,
    commonFooter
    }
}
</script>

<style scoped>
  .detail{
        overflow-y: scroll;
        position: absolute;
        top:65px;
      /*   right:5px;
        left: 5px; */
        bottom: 55px;
     }
.detail_name{
    text-align: left;  
    /* border-bottom: 1px solid; */
    padding-left: 5px;
    font-size: 1.2em;
}
.detail_name img{
    display: inline-block;
    width: 40%;
}
.detail_pro{
    /* display: inline-block; */
    text-align: left;
    margin-left: 10px;
    /* flex-grow: 0.7; */
    float:right;
}
.detail_story{
    padding: 5px;
    text-indent: 0.5rem;
    /* line-height: 0.8rem; */
    font-size: 0.3rem;
}
.star{
    display: inline-block;
    width:140px;
    height: 45px;
    line-height: 45px;
    background-color:rgb(243, 241, 241);
    color:#777;
    border-radius: 6px;
    margin: 12px 0;
    /* font-size: 18px; */
}
.story{
    display:-webkit-box;
    overflow: hidden;
    white-space:normal!important;
    text-overflow: ellipsis;
    word-wrap:break-word;
    -webkit-line-clamp:3;
    -webkit-box-orient:vertical;
}
.pic{
    text-align:left;
    padding:0 15px;
    margin-top: 20px;
}
.pic h3{
       font-weight: 500;
}
/* .pic li{
    display:block;
    /* overflow: scroll;
    float:left;
    overflow: scroll;

} */
#imglist img{
    float: left;
    overflow: scroll;
    margin-top:6px;
    width:100%;
}
</style>
