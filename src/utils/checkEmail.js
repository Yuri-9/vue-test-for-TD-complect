export const EMAIL_REGEXP =
  /^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})$/i;

export const checkEmail = (email, message = "Incorrect email") => {
  if (!String(email).match(EMAIL_REGEXP)) return message;
  return "";
};
