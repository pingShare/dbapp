<template>
  <div class="con" id="login">
      <p><input name="username" v-model="name" type="text" placeholder="请输入用户名"></p> 
      <p><input name="pwd" v-model="pwd" type="password" placeholder="请输入密码"></p>
      <p v-if="isShow">*请输入用户名或密码</p>
      <p>若注册不成功可用aa测试，账号密码相同</p>
      <p><input type="submit" @click="login" value="登录"></p> <!--@click="login"-->
      <router-link to="/reg">还未注册？点击去注册</router-link>
  </div>
</template>

<script>
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
                Axios.get("http://127.0.0.1:80/appci/index.php/user/login",{params:data})                
              .then(res=>{            
                     if(res.data=='error'){
                        alert('用户名或密码错误');
                    }
                    else{
                        alert('登录成功');
                        this.$cookie.set('name',this.name);
                        console.log()                          
                        this.$router.push('/logined');
                    } 
                }).catch();
            }
        } 
    }

}
</script>

<style scoped>
#login p{
    margin: 0.5rem 0;
    height: 0.86rem;
}
input{
    width:4rem;
    height: 0.8rem;
}
</style>
