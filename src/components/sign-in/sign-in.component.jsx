import React, { useState } from 'react';

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
      <input name='email' type='email' value={creds.email} onChange={handleChange} required/>
      <label>Email</label>   

      <input name='password' type='password' value={creds.password} onChange={handleChange} required/>
      <label>Email</label>    

      <input type='submit' value='Submit Form' />
    </form>

  </div>
  );

}

export default SignIn;