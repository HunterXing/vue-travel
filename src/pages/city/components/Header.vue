<template>
  <div class="header">
      <router-link to="/">
         <span class="iconfont back-icon">&#xe6a4;</span>
      </router-link>

      城市选择
  </div>
</template>


<script>
export default {
  name:'CityHeader',
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .header
        position relative
        overflow hidden
        height $HeaderHeight
        line-height $HeaderHeight
        text-align center
        color #ffffff
        background $bg-color
        font-size .32rem
        .back-icon
            position absolute
            width .64rem
            top 0
            left 0
            text-align center
            font-size .4rem
            color #ffffff
</style>
