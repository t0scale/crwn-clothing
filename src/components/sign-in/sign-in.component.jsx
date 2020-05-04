import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';


const SignIn = () => {

  const [creds, setCreds] = useState({
    email: '',
    password:''
  });
  

  const handleSubmit = event => {
    event.preventDefault();
    setCreds({email:'', password:''});
  }

  const handleChange = (event, creds) => {
    // event.target represents the triggering object, in this case the inputs
    // that trigger the event. Here we see that we are destructuring value and name
    // as one object from the inputs value and name values.
    const {value, name } = event.target;

    setCreds({ [name]: value });
    console.log(creds);
    

  }

  return(
    <div className='sign-in'>
    <h2>I already have an account</h2>
    <span>Sign in with your email and password</span>

    <form onSubmit={handleSubmit}>
      <FormInput 
        name='email' 
        type='email' 
        value={creds.email} 
        handleChange={handleChange} 
        label="email" 
        required/>
        

      <FormInput name='password' type='password' value={creds.password} handleChange={handleChange} label="password" required/>
          
      <div className='buttons'>
        <CustomButton type='submit' value='Submit Form'>Sign in</CustomButton>
        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
        {' '}
        Sign in with Google{' '}
        </CustomButton>
      </div>
      
    </form>

  </div>
  );

}

export default SignIn;