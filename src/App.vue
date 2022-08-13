<script setup>
// 单独接入这一个组件
import Transfer from "../modules/hdh-ui/Transfer/Transfer";
const data = [
  {
    title: "菠萝啤",
    data: [
      {
        id: 1,
        drink_name: "no alchol",
        disabled: false,
      },
      {
        id: 2,
        drink_name: "alchol",
        disabled: true,
      },
    ],
  },
  {
    title: "百事可乐",
    data: [
      {
        id: 3,
        drink_name: "no sugar",
        disabled: true,
      },
      {
        id: 4,
        drink_name: "sugar",
        disabled: false,
      },
    ],
  },
  {
    title: "尖叫",
    data: [
      {
        id: 5,
        drink_name: "red",
        disabled: true,
      },
      {
        id: 6,
        drink_name: "blue",
        disabled: false,
      },
    ],
  },
];
</script>

<template>
  <div>
    <transfer :data="data" right-title="已选择口味"></transfer>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
