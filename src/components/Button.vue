<template>
  <button class="button" @click="onClick">
    <slot></slot>
  </button>
</template>

<script setup>
const emits = defineEmits(["onClick"]);
</script>

<style scoped lang="scss">
.button {
  border-radius: 8px;
  border: 1px solid var(--Blue);
  background: var(--Blue);
  min-width: 230px;
  width: 100%;
  color: var(--White);
  cursor: pointer;
  height: 50px;
  padding: 3px 10px;
}
</style>
