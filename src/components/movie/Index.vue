<template>
<div>
<commonHeader></commonHeader>
    <ul class="index">
        <router-link to="/index-now">
            <li @click="changeColor($event)" :data-flag="true" :class="{color:isTrue}">正在上映</li>
        </router-link>
       <router-link to="/index-fut">
             <li @click="changeColor($event)" :class="{color:isTrue}">即将上映</li>
       </router-link>
    </ul>
    <router-view></router-view>
<commonFooter></commonFooter>
</div> 
</template>

<script>
import commonHeader from "../Header"
import commonFooter from "../Footer"
export default{
    data(){
        return{
            bro:[], //其他的兄弟元素
            children:[],  //父元素的所有子元素
            isTrue:true,
           // isRight:false
        }
    },
    methods:{
        changeColor(event){
            //console.log(event.target);
            this.isTrue = !this.isTrue;  //???
            //获取当前点击元素的兄弟节点
            this.children = event.currentTarget.parentNode.children;
            for(var i=0;i<this.children.length;i++){
                if(this.children[i] != event.currentTarget){
                    bro.push(this.children[i]);
                }
                return this.bro;
            }
            for(var i=0; i<this.children.length;i++){
                this.bro[i].isTrue = !this.bro[i].isTrue;
            }
           
      },
       
    },
    components:{
        commonHeader,
        commonFooter
    }
}
</script>

<style scoped>
.index{
    /* margin-top: 65px; */
    height:50px;
    font-size: 18px;
    color:#777;
    line-height: 50px; 
    /* margin-bottom: 55px; */
    position:fixed;
    top:65px;
    left:0;
    right:0;
}
li{
    width:50%;
    color:#777;
    float:left;
}
.color{
    color:#42bd56;
}
</style>
