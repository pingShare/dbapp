<template>
  <div  class="con" id="login">
      <p><input type="text" placeholder="请输入用户名"></p> 
      <p><input type="password" placeholder="请输入密码"></p>
      <p><input type="submit" value="注册" @click="register"></p>
  </div>
</template>

<script>
import Axios from 'axios'
import VueResource from 'vue-resource'
export default{
    methods:{
        register(){
            console.log("reginster");
        }
    }
}
</script>

<style>

</style>
