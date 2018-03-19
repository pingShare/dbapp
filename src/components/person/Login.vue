<template>
  <div class="con" id="login">
      <p><input name="email" type="text" placeholder="请输入用户名" v-model="name"></p> 
      <p><input name="pwd" type="password" placeholder="请输入密码" v-model="pwd"></p>
      <p v-if="isShow">*请输入用户名或密码</p>
      <p><input type="submit" value="登录" @click="login"></p>
      <router-link to="/reg">还未注册？点击去注册</router-link>
  </div>
</template>

<script>
//CI后台  http://localhost:8081/blog/user/do_login
import qs from 'qs'
import VueResource from 'vue-resource'
import Axios from 'axios'
export default{
    data(){
        return{
           name:"",
           pwd:"",
           isShow:false
        } 
    },
    methods:{
        login(){
            if(this.name==""||this.pwd==""){
                this.isShow = true;
            }
            else{
                this.isShow = false;
                let data={"name":this.name,"pwd":this.pwd};
                Axios.post("http://localhost:8081/blog/user/login",qs.stringify(data))
                .then(res=>{
                    console.log(res);
                    if(res.data==-1){
                        alert('该用户不存在');
                    }
                    else{
                        alert('登录成功');
                        this.$router.push('/logined');
                    }
                }).catch();
            }
        }
    }
}
</script>

<style>
#login p{
    margin: 0.5rem 0;
    height: 0.86rem;
}
input{
    width:4rem;
    height: 0.8rem;
}
</style>
