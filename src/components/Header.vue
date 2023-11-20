<template>
  <header class="header">
    <h2 class="logo">
      <a href="#">Logotype</a>
    </h2>
  </header>
</template>

<script setup></script>

<style scoped lang="scss">
.header {
  height: 64px;
  display: flex;
  align-items: center;
  margin: 0 40px;
}
.logo {
  & a {
    color: var(--Black-blue);
    font-weight: 600;
  }
}
</style>
