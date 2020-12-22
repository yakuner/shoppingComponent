<template>
  <div>
    <!-- 商品分类导航 -->
    <ShopingTypeNav/>

    <!--列表-->
    <List/>

    <!--今日推荐-->
    <TodayRecommend/>

    <!-- 商品排行 -->
    <Rank/>

    <!-- 猜你喜欢 -->
    <YouLike/>

    <!--楼层-->
    <Floor/>

    <!--楼层-->
    <Floor/>

    <!--商标-->
    <Brand/>
  </div>
</template>

<script>
import ShopingTypeNav from '../Home/ShopingTypeNav'
import List from '../Home/List'
import TodayRecommend from '../Home/TodayRecommend'
import Rank from '../Home/Rank'
import YouLike from '../Home/YouLike'
import Floor from '../Home/Floor'
import Brand from '../Home/Brand'


export default {
  name: "Home",
  components:{
    ShopingTypeNav,
    List,
    TodayRecommend,
    Rank,
    YouLike,
    Floor,
    Brand
  }
};
</script>

<style lang="less" scoped>
</style>
