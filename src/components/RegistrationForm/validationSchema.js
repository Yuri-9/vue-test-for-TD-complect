import { checkEmail } from "../../utils/checkEmail";
import { checkIdentityPasswords } from "../../utils/checkIdentityPasswords";
import { checkMaxLength } from "../../utils/checkMaxLength";
import { checkMinLength } from "../../utils/checkMinLength";
import { checkRequired } from "../../utils/checkRequired";

const MIN_LENGTH = 2;
const MAX_LENGTH = 20;

export const getValidationSchema = (formData) => ({
  login: (value) => [
    checkRequired(value),
    checkMinLength(MIN_LENGTH, value),
    checkMaxLength(MAX_LENGTH, value),
  ],
  email: (value) => [checkRequired(value), checkEmail(value)],
  password: (value) => [
    checkRequired(value),
    checkMinLength(MIN_LENGTH, value),
    checkMaxLength(MAX_LENGTH, value),
  ],
  passwordConfirmation: (value) => [
    checkRequired(value),
    checkMinLength(MIN_LENGTH, value),
    checkMaxLength(MAX_LENGTH, value),
    checkIdentityPasswords({ value, comparedValue: formData.password }),
  ],
});
