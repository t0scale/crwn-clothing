import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';

import { ReactComponent as Logo } from '../../assets/crown.svg'


const Header = ({ currentUser }) => {
  
  const handleDaClick = async () => {
    await auth.signOut()
    console.log('auth', auth)
  }


  return (
  <div className='header'>
    <Link className='logo-container' to="/">
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={handleDaClick} >
          SIGNOUT
        </div>
      ) : (
        <Link className='option' to='/signin' >
          SIGN IN
        </Link>
      )}
    </div>
  </div>
  );
}

export default Header;