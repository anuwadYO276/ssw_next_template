"use client";
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faBell,faListUl,faCircleUser } from '@fortawesome/free-solid-svg-icons';

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
    <header className="css-er44ln">
      <div className="container-fluid">
       
      <nav className="navbar navbar-expand-lg navbar-light bg-light-two">
        <Link href="/" className="navbar-brand">Next.js</Link>
        
        <FontAwesomeIcon 
          icon={faListUl} 
          size="lg" 
          className="me-2 navbar-togglerx"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleDropdown}
        />

        <div className={`collapse navbar-collapse ${isDropdownOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link href="/" className="nav-link">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link href="/cards" className="nav-link">Cards</Link>
            </li>
            <li className="nav-item">
              <Link href="/datatable" className="nav-link">DataTable</Link>
            </li>
            <li className="nav-item">
              <Link href="/accordion" className="nav-link">Accordion</Link>
            </li>

          </ul> 
        </div>
        <div className="navbar-proflie">
          <FontAwesomeIcon icon={faBell} size="lg" className="ms-1" />
          <FontAwesomeIcon icon={faCircleUser} size="lg" className="ms-3" />
        </div>
      </nav>
      
      </div>
    </header>

     
    </>
  );
};

export default Header;
