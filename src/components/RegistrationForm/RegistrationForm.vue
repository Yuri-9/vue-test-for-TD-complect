<template>
  <form class="form">
    <InputField
      id="login"
      name="login"
      label="Логин"
      placeholder="Логин:"
      v-model="formData.login"
      :value="''"
      :errors="errors.login"
      @onChange="handleChange"
    />
    <InputField
      id="email"
      name="email"
      label="Email"
      placeholder="Email:"
      v-model="formData.email"
      :value="''"
      :errors="errors.email"
      @onChange="handleChange"
    />
    <InputField
      id="password"
      name="password"
      type="password"
      label="Пароль"
      placeholder="Пароль:"
      v-model="formData.password"
      :value="''"
      :errors="errors.password"
      @onChange="handleChange"
    />
    <InputField
      id="passwordConfirmation"
      name="passwordConfirmation"
      type="password"
      label="Подтвердить пароль"
      placeholder="Подтвердить пароль:"
      v-model="formData.passwordConfirmation"
      :value="''"
      :errors="errors.passwordConfirmation"
      @onChange="handleChange"
    />
  </form>
</template>

<script setup>
import { reactive } from "vue";
import InputField from "../../components/InputField.vue";
import useValidate from "../../hooks/useValidate";

import { getValidationSchema } from "./validationSchema";

const initialFormData = {
  login: "",
  email: "",
  password: "",
  passwordConfirmation: "",
};
const formData = reactive(initialFormData);

const handleChange = (name, value) => {
  formData[name] = value;
  onChange({ name, value });
  if (name === "password") {
    validateFields(["passwordConfirmation"]);
  }
};

const { errors, onChange, validateFields } = useValidate({
  validationSchema: getValidationSchema(formData),
  formData,
});
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
