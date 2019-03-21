<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
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
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination", //小点点指示
        loop: true //支持循环轮播
      },
      swiperList: [
        {
          id: "001",
          imgUrl: "//img3.mukewang.com/szimg/5c91a1590858617209000300.jpg"
        },
        {
          id: "002",
          imgUrl: "//img4.mukewang.com/szimg/5c886e560874bfb209000300.jpg"
        }
      ]
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
  padding-bottom: 44%;

  .swiper-img {
    width: 100%;
  }
}
</style>
