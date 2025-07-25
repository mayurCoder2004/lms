import React from 'react';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <footer className='flex md:flex-row flex-col-reverse items-center justify-between text-left w-full px-8 py-4 border-t'>
      <div className='flex items-center gap-4'>
        <img src={assets.logo} alt="logo" className='h-8 w-auto' />
        <div>
          <p>Copyright 2025 © Edemy. All Rights Reserved</p>
        </div>
      </div>

      <div className='flex items-center gap-3 max-md:mt-4'>
        <a href="#">
          <img src={assets.facebook_icon} alt="facebook_icon" className="h-6 w-6" />
        </a>
        <a href="#">
          <img src={assets.twitter_icon} alt="twitter_icon" className="h-6 w-6" />
        </a>
        <a href="#">
          <img src={assets.instagram_icon} alt="instagram_icon" className="h-6 w-6" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
