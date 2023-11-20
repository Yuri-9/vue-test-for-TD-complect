export const validateField = ({ name, value, validationSchema }) => {
  return validationSchema[name](value);
};
