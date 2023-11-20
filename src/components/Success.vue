<template>
  <div class="content">
    <h1 class="title">Вы успешно прошли регистрацию</h1>
    <button class="button" @click="emits('onClick')">
      <img src="../assets/checkmarkDone.svg" />
    </button>
  </div>
</template>

<script setup>
const emits = defineEmits(["onClick"]);
</script>

<style scoped lang="scss">
.content {
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 300px;
}

.title {
  text-align: center;
}
.button {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--Blue);
}
</style>
