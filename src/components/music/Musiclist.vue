<template>
  <ul class="music">
      <li v-for="music in musicList" :key="music.id">
        <router-link :to="'/music/musicalbum/'+music.id">
            <img :src="music.bg" alt="">
            <!-- <img src="/static/img/soar_music.jpg" alt=""> -->
        </router-link>
      </li>
      
  </ul>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      musicList: []
    };
  },
  mounted() {
    Axios.get("../static/musiclist.json")
      .then(res=>{
          this.musicList = res.data.albums;    
      })
      .catch();
  }
};
</script>


<style scoped>
.music{
  overflow-y: scroll;
  position: absolute;
  top: 65px;
  bottom: 55px;
}
.music li{
    float: left;
     width:50%;
}
.music a{
    display:block;
}
.music li img{
    width: 100%;
}
</style>
