<template>
  <div class="con" id="login">
      <p><input name="username" v-model="userName" type="text" placeholder="请输入用户名"></p> 
      <p><input name="pwd" v-model="pwd" type="password" placeholder="请输入密码"></p>
      <p v-if="isShow">*请输入用户名或密码</p>
      <p><input type="submit" @click="addUser" value="注册"></p> <!--@click="login"-->
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
           userName:"",
           pwd:"",
           isShow:false
        } 
    },
    methods:{
        addUser(){
            var name = this.userName;
            var pwd = this.pwd;
            Axios.post('/api/user/addUser',{
                username:name,
                pwd:pwd
            },{}).then(response => {
                console.log(response);
            })
        }
    }
  //  methods:{
       /*  login(){
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
        } */
    //}

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
