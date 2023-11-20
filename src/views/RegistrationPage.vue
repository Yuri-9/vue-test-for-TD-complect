<template>
  <MainLayout>
    <section class="section">
      <div class="image-wrapper">
        <img src="registration-image.svg" alt="registration" />
      </div>
      <RegistrationForm />
    </section>
  </MainLayout>
</template>

<script setup>
import MainLayout from "./MainLayout.vue";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm.vue";
</script>

<style scoped lang="scss">
.section {
  display: flex;
  justify-content: center;
  padding-top: 100px;
  gap: 250px;
}
.content {
  display: flex;
}

.image-wrapper {
  flex: 1 1 100%;
  max-width: 550px;
  transform: translate(80px, 80px);
  &img {
    width: 100%;
  }
}
</style>
