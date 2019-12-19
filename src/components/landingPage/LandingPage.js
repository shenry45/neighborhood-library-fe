import { faBookOpen, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../customButton/CustomButton';
import './landing.scss';

export const LandingPage = () => {
  return (
    <div className='landing-background'>
      <div className='landing-content'>
        <h1 className='cta'>
          A New Way to <br />
          Share Books
        </h1>
        <div className='sign-up'>
          <CustomButton isSignUp>
            <Link to='/register'>Sign Up</Link>
          </CustomButton>
        </div>
      </div>
      <footer className='landing-footer'>
        <div className='icon-group'>
          <FontAwesomeIcon className='icon' icon={faBookOpen} />
          <p>
            Share your own collection <br />
            or borrow from others
          </p>
        </div>
        <div className='icon-group'>
          <FontAwesomeIcon className='icon' icon={faUserFriends} />
          <p>
            Join a vibrant community of book <br />
            enthuisists in your local area
          </p>
        </div>
      </footer>
    </div>
  );
};
