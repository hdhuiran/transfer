<template>
  <h1 class="list-title">{{ Title }}</h1>
</template>
<!-- 记得要加setup语法糖 -->
<script setup>
const props = defineProps({
  Title: {
    type: String,
    default: "列表",
  },
});
</script>

<style lang="scss">
.list-title {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 38px;
  font-weight: normal;
  margin: 0;
  color: #666;
  border-bottom: 1px solid #ddd;
  background-color: #efefef;
  font-size: 14px;
}
</style>
