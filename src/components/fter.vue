<template>
<ul id="footer" ref="ul"> <!-- style="color:#42bd56" -->
    <router-link to="/index-now"><li @click="selectStyle($emit)">电影</li></router-link>
    <router-link to="/music/musiclist" @click="selectStyle($emit)"><li>音乐</li></router-link>
    <router-link to="/piclist" @click="selectStyle($emit)"><li>美图</li></router-link>
    <router-link to="/login" @click="selectStyle($emit)"><li>我</li></router-link>
</ul>

</template>
<script>
/*设置一个全局变量，用它表示当前点击的是第几个，它和哪个索引相同，哪个有这个样式*/

export default {
  data() {
    return {
      select: 0 //当前选中的元素下标
    };
  },
  methods: {
    selectStyle() {
      var oFooter = document.getElementById("footer");
      var aLi = oFooter.getElementsByTagName("li");
      //console.log(e);
    
        console.log(aLi);
        (function(){ 
                   for (var i = 0; i < aLi.length; i++) {
           aLi[i].setAttribute("index", i);
          // select = aLi[i].getAttribute("index");
           console.log(aLi[i].getAttribute("index"));
      }   })();
     
    }

    /*  var oA = document.querySelector("a:nth-child(" + ( Number(this.select) +  (Number(1))) + ")");
      console.log("a:nth-child(" + (Number(1) + Number(this.select)) + ")");
      oA.className = "green";*/
  },
  mounted() {
    //console.log(this.$ref);
    /*  for (let i = 0; i < aLi.length; i++) {
      // console.log(aLi[i]);
      aLi[i].setAttribute("index", i);
     // aLi[i].onclick = function() {
        //  console.log(aLi);
        // console.log("a:nth-child("+this.select+")");
        //oA.style.color = "#42bd56";
        //oA.className = "green";
     // };
    } */
    // var oA = document.querySelector("a:nth-child("+this.select+")");
    // console.log("a:nth-child("+this.select+")");
    //  console.log(oLi);
  }
};

/*  // console.log(898);
     // aLi[i].index=i;console.log(aLi[i].index);
       /*  aLi[i].onclick=function(){
            console.log(435);
        } 
    }*/
/*   var a = document.getElementsByTagName("a");
      var aLi = document.getElementsByTagName("li");
    a.onclick =function() { 
        for(var i=0;i<aLi.length;i++){
           
        }
    } */
</script>

<style scoped>
/* a:nth-child(3){
  color: #42bd56;
} */
.green {
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
  /* width:25%; */
  color: black;
  /* float:left; */
  flex-grow: 0.25;
  display: inline-block;
}
li:active,
/* li:visited {
  color: #42bd56;
} */ li {
  widows: 100%;
  height: 100%;
}
</style>