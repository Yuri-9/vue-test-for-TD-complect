export const checkIdentityPasswords = ({
  value,
  comparedValue,
  message = "Passwords do not match",
}) => {
  if (value !== comparedValue) return message;
  return "";
};
