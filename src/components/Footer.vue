<template>
<ul id="footer"> <!-- style="color:#42bd56" -->
    <li v-for="(item,index) in menu" :key="index" >
      <router-link :to="item.path">
        {{item.content}}
      </router-link>

    </li>
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
          content: "图片"
        },
        {
          path: "/login",
          content: "我"
        }
      ]
    };
  },
};
</script>

<style scoped>

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
#footer {
  display: flex;
}

#footer li{
  flex-grow: 1;
  color: black;
}
a {
  color: black;
  flex-grow: 0.25;
  display: inline-block;
  width: 100%;
  height: 100%;
}

#footer a.router-link-active{
  color: #42bd56;
}
/*  li {
  width: 100%;
  height: 100%;
} */
</style>