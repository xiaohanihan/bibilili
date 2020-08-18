<template>
  <div class="top-container">
    <div style="flex: 1 1 20%"></div>
    <div style="flex: 1 1 60%">{{title}}</div>

    <div style="flex: 1 1 20%;">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: ['title'],
}
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
  div {
    display: flex;
    justify-content: center;
  }
}
</style>