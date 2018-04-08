<template>
  <div  class="con" id="login">
      <p><input name="reg_name" v-model="reg_name" type="text" placeholder="请输入用户名"></p> 
      <p><input name="reg_pwd" v-model="reg_pwd" type="password" placeholder="请输入密码"></p>
      <p><input type="submit" value="注册" @click="register"></p>
  </div>
</template>

<script>
import Axios from "axios";
import VueResource from "vue-resource";
export default {
  data() {
    return {
      reg_name: "",
      reg_pwd: ""
    };
  },
  methods: {
    register() {
      let data = { reg_name: this.reg_name, reg_pwd: this.reg_pwd };
      Axios.get("http://localhost/appci/index.php/user/reg", { params: data })
        .then(res => {
          //console.log(res);
          if (res) {
           // alert("用户名或密码错误");
         // } else {
            alert("登录成功");
            this.$router.push("/logined");
          }
        })
        .catch();
    }
  }
};
</script>

<style>
input{
    width:4rem;
    height: 0.8rem;
}
</style>
