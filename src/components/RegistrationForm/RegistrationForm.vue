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
    <Button type="submit">Зарегистрироваться</Button>
  </form>
</template>

<script setup>
import { reactive } from "vue";
import InputField from "../../components/InputField.vue";
import Button from "../../components/Button.vue";
import useValidate from "../../hooks/useValidate";
import { checkHasErrors } from "../../utils/checkHasErrors";

import { getValidationSchema } from "./validationSchema";

const emits = defineEmits(["onSubmit"]);

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
  const nameFields = Object.keys(initialValues);
  validateFields(nameFields);

  if (checkHasErrors(errors, nameFields)) {
    console.log("there are errors");
    return;
  }
  emits("onSubmit", { values });
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
  align-items: center;
  gap: 40px;
  border-radius: 40px;
  border: 1px solid var(--Gray-40);
  background: var(--White);
  box-shadow: 0px 0px 40px 0px rgba(141, 153, 174, 0.05);
  .title {
    color: var(--Black-blue);
    margin: 0;
  }
  .fieldset {
    display: flex;
    max-width: 480px;
    width: 100%;
    padding: 0;
    flex-direction: column;
    gap: 12px;
    border: none;
  }
}
</style>
