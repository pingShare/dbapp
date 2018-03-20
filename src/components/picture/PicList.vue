<template>
    <ul class="con">
       <li  class="photo" v-for="(photo,index) in photoList" :key="photo.index">
         <router-link :to="'/picdetail/'+index">          
             <img :src="photo.src" :alt="photo.src">        
        </router-link>   
        </li>   
    </ul>
</template>
<script>
import Axios from "axios";
export default {
  data() {
    return {
      photoList: []
    };
  },
  mounted() {
    Axios.get("../static/photodata.json")
      .then(res => {
       this.photoList = res.data.photoData;
       // console.log(this.$store.photoList);
       //存到vuex里，方便获取
       this.$store.dispatch('setPhotoList',res.data.photoData);
      })
      .catch();
  }
};
</script>
<style>
.photo {
  width: 50%;
  display: inline-block;
}
.photo img {
  width: 100%;
  max-width: 100%;
}
</style>
