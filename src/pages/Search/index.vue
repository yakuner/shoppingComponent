<template>
  <div>
    <div>Search</div>
    <h2>params:{{ keyWord }}</h2>
    <h2>query:{{ keyWord2 }}</h2>
  </div>
</template>

<script>
export default {
  name: "Search",
  props:['keyWord','keyWord2']
};
</script>

<style lang="less" scoped>
</style>
