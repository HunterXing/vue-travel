<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe6a4;</span>
    </div>
    <div class="header-input ">
      <span class="iconfont ">&#xe609;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right iconfont">
      城市
      <span class="iconfont ">&#xe6aa;</span>
    </div>
  </div>
</template>


<script>
export default {
  name: "HomeHeader"
};
</script>

<style lang="stylus" scoped>
// @import '../../../assets/styles/varibles.styl'
// @import '~@/assets/styles/varibles.styl'
@import '~styles/varibles.styl'
.header {
  display: flex;
  background: $bg-color;
  line-height: 0.86rem;
  color: #fff;

  .header-left {
    width: 0.64rem;
    float: left;
  }

  .back-icon {
      display block
      font-size .4rem
      text-align center
  }

  .header-input {
    padding-left .2rem
    color: #ccc;
    flex: 1;
    background: #fff;
    border-radius: 0.1rem;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    height: 0.64rem;
    line-height: 0.64rem;
  }

  .header-right {
    width: 1.24rem;
    float: right;
    text-align: center;
  }
}
</style>

