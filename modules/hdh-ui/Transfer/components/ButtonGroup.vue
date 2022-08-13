<template>
  <div class="box btn-group">
    <button :disabled="leftButtonDisabled" @click="leftButtonClick">
      &lt;
    </button>
    <button :disabled="rightButtonDisabled" @click="rightButtonClick">
      &gt;
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  leftButtonDisabled: {
    type: Boolean,
    default: true,
  },
  rightButtonDisabled: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(["leftButtonClick", "rightButtonClick"]);

const leftButtonClick = () => {
  emit("leftButtonClick");
};

const rightButtonClick = () => {
  emit("rightButtonClick");
};
</script>

<style lang="scss">
.btn-group {
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;

  button {
    // display: block;
    border: none;
    outline: none;
    text-align: center;
    line-height: 19px;
    width: 38px;
    height: 38px;
    background-color: orange;
    color: #fff;
    border-radius: 5px;

    &:disabled {
      opacity: 0.6;
    }

    &:nth-child(2) {
      margin-left: 10px;
    }
  }
}
</style>
