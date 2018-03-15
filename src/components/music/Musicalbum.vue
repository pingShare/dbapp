
<template>
    <div id="aplayer">
        <a-player v-if="isShow" :autoplay="false" :music="songs[0]" 
        :showlrc="true" :mutex="true">
        <!-- v-for="music in songs" :key="music.index"  -->
        </a-player>
        <a-player v-if="isShow" :autoplay="false" :music="songs[1]" 
        :showlrc="true" :mutex="true"> 
        </a-player>
        <a-player v-if="isShow" :autoplay="false" :music="songs[2]" 
        :showlrc="true" :mutex="true"> 
        </a-player>
        <a-player v-if="isShow" :autoplay="false" :music="songs[3]" 
        :showlrc="true" :mutex="true"> 
        </a-player>
        <a-player v-if="isShow" :autoplay="false" :music="songs[4]" 
        :showlrc="true" :mutex="true"> 
        </a-player>
</div>   
</template>


<script>
import VueAplayer from "vue-aplayer"
import Axios from "axios"


export default{
     data(){
        return{
            songs:[],
            isShow:false,
        }
    },
    components:{
        "a-player":VueAplayer
    },
    mounted(){
        Axios.get("../../static/musicdata.json")
        .then(res=>{
            //console.log(res);
            let list = res.data.musicData;
            
           //console.log(list);
            list.forEach(element=>{
                  this.songs.push({
                    title:element.title,
                    author:element.author,
                    url:element.src,
                    pic:element.musicImgSrc,
                    lrc:'../../static/'+element.lrc
                })
            }),
            console.log(this.songs);
            this.isShow = true;
        }).catch();}
   }

</script>


<style>

</style>
