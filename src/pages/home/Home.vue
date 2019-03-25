<template>
  <div>
    <home-header ></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList ="iconList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList = "weekendList"></home-weekend>
  </div>

</template>


<script>
import { mapState } from 'vuex'
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
export default {
  name:'Home',
  data () {
      return {
           swiperList:[],
           iconList:[],
           recommendList:[],
           weekendList:[],
           lastCity:''
      }
  },
  components:{
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  methods :{
      getHomeInfo (){
          axios.get('/api/index.json?city='+this.city)    //模拟数据
            .then(this.getHomeInfoSucc)
      },
      getHomeInfoSucc (res){
          res = res.data
          if(res.ret && res.data){
              const data = res.data

              this.swiperList = data.swiperList
              this.iconList = data.iconList
              this.recommendList = data.recommendList
              this.weekendList = data.weekendList
          }
          //console.log (res)
      }
  },
  mounted (){
      this.lastCity = this.city
      this.getHomeInfo ()
  },
  //keep-alive新增的生命周期函数
  activated (){
      if (this.lastCity != this.city){
          this.getHomeInfo ()
      }
  },
  computed : {
      ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
     body
        background #fff
</style>
