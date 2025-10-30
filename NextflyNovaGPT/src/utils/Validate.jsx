export const checkValidData = (email, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  // const isNameValid = /^[a-zA-Z0-9_\s]+$/.test(name);

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid) {
    return "Email ID is not valid";
  }

  if (!isPasswordValid) {
    return "Password must contain atleast one uppercase letter, 1 special character and it must contain atleast 8 characters in total";
  }

  // if (!isNameValid) {
  //   return "Enter username";
  // }

  // if(name == null) {
  //   return null;
  // }

  // returning null means no errors
  return null;
};
