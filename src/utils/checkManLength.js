export const checkManLength = (maxLength, value, message) => {
  if (String(value).length > maxLength) {
    return message || `Max length: ${maxLength}`;
  }
  return "";
};
