import { useContext, useState } from "react";

import { 
  signInWithGooglePopup, 
  signInWithUserEmailAndPassword
} from "../../utils/firebase/firebase.utils";

import FormInput from "../FormInput/FormInput.component";
import Button from "../Button/Button.compnent";

import './SignInForm.styles.scss';
import { UserContext } from "../../contexts/user.context";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { user } = await signInWithUserEmailAndPassword(email, password);
      
      setCurrentUser(user);

      resetFormFields();
    } catch(error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('Incorrect password.');
          break;
        case 'auth/user-not-found':
          alert('User account not found');
          break;
        default:
          console.error('There was an error while signing in.', error);
          break;
      }
    }
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  }

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={ handleSubmit }>
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
        <div className="buttons-container">
          <Button type='submit'>Sign In</Button>
          <Button type='button' buttonType='google' onClick={ signInWithGoogle }>Google Sign In</Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
