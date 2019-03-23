<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="swiperList.length">
      <!-- slides -->
      <swiper-slide v-for="(item,index) of swiperList" :key="index">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>

      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>


<script>
export default {
  name: "HomeSwiper",
  props:{
      swiperList:Array
  },
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination", //小点点指示
        loop: true ,//支持循环轮播
        //设定初始化时slide的索引
        initialSlide: 0,
        //自动播放
       

      }
    };
  }
};
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active {
  background: #fff;
}

.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;

  .swiper-img {
    width: 100%;
  }
}
</style>
