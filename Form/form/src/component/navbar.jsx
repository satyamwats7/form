//



import React from "react";
import { Link } from 'react-scroll';
import image from "../Assest/email.png";

const Navbar = () => {
 return (
  <nav className="navbar">
   <div className='desktopMenu'>
    <Link to="inspiration" spy={true} smooth={true} duration={500} className='MenuItems'>Inspiration</Link>
    <Link to="find work" spy={true} smooth={true} duration={500} className='MenuItems'>Find Work</Link>
    <Link to="learn design" spy={true} smooth={true} duration={500} className='MenuItems'>Learn Design</Link>
    <Link to="go pro" spy={true} smooth={true} duration={500} className='MenuItems'>Go Pro</Link>
    <Link to="hire designers" spy={true} smooth={true} duration={500} className='MenuItems'>Hire Designers</Link>
    <a href="#"><i className="fal fa-shopping-cart cart"></i></a>
   </div>
   <div className="email">
    <h2>Please verify your email....</h2>
    <img src={image} alt="" className="email-img" />
   </div>
   <div className="email-verification-message">
    <p>Please verify your email address. We've sent a confirmation email to:</p>
    <p><strong>account@refero.design</strong></p>
    <p>Click the confirmation link in that email to begin using Dribbble.</p>
    <p className="receive">Didn't receive the email? Check your Spam folder, it may have been caught by a filter.</p>
    <p>If you still don't see it, you can <a href="#">resend the confirmation email</a>.</p>
    <p>Wrong email address? <a href="#">Change it</a>.</p>
   </div>
   
  </nav>
 
 
 );
}

export default Navbar;
