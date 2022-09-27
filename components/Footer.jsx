import React from 'react';
import Link from 'next/link';

import {AiFillInstagram, AiFillFacebook, AiFillTwitterSquare} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 Wholesale All rights reserve</p>
      <p className='icons'>
        <AiFillInstagram/>
        <AiFillFacebook/>
        <AiFillTwitterSquare/>
      </p>
      
    </div>
  )
}

export default Footer

