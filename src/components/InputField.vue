<template>
  <div :class="['wrapper', hasError ? 'hasError' : '']">
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
    <p class="error-text" v-if="hasError">
      {{ filteredErrors.join(", ") }}
    </p>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

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
  errors: {
    type: Object,
    default: {},
  },
  errorText: String,
});
const emits = defineEmits(["onChange"]);

const inputValue = ref(props.value);

const filteredErrors = computed(() =>
  props.errors.value.filter((item) => !!item)
);

const hasError = computed(() => filteredErrors.value.length);

function onChangeInput(e) {
  if (props.disabled) return;
  inputValue.value = e.target.value;
  emits("onChange", props.name, e.target.value);
}
</script>

<style scoped lang="scss">
.wrapper {
  box-sizing: border-box;

  text-align: left;
  padding-top: 8px;
  border: 1px solid red;
  position: relative;
  &.hasError {
    .label {
      color: var(--Dark-Red);
    }
    .input {
      border-color: var(--Dark-Red);
      &:focus {
        outline: 1px solid var(--Dark-Red);
      }
    }
  }
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

.error-text {
  margin: 0 0 0 30px;
  padding-left: 20px;
  padding-top: 4px;
  background: url(../assets/errorCircle.svg) left center / 16px no-repeat
    transparent;
  color: var(--Dark-Red);
}
</style>
