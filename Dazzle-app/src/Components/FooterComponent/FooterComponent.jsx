import React from 'react';
import { useSelector } from 'react-redux';
export default function FooterComponent() {

    const signupdata = useSelector(state => state.signup.value);
    console.log("sign up data in footer",signupdata)
  return (
    <div>
      <p>name:{signupdata.regname}</p>
      <p>email:{signupdata.email}</p>
      <p>password:{signupdata.password}</p>
      <p>username:{signupdata.username}</p>
      <p>mob number:{signupdata.mobnumber}</p>
      <p>confirm password:{signupdata.confirmpassword}</p>
    </div>
  );
}