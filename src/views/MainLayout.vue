<template>
  <div class="wrapper">
    <Header></Header>
    <main class="main">
      <slot></slot>
    </main>
  </div>
</template>

<script setup>
import Header from "../components/Header.vue";
</script>

<style scoped lang="scss">
.wrapper {
  width: 100%;
  height: 100%;
}

.main {
  height: calc(100vh - 64px);
  width: 100%;
  padding: 0 20px;
  background-color: var(--Mono-Light-blue);
}
</style>
