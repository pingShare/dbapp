<template>
  <div>
    <commonHeader></commonHeader>  
         <router-view></router-view>
    <commonFooter></commonFooter>
  </div>
</template>

<script>
import commonHeader from "../Header"
import commonFooter from "../Footer"
export default{
    components:{
      commonHeader,
      commonFooter
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
