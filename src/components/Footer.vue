<template>
<div class="footer">
    <router-link to="/movie/index-now">电影</router-link>
    <router-link to="/music" >音乐</router-link>
    <router-link to="/movie/index-now" >阅读</router-link>
    <router-link to="/movie/index-now" >我</router-link>
     
</div>

</template>
<script>
    
</script>

<style scoped>
.footer{
    height:50px;
    position: fixed;
    bottom: 0;
    width: 100%;
    line-height:50px;
    color: #ffffff;
    border-top:1px solid #42bd56;
    display: flex;
}
ul{
    display: flex;
}
a{
    /* width:25%; */
    color:black;
    /* float:left; */
    flex-grow: 0.25;
    display: inline-block;
}
li:active,li:visited{
    color:#42bd56;
}
</style>