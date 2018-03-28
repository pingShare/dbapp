<template> 
    <v-touch  class="con" :style="styleImg" 
    @swipeleft="swipeleft" @swiperight="swiperight" @tap="tap"> </v-touch>
</template>
<script>
    export default{
        data(){
            return{             
                nowIndex:0,           
            }           
        },
        computed:{
            styleImg(){
                return {
                 background:`#000 url(${this.$store.state.photoList[this.nowIndex].src}) no-repeat center/contain`
                };
            }
        },
        methods:{
            swipeleft(){
                //console.log("swipeleft");
                this.nowIndex++;
                 if(this.nowIndex == this.$store.state.photoList.length){
                      this.nowIndex = 0;
                 }
            },
             swiperight(){                
                 this.nowIndex--;
                if(this.nowIndex == -1){
                    this.nowIndex = this.$store.state.photoList.length-1;
                }
            },
            tap(){
               this.$router.go(-1);
            }
        },
        mounted(){
            //console.log(this.$store.state.photoList);
            this.nowIndex = this.$route.params.index;
            //console.log(nowIndex);
          //  console.log(this.$store.state.photoList[this.nowIndex]);
        }
    }
</script>
<style>
.con{
  overflow-y: scroll;
  position: absolute;
  top: 65px;
  bottom: 55px;
  width:100%;
}
</style>
