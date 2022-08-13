// 记得要导入，否则会报错 is not defined
import { ref, computed, reactive } from "vue";
export function useTargetIndex(initialIndex) {
  const targetIndex = ref(initialIndex);

  function setTargetIndex(newIndex) {
    targetIndex.value = Number(newIndex);
    // console.log(targetIndex.value);
  }

  return [targetIndex, setTargetIndex];
}

export function useRightListData(initialData, checkedData) {
  const rightListData = ref(initialData);

  function addRightListData(newData) {
    rightListData.value = [...rightListData.value, ...newData];

    checkedData.left = [];
  }

  function removeRightListData(newData) {
    newData.forEach((newItem) => {
      // 要加value过滤
      rightListData.value = rightListData.value.filter(
        (item) => item.id !== newItem.id
      );
    });
    checkedData.right = [];
  }
  return [rightListData, addRightListData, removeRightListData];
}

export function useCheckedData() {
  const checkedData = reactive({
    left: [],
    right: [],
  });
  // 判断数据增加
  function addCheckedData(leftOrRight, item) {
    switch (leftOrRight) {
      case "left":
        checkedData.left.push(item);
        // console.log(checkedData.left);
        break;
      case "right":
        checkedData.right.push(item);
        break;
      default:
        break;
    }
  }
  function removeCheckedData(leftOrRight, id) {
    switch (leftOrRight) {
      // 传进来的ID不符合才判断可以
      case "left":
        checkedData.left = checkedData.left.filter((item) => item.id !== id);
        // console.log(checkedData.left);
        break;
      case "right":
        checkedData.right = checkedData.right.filter((item) => item.id !== id);
        break;
      default:
        break;
    }
  }
  return [checkedData, addCheckedData, removeCheckedData];
}
// 拖拽
export function useDragedItem() {
  const dragedItem = ref(null);

  function setDragedItem(item) {
    dragedItem.value = item;
  }

  return [dragedItem, setDragedItem];
}

export function useComputedData(data, targetIndex, rightListData, checkedData) {
  const leftTitle = computed(() => data[targetIndex.value].title);

  const leftListData = computed(() => {
    const { data: currentData } = data[targetIndex.value];

    return currentData.filter((item) => {
      if (!rightListData.value.find(({ id }) => item.id === id)) {
        return item;
      }
    });
  });
  // 对向列表为空时，不允许点击穿梭按钮
  const transferButtonDisabled = computed(() => ({
    left: checkedData.right.length === 0,
    right: checkedData.left.length === 0,
  }));

  // 记得导出
  return {
    leftTitle,
    leftListData,
    transferButtonDisabled,
  };
}
