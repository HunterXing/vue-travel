<template>
  <div>
    <detail-banner
        :sightName="sightName"
        :bannerImg="bannerImg"
        :gallaryImgs="gallaryImgs"
    >
    </detail-banner>
    <detail-header></detail-header>
    <detail-list :list="list"></detail-list>
    <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from "./components/Banner";
import DetailHeader from "./components/Header";
import DetailList from "./components/List";
import axios from "axios"
export default {
  name: "detail",
  components: {
    DetailHeader,
    DetailBanner,
    DetailList
  },
  data() {
    return {
      sightName:'',
      bannerImg:'',
      gallaryImgs:[],


      list: [

      ]
    };
  },
  methods :{
      getDetailInfo (){
          //axios.get('/api/detail.json?id=' + this.$route.params.id) //获取id值 并且发送ajax请求
          axios.get('/api/detail.json',{
              params :{
                  id :this.$route.params.id
              }
          }).then(this.handleGetDataSucc) //获取id值 并且发送ajax请求    写法二
      },
      handleGetDataSucc (res) {
          res = res.data
          if(res.ret && res.data){
            const data = res.data
            console.log(data)
            this.sightName = data.sightName
            this.bannerImg = data.bannerImg
            this.gallaryImgs = data.gallaryImgs
            this.list = data.categoryList
          }
      }
  },
  mounted (){
      this.getDetailInfo()
  },
  
};
</script>

<style lang="stylus" scoped>
 .content
        height  50rem
</style>
