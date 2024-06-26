"use client";
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import DropdownProfile from './DropdownProfile';
import DropdownAlert from './DropdownAlert';
import DropdownMobile from './DropdownMobile';
import DropdownDesktop from './DropdownDesktop';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCog, faPowerOff,faListUl,faBell } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle the dropdown state
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <Head>
        <title>Next.js</title>
      </Head>
      <div className="layout-navbar container-fluid navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme" id="layout-navbar">
      <DropdownMobile />
      <DropdownDesktop />
        <ul className="navbar-nav flex-row align-items-center ms-auto">
        <DropdownAlert />
        <DropdownProfile 
          img="http://areadiv.com/img/img-005.png"
          name="Anuwad"
          role="Admin"
        /> 
        </ul>
      </div>
      
    </>
  );
};

export default Header;
