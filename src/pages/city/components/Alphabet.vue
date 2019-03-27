<template>

    <ul class="list"  >
        <li class="item"
            :ref="item"
            v-for="(item) of letters"
            :key="item"
            @click="handleLetterClick"
            @touchstart.prevent="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
        >
        {{ item }}
        </li>
    </ul>
</template>

<script>
export default {
  name:'CityAlphabet',
  props:{
      cities : Object
  },
  data  (){
      return {
          touchStatus : false,
          startY: 0,
          timer: null
      }
  },
  updated (){
      this.startY = this.$refs['A'][0].offsetTop
  },
  computed :{
      letters() {
          const letters = []
          for (let i in this.cities) {
              letters.push(i)
          }
          //返回数组  ['A','B','C'...]
          return letters
      }
  },
  methods :{
      handleLetterClick (e){
          let alphabet = e.target.innerText
          //console.log(alphabet)
          this.$emit('change',alphabet)
      },
      handleTouchStart (){
          this.touchStatus = true
      },
      handleTouchMove (e){
          if(this.touchStatus){
              if(this.timer){
                  clearTimeout(this.timer)
              }
              this.timer = setTimeout( () => {
                     //计算A字母距离顶部的高度
                    const startY = this.startY
                    //计算手指距离顶部高度
                    const touchY = e.touches[0].clientY - 79
                    //计算手指所处字母的下标位置
                    const index = Math.floor((touchY - startY)/20)
                    //console.log(index)

                    if(index >= 0 && index < this.letters.length){
                            this.$emit('change',this.letters[index])
                    }
              },16)

          }
      },
      handleTouchEnd (){
          this.touchStatus = false
      },

  }
}
</script>

<style lang="stylus" scoped>
     @import '~styles/varibles.styl'
    .list
        display flex
        flex-direction column
        justify-content center
        position absolute
        top 1.58rem
        right 0
        bottom 0
        width .4rem

        .item
            text-align center
            line-height .4rem
            color $bg-color


</style>
