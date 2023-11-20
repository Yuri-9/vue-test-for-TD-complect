export const checkHasErrors = (errors, nameFields) => {
  let hasError = true;
  nameFields.forEach((name) => {
    hasError = !!errors[name].value.filter((error) => !!error).length;
  });
  return hasError;
};
