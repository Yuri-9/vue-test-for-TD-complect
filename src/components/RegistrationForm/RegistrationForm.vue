<template>
  <form class="form">
    <InputField
      id="login"
      name="login"
      label="Логин"
      placeholder="Логин"
      :value="''"
      :errors="errors.login"
      @onChange="onChange"
    />
    <InputField
      id="email"
      name="email"
      label="Email"
      placeholder="Email"
      :value="''"
      :errors="errors.email"
      @onChange="onChange"
    />
    <InputField
      id="password"
      name="password"
      type="password"
      label="Password"
      placeholder="Password"
      :value="''"
      :errors="errors.password"
      @onChange="onChange"
    />
  </form>
</template>

<script setup>
import InputField from "../../components/InputField.vue";
import useValidate from "../../hooks/useValidate";

import { validationSchema } from "./validationSchema";

const { errors, onChange } = useValidate(validationSchema);
</script>

<style scoped lang="scss">
.form {
  display: flex;
  max-width: 480px;
  padding: 60px;
  flex-direction: column;
  gap: 20px;
}
</style>
