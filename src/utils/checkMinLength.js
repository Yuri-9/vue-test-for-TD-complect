export const checkMinLength = (minLength, value, message = "") => {
  if (String(value).length < minLength) {
    return message || `Min length: ${minLength}`;
  }
  return "";
};
