import React from 'react'

import ContentWrapper from './ContentWrapper';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
      <footer className="footer bg-[#020c1b] py-[50px] text-white relative ">
          <div className='w-[100%]  max-w-[1200px] mx-auto px-[20px] flex flex-col items-center justify-center'>
              <ul className="menuItems flex items-center text-[12px] md:text-[18px] justify-center gap-[10px] mb-[20px] md:mb-[30px] whitespace-nowrap md:gap-[30px]">
                  <li className="menuItem cursor-pointe opacity-50 text-center max-w-[800px] mb-[20px] md:text-[14px] md:mb-[30px] cursor-pointer hover:text-red-600">Terms Of Use</li>
                  <li className="menuItem cursor-pointe opacity-50 text-center max-w-[800px] mb-[20px] md:text-[14px] md:mb-[30px] cursor-pointer hover:text-red-600">Privacy-Policy</li>
                  <li className="menuItem cursor-pointe opacity-50 text-center max-w-[800px] mb-[20px] md:text-[14px] md:mb-[30px] cursor-pointer hover:text-red-600">About</li>
                  <li className="menuItem cursor-pointe opacity-50 text-center max-w-[800px] mb-[20px] md:text-[14px] md:mb-[30px] cursor-pointer hover:text-red-600">Blog</li>
                  <li className="menuItem cursor-pointe opacity-50 text-center max-w-[800px] mb-[20px] md:text-[14px] md:mb-[30px] cursor-pointer hover:text-red-600">FAQ</li>
              </ul>
              <div className="infoText text-[12px] opacity-50 text-center max-w-[800px] mb-[20px] md:text-[14px] md:mb-[30px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit
                  esse cillum dolore eu fugiat nulla pariatur.
              </div>
              <div className="socialIcons flex items-center justify-center gap-[20px] mt-[20px]">
                  <span className="icon w-[50px] h-[50px] rounded-full bg-[#04152d] flex items-center justify-center cursor-pointer hover:shadow-lg hover:bg-red-600">
                      <FaFacebookF />
                  </span>
                  <span className="icon w-[50px] h-[50px] rounded-full bg-[#04152d] flex items-center justify-center cursor-pointer hover:shadow-lg hover:bg-red-600">
                      <FaInstagram />
                  </span>
                  <span className="icon w-[50px] h-[50px] rounded-full bg-[#04152d] flex items-center justify-center cursor-pointer hover:shadow-lg hover:bg-red-600">
                      <FaTwitter />
                  </span>
                  <span className="icon w-[50px] h-[50px] rounded-full bg-[#04152d] flex items-center justify-center cursor-pointer hover:shadow-lg hover:bg-red-600">
                      <FaLinkedin />
                  </span>
              </div>
          </div>
      </footer>
  );
};

export default Footer;

