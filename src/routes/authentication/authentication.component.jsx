// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth'
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

import { AuthenticationContainer } from './authentication.styles';

const Authentication = () => {
  // For demo purposes to show how GoogleRedirect works
  // useEffect(() => {
  //   async function fetchRedirectData() {
  //     const response = await getRedirectResult(auth);
  //     if(response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user)
  //     }
  //   }
  //   fetchRedirectData()
  // }, []);

  // const logGoogleUser = async () => {
  //   const { user } = await signInWithGooglePopup();
  //   const userDocRef = await createUserDocumentFromAuth(user)
  // }

  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
