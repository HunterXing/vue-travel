<template>
  <div class="header">
      <router-link tag="div" to="/"  class="header-abs" v-show="showAbs">
        <span class="iconfont header-abs-back">&#xe6a4;</span>
      </router-link>
      <router-link tag="div" to="/" class="header-fixed" v-show="showFixed" :style="styleOptions">
          <span class="iconfont header-fixed-back">&#xe6a4;</span>
          景点详情
      </router-link>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data (){
      return {
          showAbs: true,
          styleOptions: {
            opacity: 0
          }
      }
  },
  computed : {
      showFixed (){
          return  !this.showAbs
      }
  },
   methods: {
    scrollHeader () {
        //console.log(document.documentElement.scrollTop)
        const top = document.documentElement.scrollTop
        if (top > 0) {
            let t = top / 100
            if (t > 1) {
            t = 1
            }
            this.styleOptions.opacity = t
            this.showAbs = false
        } else {
            this.showAbs = true
        }
       // console.log('scoll')
    }
  },
  mounted () {
    document.addEventListener('scroll', this.scrollHeader)

  },
  deactivated () {
    document.removeEventListener('scroll', this.scrollHeader)
  }

}
</script>

<style scoped lang="stylus">
 @import '~styles/varibles.styl';

    .header-abs
        position absolute
        left .2rem
        top .2rem
        width .8rem
        height .8rem
        line-height .8rem
        border-radius .4rem
        background rgba(0,0,0,.8)
        text-align  center
        .header-abs-back
            color #fff
            font-size .4rem
     .header-fixed
        position fixed
        top 0
        left 0
        right 0

        height $HeaderHeight
        line-height $HeaderHeight
        text-align center
        color #ffffff
        background $bg-color
        font-size .32rem
        .header-fixed-back
            position absolute
            width .64rem
            top 0
            left 0
            text-align center
            font-size .4rem
            color #ffffff
</style>
