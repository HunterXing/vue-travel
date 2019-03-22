<template>
    <div class="icons">
         <swiper >
             <swiper-slide v-for="( page,index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class='icon-img'>
                        <img class="icon-img-content" :src="item.imgUrl" >
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
             </swiper-slide>
         </swiper>
    </div>
</template>

<script>
export default {
    name:'HomeIcons',
    data (){
        return {
              iconList: [
            {
                id : '0001',
                imgUrl: '//img.alicdn.com/tps/TB1Md6KPVXXXXamXXXXXXXXXXXX-200-200.png_200x200q90.jpg_.webp',
                desc : '景点门票景点门票'
            },
            {
                id : '0002',
                imgUrl: '//img.alicdn.com/tps/TB1Md6KPVXXXXamXXXXXXXXXXXX-200-200.png_200x200q90.jpg_.webp',
                desc : '滑雪季'
            },
            {
                id : '0003',
                imgUrl: '//img.alicdn.com/tps/TB1Md6KPVXXXXamXXXXXXXXXXXX-200-200.png_200x200q90.jpg_.webp',
                desc : '泡温泉'
            },
            {
                id : '0004',
                imgUrl: '//img.alicdn.com/tps/TB1Md6KPVXXXXamXXXXXXXXXXXX-200-200.png_200x200q90.jpg_.webp',
                desc : '景点门票'
            },
            {
                id : '0005',
                imgUrl: '//img.alicdn.com/tps/TB1Md6KPVXXXXamXXXXXXXXXXXX-200-200.png_200x200q90.jpg_.webp',
                desc : '滑雪季'
            },
            {
                id : '0006',
                imgUrl: '//img.alicdn.com/tps/TB1Md6KPVXXXXamXXXXXXXXXXXX-200-200.png_200x200q90.jpg_.webp',
                desc : '泡温泉'
            },
            {
                id : '0007',
                imgUrl: '//img.alicdn.com/tps/TB1Md6KPVXXXXamXXXXXXXXXXXX-200-200.png_200x200q90.jpg_.webp',
                desc : '景点门票'
            },
            {
                id : '0008',
                imgUrl: '//img.alicdn.com/tps/TB1Md6KPVXXXXamXXXXXXXXXXXX-200-200.png_200x200q90.jpg_.webp',
                desc : '滑雪季'
            },
            {
                id : '0009',
                imgUrl: '//img.alicdn.com/tps/TB1Md6KPVXXXXamXXXXXXXXXXXX-200-200.png_200x200q90.jpg_.webp',
                desc : '一日游'
            },
        ]
        }

    },
    //计算属性 自带缓存
    computed :{
        pages () {
            const pages = []
            this.iconList.forEach((item,index) => {
                const page = Math.floor(index/8)  //向下取整
                if(!pages[page]){                  //如果不存在
                    pages[page] = []
                }
                pages[page].push(item) //将一维数组拆成二维数组
            })
            return pages
        }

    }
}
</script>

<style lang="stylus">
    @import '~styles/varibles.styl'
    @import '~styles/mixins.styl'
    .icons >>> .swiper-container
         height 0
         padding-bottom 50%
    .icons
         overflow hidden
         height 0
         padding-bottom 50%
    .icon
        position relative
        overflow hidden
        float left
        width 25%
        height 0
        padding-bottom 25%

        .icon-img
            position absolute
            top 0
            left 0
            right 0
            bottom .44rem
            box-sizing border-box
            border .1rem

            .icon-img-content
                display block
                margin 0 auto
                height 100%
        .icon-desc
            position absolute
            bottom  0
            left 0
            right 0
            height .44rem
            line-height .44rem
            color $darkTextCorlor
            text-align center
            ellipsis()



</style>
