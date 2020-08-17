<template>
  <div class="top-container">
    <div></div>
    <div>{{title}}</div>
    <div></div>
  </div>
</template>
<script>
export default {
  props: ["title"],
};
</script>
<style lang="less" scoped>
.top-container {
  width: 100%;
  height: 12.5vw;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 4.444vw;
}
</style>