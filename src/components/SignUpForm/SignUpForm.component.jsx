import { useState } from "react";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "./../../utils/firebase/firebase.utils";

import FormInput from "../FormInput/FormInput.component";
import Button from "./../Button/Button.compnent";

import './SignUpForm.styles.scss';

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  passwordConfirm: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, passwordConfirm } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      alert("Passwords must match");

      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });

      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user; email already in use");
      }

      console.error("User creation encountered an error", error);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign Up with your email and password</span>
      <form onSubmit={ handleSubmit }>
        <FormInput
          label='Display Name'
          type='text'
          onChange={ handleChange }
          name='displayName'
          value={ displayName }
          required
        />
        <FormInput
          label='Email'
          type='email'
          onChange={ handleChange }
          name='email'
          value={ email }
          required
        />
        <FormInput
          label='Password'
          type='password'
          onChange={ handleChange }
          name='password'
          value={ password }
          required
        />
        <FormInput
          label='Confirm Password'
          type='password'
          onChange={ handleChange }
          name='passwordConfirm'
          value={ passwordConfirm }
          required
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
