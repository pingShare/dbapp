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
  top: 68px;
  bottom: 55px;
  width:100%;
}
/* input{
    height: 25px;
} */
#login p{
    margin: 0.5rem 0;
    height: 0,6rem;
     border: 1px solid transparent; /*为了解决外边距合并，设置了透明的border */
}
</style>
