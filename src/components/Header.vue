<template>
<div class="header">
      <!-- <h1>header</h1> -->
      <router-link to="/">
        <img src="../assets/img/douban.png" alt="">
      </router-link>
      <!-- <div class="seacontent">
          搜索电影
      </div> -->
      <h2>豆半小站</h2>
</div>

</template>
<script>
  
</script>

<style scoped>
.header{
    height:60px;
    /* background:grey; */
    position: fixed;
    top: 0;
    width: 100%;
    line-height: 60px;
    color: #ffffff;
    display:flex;
border-bottom: 1px solid #42bd56;
}
img{
    width:40px; /* 百分比宽度由外层父元素决定  */
    height:40px;
    float:left;
    margin-top: 0.2rem;
    margin-left:0.2rem;
    margin-right:0.18rem;
}
/* .seacontent{
    width: 80%;
    background-color: #eee;
    border-radius: 5px;
    margin:0.18rem 0.3rem;
    height:35px;
    color:#777;
    font-size:20px;
    line-height: 35px;
} */
.header h2{
    color:#777;
  margin: 0 auto;
}
</style>
