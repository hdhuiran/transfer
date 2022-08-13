<template>
  <h1>transfer</h1>
  <div>
    <div>
      <!-- 绑定选中的title -->
      <!-- 传递数据和函数 -->
      <selector :data="options" @selectChange="setTargetIndex"> </selector>
    </div>
    <div class="transfer">
      <div
        class="box left-list"
        @dragover.prevent
        @drop="removeRightListData([dragedItem])"
      >
        <list-title :title="leftTitle"></list-title>
        <div>
          <!-- 渲染数据 根据 是否可选 属性给动态样式 -->
          <list-item
            :data="leftListData"
            left-or-right="left"
            @checkbox-click="setCheckedData"
            @drag-item="setDragedItem"
          ></list-item>
        </div>
      </div>
      <button-group
        :left-button-disabled="transferButtonDisabled.left"
        :right-button-disabled="transferButtonDisabled.right"
        @left-button-click="removeRightListData(checkedData.right)"
        @right-button-click="addRightListData(checkedData.left)"
      ></button-group>
      <div
        class="box right-list"
        @dragover.prevent
        @drop="addRightListData([dragedItem])"
      >
        <list-title :title="rightTitle"></list-title>
        <div>
          <!-- 传入的参数记得格式要加'' -->
          <list-item
            :data="rightListData"
            left-or-right="right"
            @checkbox-click="setCheckedData"
            @drag-item="setDragedItem"
          ></list-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 引入复用组件
import Selector from "./components/Selector.vue";
import ListTitle from "./components/ListTitle.vue";
import ButtonGroup from "./components/ButtonGroup.vue";
import ListItem from "./components/ListItem.vue";

import propsDefination from "./extends/props";
//解构
import {
  useTargetIndex,
  useComputedData,
  useRightListData,
  useCheckedData,
  useDragedItem,
} from "./extends/hooks.js";

const props = defineProps(propsDefination);

console.log(props.data, props.rightTitle);

const options = props.data.map(({ title }) => title);

const [targetIndex, setTargetIndex] = useTargetIndex(0);

// 注意顺序
const [checkedData, addCheckedData, removeCheckedData] = useCheckedData();

const [rightListData, addRightListData, removeRightListData] = useRightListData(
  [],
  checkedData
);

const [dragedItem, setDragedItem] = useDragedItem();

const { leftTitle, leftListData, transferButtonDisabled } = useComputedData(
  props.data,
  targetIndex,
  rightListData,
  checkedData
);
// 这里需要箭头函数
const setCheckedData = (checked, leftOrRight, item) => {
  checked
    ? addCheckedData(leftOrRight, item)
    : removeCheckedData(leftOrRight, item.id);
};

console.log(leftListData);
</script>

<style lang="scss" scoped>
h1 {
  font-size: 1.2em;
}
.transfer {
  display: flex;
  flex-direction: row;
  width: 360px;
  height: 300px;
  border: 1px solid #ddd;

  .box {
    width: 120px;
    height: 100%;
  }
}
</style>
