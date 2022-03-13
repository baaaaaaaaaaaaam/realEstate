<template>
  <div class="container">
    <div class="container-header">
      <div>
        <ul>
          <li :class="{active : at ==''}"><router-link to="/" @click="move('')">홈</router-link></li>
          <li :class="{active : at =='sale'}"><router-link to="/sale" @click="move('sale')">아파트 매매</router-link></li>
          <li :class="{active : at =='news'}"><router-link to="/news" @click="move('news')">부동산 뉴스</router-link></li>
          <li :class="{active : at =='statistic'}"><router-link to="/statistic" @click="move('statistic')">통계</router-link></li>
        </ul>
      </div>
      <div class="title">
        <span>내집을 찾아줘</span>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { ref  ,onMounted } from 'vue'
export default {
  setup(){
    const at = ref(window.location.pathname.split('/')[1])
    onMounted(()=>{
      at.value=window.location.pathname.split('/')[1];
    })
    const move = (text) =>{
      at.value=text
    }
    return{at , move}
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container{
  width: 100%;
  height: 760px;
}
.container-header { 
  height: 100px; 
  margin: 30px;
  }
.container-header>div { 
  width: 400px;
  height: 50px;
  margin:0 auto;
}
.container-header> .title { 
  text-align: center;
  font-size: xx-large
  }
.container-header >div>ul >li{
   list-style:none;
   float: left;
   padding: 0px 10px 0px 10px;
   }

a{text-decoration:none; color:#333;}
a:hover{
  font-size: 1.3em;
  color: cadetblue;
}
.active{
  font-size: 1.3em;
}
</style>
