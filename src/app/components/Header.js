"use client";
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import DropdownProfile from './DropdownProfile';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle the dropdown state
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <Head>
        <title>Next.js Bootstrap</title>
      </Head>
      <div className="layout-navbar container-fluid navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme" id="layout-navbar">
        <ul className="navbar-nav flex-row align-items-center ms-auto">

        <li className="nav-item dropdown-notifications navbar-dropdown dropdown me-3 me-xl-1">
          xxx
        </li>
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
