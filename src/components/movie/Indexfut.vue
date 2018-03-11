<template>
<div>
    <div class="loading" v-show="isShow">
        <img src="../../assets/img/loading.gif" alt="" class="loading">
    </div>

  <ul class="fut">
      <li  @click="jump(movie.id)" v-for="movie in movieList" :key="movie.id" class="movieli"> 
        <div class="left">
              <img v-lazy="movie.image" alt="图片找不到啦">
        </div>
        <div class="right">
            <h4>{{movie.title}}</h4>  <!--电影名 -->
            <!-- <span></span><span>{{movie.r}}</span> 评分-->
            <p>导演：{{movie.director}}</p>    <!--导演名 -->
            <p>类型:{{movie.type}}</p>
            <p>主演：{{movie.actor1}}/{{movie.actor2}}</p>
            <p>{{movie.wantedCount}}人想看</p>
        </div>          
      </li>
  </ul>
</div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      movieList: [],
      isShow: true
    };
  },
  methods: {
    jump(mid) {
      this.$router.push(`/movie/Futmovie/${mid}`);
    }
  },
  mounted() {
    //let url1 =global.API_PROXY +"https://api-m.mtime.cn/Movie/MovieComingNew.api?locationId=829";
    let url2 = "../static/moviefut.json";
    Axios.get(url2)
      .then(res => {
        //console.log(res);
        this.isShow = false;
        this.movieList = res.data.moviecomings;
      })
      .catch();
  }
};
</script>

<style scoped>
.fut {
  overflow-y: scroll;
  position: absolute;
  top: 120px;
  right: 5px;
  left: 5px;
  bottom: 55px;
}
.loading {
  position: absolute;
  top: 110px;
  bottom: 50px;
  left: 0;
  right: 0;
}
.loading img {
  margin: 0 auto;
}
.movieli {
  border-bottom: 1px solid rgb(230, 229, 229);
  margin: 3px 6px;
  display: flex;
}
.left {
  width: 30%;
  display: block;
}
.right {
  padding-left: 6px;
  width: 70%;
  text-align: left;
}
</style>
