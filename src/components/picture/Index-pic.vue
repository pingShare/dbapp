<template>
  <div>
      <commonHeader></commonHeader>
      <router-view></router-view>
      <commonFooter></commonFooter>
  </div>
</template>

<script>
import commonHeader from "../Header";
import commonFooter from "../Footer";
    import Axios from 'axios'
    export default{
        data(){
            return{
                photoList:[]
            }
        },
       /*  mounted(){
            Axios.get("")
        }, */
        components: {
            commonHeader,
            commonFooter
        }
    }
</script>

<style>

</style>
