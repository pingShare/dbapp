<template>
<div>
<commonHeader></commonHeader>
    <ul class="index">
        <li v-for="(item,index) in cont" :key="index" 
         @click="changeColor(index)">        
          <router-link :to="item.path" :class="{select:index==thisIndex}" >
              {{item.name}}
          </router-link>
        </li>
    </ul>
    <router-view></router-view>
<commonFooter></commonFooter>
</div> 
</template>

<script>
import commonHeader from "../Header";
import commonFooter from "../Footer";
export default {
  data() {
    return {
      bro: [], //其他的兄弟元素
      children: [], //父元素的所有子元素
      thisIndex:0,
      cont:[{
        path:"/index-now",
        name:"正在上映"
      },{
        path:"/index-fut",
        name:"即将上映"
      }]
    };
  },
  methods: {
    changeColor(index) {
         this.thisIndex = index;
    }
  },
  components: {
    commonHeader,
    commonFooter
  }
};
</script>

<style scoped>
.index {
  /* margin-top: 65px; */
  height: 50px;
  font-size: 18px;
  color: #777;
  line-height: 50px;
  /* margin-bottom: 55px; */
  position: fixed;
  top: 65px;
  left: 0;
  right: 0;
}
li a{
  width: 50%;
  color: #777;
  float: left;
}
.select{
  color: #42bd56;
}
</style>
