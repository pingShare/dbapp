<template>
<div class="footer">
    <router-link to="/index-now" style="color:#42bd56">电影</router-link>
    <router-link to="/music/musiclist" >音乐</router-link>
    <router-link to="/piclist">美图</router-link>
    <router-link to="/login">我</router-link>   
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