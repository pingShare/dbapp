<template>
<ul id="footer"> <!-- style="color:#42bd56" -->
     <router-link v-for="(item,index) in menu" :key="index" :to="item.path"
     :class="{active:index==nowIndex}" @click.native="addColor(index)">
     <li @click="addd(index)">
           {{item.content}}
           {{nowIndex}}
     </li>    
     </router-link>
</ul>

</template>
<script>
/*设置一个全局变量，用它表示当前点击的是第几个，它和哪个索引相同，哪个有这个样式*/

export default {
  data() {
    return {
      nowIndex: 0, //当前选中的元素下标
      menu: [
        {
          path: "/index-now",
          content: "电影"
        },
        {
          path: "/music/musiclist",
          content: "音乐"
        },
        {
          path: "/piclist",
          content: "美图"
        },
        {
          path: "/login",
          content: "我"
        }
      ]
    };
  },
  methods: {
    addColor(index) {
      this.nowIndex = index;
     /*   console.log("a里的this.nowIndex:"+this.nowIndex);
     console.log("a里的index:"+index) */
    },
  addd(index){
/*     console.log("---");
     console.log("li里的this.nowIndex:"+this.nowIndex);
     console.log("li里的index:"+index);   */    
  }
  }
};
</script>

<style scoped>
.active {
  color: #42bd56;
}
#footer {
  height: 50px;
  position: fixed;
  bottom: 0;
  width: 100%;
  line-height: 50px;
  color: #ffffff;
  border-top: 1px solid #42bd56;
  display: flex;
}
ul {
  display: flex;
}
a {
  color: black;
  flex-grow: 0.25;
  display: inline-block;
  width: 100%;
  height: 100%;
}
/*  li {
  width: 100%;
  height: 100%;
} */
</style>