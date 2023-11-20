export const checkRequired = (value, message = "Required") => {
  if (value === undefined || value === null) return message;
  if (!String(value).length) return message;
  return "";
};
