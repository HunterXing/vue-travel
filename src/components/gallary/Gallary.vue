<template>
  <div class="container" @click = "handleGalleryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions" >
        <!-- slides -->
        <swiper-slide v-for="(item,index) in imgs" :key="index">
          <img class="gallery-img" :src="item">
        </swiper-slide>

        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallery',
  data () {
    return {
      swiperOptions: {
       pagination:'.swiper-pagination',
       paginationType: 'fraction'
      }
    }
  },
  props: {
    imgs: {
        type: Array,
        default () {
            return []
        }
    }

  },
//   computed: {
//     swiper () {
//       return this.$refs.mySwiper.swiper
//     }
//   },
//   watch: {
//     currentImg () {
//       this.swiper.slideTo(this.currentImg, 0, false)
//     }
//   },
  methods: {
    handleGalleryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped lang="stylus">
  .container >>> .swiper-container
    overflow inherit
  .container
    display flex
    flex-direction column
    justify-content: center
    background-color #000
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    z-index 999
    .wrapper
      padding-bottom 100%
      height 0
      width 100%
      .gallery-img
        width 100%
      .swiper-pagination
        color #fff
        bottom -1 rem
</style>
