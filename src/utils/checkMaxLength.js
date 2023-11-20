export const checkMaxLength = (
  maxLength,
  value,
  message = `Max length: ${maxLength}`
) => {
  if (String(value).length > maxLength) {
    return message;
  }
  return "";
};
