import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

import { 
  auth,
  signInWithGooglePopup, 
  signInWithGoogleRedirect,
  createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils";

import SignUpForm from '../../components/SignUpForm/SignUpForm.component';

const SignIn = () => {
  useEffect(() => {
    async function logGoogleRedirectResponse() {
      const response = await getRedirectResult(auth);
      console.log(response);

      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    }

    logGoogleRedirectResponse();
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={ logGoogleUser }>Sign in with Google Popup</button>
      <button onClick={ signInWithGoogleRedirect }>Sign in with Google Redirect</button>
      <SignUpForm />
    </div>
  );
}

export default SignIn;