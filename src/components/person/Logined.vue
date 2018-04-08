<template>
  <div class="con" id="login">
     <p id="cu_user">当前用户：{{current_user}}|<span @click="exit_cu()">退出</span></p>
      <ul id="mylist">
        <li>我的电影</li>
        <li>我的音乐</li>
        <li>我的图片</li>
      </ul>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        current_user:""
      }
    },
    methods:{

    },
    mounted(){
      this.current_user = this.$cookie.get('name');
    }
  }
</script>

<style scoped>
#login p{
    margin: 0.5rem 0;
    height: 0.86rem;
}
#login #cu_user{
  float:right;
  margin-top: 10px;
  margin-right: 20px;
}

#mylist{
  /* height: 2rem;
  border:1px solid; */
  clear: both;
}
#mylist li{
  height: 0.5rem;
  border:1px solid rgb(235, 233, 233);
  text-align:left;
  padding: 10px 25px;
  line-height: 0.5rem;
}
#mylist li:hover{
  color: #42bd56;
}
</style>
