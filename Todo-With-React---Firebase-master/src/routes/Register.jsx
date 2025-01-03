import React, { useRef } from "react";
import Form from "../components/Form";

const Register = () => {

  // function registerUser(event) {

  //   createUserWithEmailAndPassword(auth, event.email, event.password)
  //     .then((userCredential) => {
  //       const user = userCredential.user;
        
  //       console.log(user);            
  //       console.log(event.email);
  //       console.log(event.password);
  //       console.log(event.confirmPassword);
  //     })
  //     .catch((error) => {
  //       const errorMessage = error.message;
  //       console.log(errorMessage);
  //     });
  // }

  return (
    <>
      <Form
        name={"Register Now!"}
        showConfirmPassword={true}
        // onSubmitFunc={registerUser}
      />
    </>
  );
};

export default Register;
