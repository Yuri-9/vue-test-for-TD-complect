import { reactive, ref, toRefs } from "vue";
import { validateField } from "../utils/validateField";

export default function useValidate(validationSchema) {
  const count = ref(0);
  const objectNames = Object.keys(validationSchema).reduce(
    (acc, item) => ({ ...acc, [item]: [] }),
    {}
  );

  const errors = reactive(objectNames);

  function onChange(name, value) {
    errors[name] = validateField(name, value, validationSchema);
  }

  return { errors: toRefs(errors), count, onChange };
}
