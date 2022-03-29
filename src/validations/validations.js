const validateName = (value, field) => {
  if (!value) {
    return "Required";
  } else if (!/^[A-Za-z]+$/i.test(value)) {
    return `Invalid ${field}`;
  }
};
const validatePassword = (value, field, passwordValue) => {
  if (!value) {
    return "Required";
  } else if (value.length > 6 || value.length < 6) {
    return "only 6 characters password is  allowed";
  } else if (field === "cpassword" && value !== passwordValue) {
    return "Passwords do not match.";
  }
};

export default validateName;

export { validateName, validatePassword };
