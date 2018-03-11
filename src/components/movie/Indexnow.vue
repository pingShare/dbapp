<template>
<div>
    <div class="loading" v-show="isShow">
        <img src="../../assets/img/loading.gif" alt="" class="loading">
    </div>

  <ul class="now">
      <li @click="jump(movie.id)" v-for="movie in movieList" :key="movie.id" class="movieli"> 
        <div class="left">  <!-- @click="jump(movie.id)"  -->
              <img v-lazy="movie.img" alt="图片找不到啦">
        </div>
        <div class="right">
            <h4>{{movie.t}}</h4>  <!--电影名 -->
            <!-- <span></span><span>{{movie.r}}</span> 评分-->
            <p>导演：{{movie.dN}}</p>    <!--导演名 -->
            <p>类型:{{movie.movieType}}</p>
            <p>主演：{{movie.actors}}</p>
            <p>{{movie.NearestShowtimeCount}}人看过</p>
        </div>          
      </li>
  </ul>
</div>
</template>

<script>
import Axios from 'axios'
    export default{
        data(){
            return{
                movieList:[],
               isShow:true
            };
        },
        mounted(){
         // let url1 = API_PROXY+"https://api-m.mtime.cn/Showtime/LocationMovies.api?locationId=829"
            let url2 = "../static/movienow.json";
            Axios.get(url2)                                        
             .then(res=>{//console.log(res);
                this.isShow = false;
                this.movieList = res.data.ms;
             })
             .catch();
        },
        methods:{
            jump(mid){
               // console.log(mid);
               this.$router.push(`/movie/moviedetail/${mid}`);
            }
        } 
       
    }
</script>

<style>
    .now{
        overflow-y: scroll;
        position: absolute;
        top:120px;
        right:5px;
        left: 5px;
        bottom: 55px;
     }
     .loading{
         position: absolute;
         top: 110px;
         bottom: 50px;
         left: 0;
         right: 0;
     }
     .loading img{
         margin: 0 auto;
     }
     .movieli{
         border-bottom:1px solid rgb(230, 229, 229) ;
         margin:3px 6px;
         /* height: 35%; */
        display: flex;
     }
     .left{
         width: 30%;
         /* float: left; */
         display: block;
         /* flex-grow: 3; */
     }
     .right{
         /* display: inline-block; */
         /* float:left; */
         /* flex-grow: 7; */
         padding-left: 6px;
         width: 70%;
         text-align: left;
     }

</style>
