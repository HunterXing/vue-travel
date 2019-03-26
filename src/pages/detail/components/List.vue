<template>
  <div class="list">
    <div class="item" v-for="(item,index) of list" :key ="index">
        <div class="item-title border-bottom">
            <span class="item-title-icon"></span>
            {{item.title}}
        </div>
        <div v-if="item.children" class="item-children">
            <detail-list :list="item.children"></detail-list>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
      list: Array
  },
  name: 'DetailList',


}
</script>

<style scoped lang="stylus">
 @import '~styles/varibles.styl'
    .item-title
        line-height .8rem
        font-size .32rem
        padding 0 .2rem
        .item-title-icon
            display: inline-block;
            width: .36rem;
            height: .36rem;
            background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
            margin-right: .1rem;
            background-size: .4rem 3rem;
            position relative
            left .1rem
            top .06rem
    .item-children
        padding 0 .2rem
</style>
