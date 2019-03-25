<template>
  <div>
    <div class="banner" @click = "handleBannerClick">
      <img
        class="banner-img"
        src="//img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg"
      >
      <div class="banner-info">
        <div class="banner-title">东方宫殿建筑代表，世界宫殿建筑典范</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe650;</span>39
        </div>
      </div>
    </div>
    <common-gallary :imgs="imgs" v-if="showGallary" @close="handleCloseGallary" ></common-gallary>
  </div>
</template>

<script>
import CommonGallary from "common/gallary/Gallary";
export default {
  name: "DetailBanner",
  components: {
    CommonGallary
  },
  data () {
      return {
          imgs:['http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg'],
          showGallary:false
     }
  },
  methods :{
      handleBannerClick (){
          return this.showGallary = true
      },
      handleCloseGallary (){
          return this.showGallary = false
      }
  }
};
</script>

<style lang="stylus" scoped>
    @import '~styles/mixins.styl'
    .banner
        overflow hidden
        height 0
        padding-bottom 55%
        position relative
        .banner-img
            width 100%
        .banner-info
            display flex
            position absolute
            left 0
            right 0
            bottom 0
            line-height  .6rem
            color #fff
            background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0 ,0.8))
            .banner-title
                flex 1
                font-size .32rem
                padding 0 .2rem
                ellipsis()
            .banner-number
                margin-top .14rem
                padding 0 .4rem
                line-height  .32rem
                height .32rem
                border-radius  .2rem
                background rgba(0,0,0,.8)
                font-size .24rem
                .banner-icon
                    font-size .24rem

</style>
