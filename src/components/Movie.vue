<template>
<div>
  <commonHeader></commonHeader>
   <h1>this is Movie.vue</h1>
  <commonFooter></commonFooter>
</div>
  
</template>

<script>
    import commonHeader from "./Header"
    import commonFooter from "./Footer"
    export default{
       components:{
        commonHeader,
        commonFooter
      }
    }

</script>

<style>

</style>
