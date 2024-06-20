"use client";
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faBell } from '@fortawesome/free-solid-svg-icons';

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
      <div className="container">
       
      <nav className="navbar navbar-expand-lg navbar-light bg-light-two">
        <Link href="/" className="navbar-brand">Next.js</Link>
        {/* <FontAwesomeIcon icon={faCoffee} size="2x" color="green"/> */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleDropdown}
        >
          <span className="navbar-toggler-icon"></span>
        </button>


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

          </ul>
        </div>
        <FontAwesomeIcon icon={faBell} size="lg" />
      </nav>

      </div>
    </header>

     
    </>
  );
};

export default Header;
