import { reactive, ref, toRefs } from "vue";
import { validateField } from "../utils/validateField";

export default function useValidate({ validationSchema, formData }) {
  const objectNames = Object.keys(validationSchema).reduce(
    (acc, item) => ({ ...acc, [item]: [] }),
    {}
  );

  const errors = reactive(objectNames);

  const onChange = ({ name, value }) => {
    errors[name] = validateField({ name, value, validationSchema });
  };

  const validateFields = (fieldsNames) => {
    fieldsNames.forEach((name) => {
      errors[name] = validateField({
        name,
        value: formData[name],
        validationSchema,
      });
    });
  };

  return { errors: toRefs(errors), onChange, validateFields };
}
