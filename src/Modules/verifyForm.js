export const validateIdentity = (
  identity,
  setIdentity,
  validateIdentityRef
) => {
  const regName = /^[a-zA-Z]*SSRL\d{3}$/;
  const regEmail = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
  if (!identity.identity) {
    setIdentity({
      ...identity,
      isError: true,
      error: "Please input your username or email",
    });
    validateIdentityRef.current = false;
    console.log("Identity error: Input identiy")
    return;
  }

  if (!(regName.test(identity.identity) || regEmail.test(identity.identity))) {
    setIdentity({
      ...identity,
      isError: true,
      error: "Invalid username or email",
    });
    validateIdentityRef.current = false;
    console.log("Identity error: Invalid identiy")
    return;
  }
  validateIdentityRef.current = true;
  console.log("Good to go")
  setIdentity({...identity, isInputElement: false, error: ""})
};

// export const validateEmail = (email, setEmail, validatedEmailRef) => {
//   if (!email.val) {
//     setEmail({
//       ...email,
//       isError: true,
//       errorMsg: "Please input your email",
//     });
//     validatedEmailRef.current = false;
//     return;
//   }
//   const reg = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
//   if (!reg.test(email.val)) {
//     setEmail({
//       ...email,
//       isError: true,
//       errorMsg: "Invalid email",
//     });
//     validatedEmailRef.current = false;
//     return;
//   }
//   setEmail({
//     ...email,
//     isError: false,
//     errorMsg: "",
//   });
//   validatedEmailRef.current = true;
// };

// export const validatePhone = (phoneNum, setPhoneNum, validatedPhoneRef) => {
//   if (!phoneNum.val) {
//     setPhoneNum({
//       ...phoneNum,
//       isError: true,
//       errorMsg: "Please input your phone number",
//     });
//     validatedPhoneRef.current = false;
//     return;
//   }
//   const reg = /^\d{11}$/;
//   if (!reg.test(phoneNum.val)) {
//     setPhoneNum({
//       ...phoneNum,
//       isError: true,
//       errorMsg: "Invalid phone number",
//     });
//     console.log("Invalid phone num", reg.test(phoneNum.val));
//     validatedPhoneRef.current = false;
//     return;
//   }
//   setPhoneNum({
//     ...phoneNum,
//     isError: false,
//     errorMsg: "",
//   });
//   validatedPhoneRef.current = true;
// };

export const validatePassword = (password, setPassword, validatePasswordRef) => {
  if (!password.password) {
    setPassword({
      ...password,
      isError: true,
      error: "Please input your password",
    });
    validatePasswordRef.current = false;
    console.log("Pass Error: Input your password")
    return;
  }
  setPassword({
    ...password,
    isError: false,
    error: "",
  });
  validatePasswordRef.current = true;
  console.log("Good to go")
};
