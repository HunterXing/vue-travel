<template>
  <div>
      <city-header></city-header>
      <city-search></city-search>
      <city-list></city-list>
  </div>
</template>


<script>
import CityHeader from './components/Header.vue'
import CitySearch from './components/Search.vue'
import CityList from './components/List.vue'
export default {
  name:'City',
  components :{
      CityHeader,
      CitySearch,
      CityList
  }
}
</script>

<style lang="stylus" scoped>
     body
        background red
</style>
