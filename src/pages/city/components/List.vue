<template>
  <div class="list" ref="wrapper">
      <div>
        <div class="area">
            <div class="title border-topbottom">当前城市</div>
            <div class="button-list">
                <div class="button-wrapper">
                    <div class="button">{{this.currentCity}}</div>
                </div>
            </div>
        </div>
        <div class="area">
            <div class="title border-topbottom">热门城市</div>
            <div class="button-list">
                <div
                    class="button-wrapper"
                    v-for="item of hotCities"
                    :key="item.id"
                    @click="handleCityClick(item.name)"
                >
                    <div class="button">{{item.name}}</div>
                </div>
            </div>
        </div>

        <div class="area" v-for="(items,key) of cities" :key="key" :ref="key">
            <div class="title border-topbottom">{{key}}</div>
            <div class="item-list" >
                <div class="item border-topbottom" v-for="item of items" :key="item.id"   @click="handleCityClick(item.name)">
                    {{item.name}}
                </div>
            </div>
        </div>
      </div>
  </div>
</template>


<script>
import Bscroll from 'better-scroll'
import { mapState,mapMutations, mapGetters } from 'vuex'
export default {
    name:'CityList',
    props:{
        cities:Object,
        hotCities:Array,
        letter:String
    },

    methods: {
        handleCityClick (city){
            //console.log(city)
            //this.$store.dispatch('changeCity', city)
            this.changeCity(city)
            this.$router.push('/')
        },
        ...mapMutations(['changeCity']),

    },
    //侦听器
    watch: {
        letter () {
            const element = this.$refs[this.letter][0]
            //console.log(this.letter)
            if(this.letter){
                this.scroll.scrollToElement(element)
            }
        }
    },
    mounted () {
        this.scroll = new Bscroll(this.$refs.wrapper)
    },
    computed: {
        ...mapState({
            currentCity: 'city'
        }),

    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .border-topbottom
        &:before
            border-color #777
        &:after
            border-color #777
    .list
        overflow hidden
        position absolute
        top 1.58rem
        left 0
        right 0
        bottom 0
        .title
            line-height .54rem
            background #eee
            padding-left .2rem
            color #666
            font-size .26rem
        .button-list
            overflow hidden
            padding .1rem .6rem .1rem .1rem
            .button-wrapper
                width 33.33%
                float left
                .button
                    margin .1rem
                    padding .1rem 0
                    text-align center
                    border .02rem solid #ccc
                    border-radius .05rem
        .item-list
            .item
                line-height .54rem
                color #666
                padding 0 0 0 .2rem
</style>
