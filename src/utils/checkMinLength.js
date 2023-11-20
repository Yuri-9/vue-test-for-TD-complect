export const checkMinLength = (
  minLength,
  value,
  message = `Min length: ${minLength}`
) => {
  if (String(value).length < minLength) {
    return message;
  }
  return "";
};
