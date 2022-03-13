<template>
      <div class="container-body">
        <div class="body-row">
             <kakaoMap></kakaoMap>
        </div>
        <div class="body-row">뉴스</div>
        <div class="body-row">차트</div>
    </div>
</template>

<script>
import kakaoMap from './kakaoMap.vue'

import { getCurrentInstance,onMounted } from 'vue'
export default {
    components:{
        kakaoMap
    },
    setup(){
        const {proxy} = getCurrentInstance(); 
        const url = '/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTrade';
        const getData = () => {
            proxy.$callAPI(`${url}?LAWD_CD=11110&DEAL_YMD=${proxy.$today}&serviceKey=6vIv%2BtwL%2B8QgptGxLCDaSzu28IZz8nWAXVCIy3hTtgGaTGy4UZvWwzBHpcmG%2BMcoCZ8CNoOM0NBO5YLKd0e5Jg%3D%3D`,'get')
            .then((res)=>{
                console.log(res)
            })
            .catch((err)=>{
                console.log(err)
            })
        }

        onMounted(()=>{
            getData()
        })

    }
}
</script>

<style scoped>
.container-body{
  height: 100%;
  overflow: scroll;
}
.body-row { 
  width: 500px;
  height: 500px; 
  margin: 30px;
  margin:0 auto;
  text-align: center;
  }

</style>