<template>
  <form class="form" name="registration" @submit.prevent="submitForm">
    <h1 class="title">Регистрация</h1>
    <fieldset class="fieldset">
      <InputField
        id="login"
        name="login"
        label="Логин"
        placeholder="Логин:"
        :value="values.login"
        :errors="errors.login"
        @onChange="handleChange"
      />
      <InputField
        id="email"
        name="email"
        label="Email"
        placeholder="Email:"
        :value="values.email"
        :errors="errors.email"
        @onChange="handleChange"
      />
      <InputField
        id="password"
        name="password"
        type="password"
        label="Пароль"
        placeholder="Пароль:"
        :value="values.password"
        :errors="errors.password"
        @onChange="handleChange"
      />
      <InputField
        id="passwordConfirmation"
        name="passwordConfirmation"
        type="password"
        label="Подтвердить пароль"
        placeholder="Подтвердить пароль:"
        :value="values.passwordConfirmation"
        :errors="errors.passwordConfirmation"
        @onChange="handleChange"
      />
    </fieldset>
    <button type="submit">Зарегистрироваться</button>
  </form>
</template>

<script setup>
import { reactive } from "vue";
import InputField from "../../components/InputField.vue";
import useValidate from "../../hooks/useValidate";

import { getValidationSchema } from "./validationSchema";

const initialValues = {
  login: "",
  email: "",
  password: "",
  passwordConfirmation: "",
};
const values = reactive(initialValues);

const handleChange = (name, value) => {
  values[name] = value;
  onChange({ name, value });
  if (name === "password") {
    validateFields(["passwordConfirmation"]);
  }
};

const submitForm = () => {
  validateFields(Object.keys(initialValues));
};

const { errors, onChange, validateFields } = useValidate({
  validationSchema: getValidationSchema(values),
  formData: values,
});
</script>

<style scoped lang="scss">
.form {
  display: flex;
  padding: 100px 60px;
  width: 480px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  border-radius: 40px;
  border: 1px solid var(--Gray);
  background: var(--White);
  box-shadow: 0px 0px 40px 0px rgba(141, 153, 174, 0.05);
  .title {
    color: var(--Black-blue, #2b2d42);
    font-family: Inter;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .fieldset {
    display: flex;
    max-width: 480px;
    padding: 0;
    flex-direction: column;
    gap: 20px;
    border: none;
  }
}
</style>
