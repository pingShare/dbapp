<template>
  <ul class="music">
      <li v-for="music in musicList" :key="music.id">
        <router-link :to="'/music/musicalbum/'+music.id">
            <img :src="music.bg" alt="肿么肥四">
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
    height: auto;
}
.music a{
    display:block;
    width: 100%;
    height: 300px;
}
.music li img{
    width: 100%;
}
</style>
