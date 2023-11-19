<template>
  <div class="wrapper">
    <label :class="['label', inputValue ? 'visible' : '']" :for="id">{{
      label
    }}</label>
    <input
      type="text"
      :id="id"
      class="input"
      :value="inputValue"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="onChangeInput"
    />
    <div class="error_text">{{ errorText }}</div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  name: { type: String, required: true },
  id: String,
  value: String,
  label: String,
  placeholder: String,
  disabled: {
    type: Boolean,
    default: false,
  },
  error: Boolean,
  errorText: String,
});
const emits = defineEmits(["onChange"]);

const inputValue = ref(props.value);

function onChangeInput(e) {
  if (props.disabled) return;
  inputValue.value = e.target.value;
  emits("onChange", e.target.value);
}
</script>

<style scoped lang="scss">
.wrapper {
  box-sizing: border-box;
  min-height: 50px;
  text-align: left;
  padding-top: 8px;
  border: 1px solid red;
  position: relative;
}

.label {
  position: absolute;
  top: 20px;
  left: 21px;
  padding: 0 10px;
  color: var(--Black-blue);
  background-color: var(--Light-Gray-40);
  display: none;

  &.visible {
    display: block;
    animation: show 0.1s linear;
    animation-fill-mode: forwards;
  }
}

@keyframes show {
  0% {
    top: 20px;
  }
  100% {
    top: 0px;
  }
}

.input {
  width: 100%;
  line-height: 50px;
  padding: 0 30px;
  font-size: 16px;
  background-color: var(--Light-Gray-40);
  border-radius: 8px;
  border: 1px solid var(--Gray);
}
</style>
