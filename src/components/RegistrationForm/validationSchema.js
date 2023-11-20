import { checkManLength } from "../../utils/checkManLength";
import { checkMinLength } from "../../utils/checkMinLength";
import { checkRequired } from "../../utils/checkRequired";
const MIN_LENGTH = 2;
const MAN_LENGTH = 20;

export const validationSchema = {
  login: (value) => [
    checkRequired(value),
    checkMinLength(MIN_LENGTH, value),
    checkManLength(MAN_LENGTH, value),
  ],
  email: (value) => [checkRequired(value), checkMinLength(MIN_LENGTH, value)],
};
