<template>
<div class="testPage">
      <el-button type="primary" @click="to">第一次跳转</el-button>
</div>
</template>

<script>
export default {
  name: 'TestPage',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
