<template>
<div>
<commonHeader></commonHeader>
    <ul class="index">
        <router-link to="/index-now">
            <li>正在上映</li>
        </router-link>
       <router-link to="/index-fut">
             <li>即将上映</li>
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
</style>
