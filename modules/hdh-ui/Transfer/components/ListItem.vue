<template>
  <div>
    <!-- 传入的参数记得格式要加'' 属性-->
    <div
      v-for="item of data"
      :key="item.id"
      :class="['list-item', item.disabled ? 'disabled' : '']"
      :draggable="!item.disabled"
      @dragstart="dragItem(item)"
    >
      <!-- ID唯一性 -->
      <input
        type="checkbox"
        :disabled="item.disabled"
        :id="'__checkbox__' + item.id"
        @click="checkboxClick($event.target.checked, leftOrRight, item)"
      />
      <label :for="'__checkbox__' + item.id">{{ item.drink_name }}</label>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Array,
    default: () => [],
  },
  leftOrRight: {
    type: String,
    validator(value) {
      return ["left", "right"].includes(value);
    },
  },
});
// 自定义事件
const emit = defineEmits(["checkboxClick", "dragItem"]);

const checkboxClick = (checked, leftOrRight, item) => {
  emit("checkboxClick", checked, leftOrRight, item);
};

const dragItem = (item) => {
  emit("dragItem", item);
};
</script>

<style lang="scss">
.list-item {
  display: flex;
  align-items: center;
  height: 30px;
  font-size: 12px;
  color: #666;
  &:disabled {
    opacity: 0.6;
  }
}
</style>
