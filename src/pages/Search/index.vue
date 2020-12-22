<template>
  <div>
    <h2>search</h2>
    <h3>params.keyWord:{{keyWord}}</h3>
    <h3>query.keyWord:{{keyWord2}}</h3>
  </div>
</template>

<script>
export default {
  name: 'Search',
  props:['keyWord','keyWord2']
}
</script>

<style lang="less" scoped>
    
</style>
