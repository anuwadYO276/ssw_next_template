"use client";
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

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

      <nav className="navbar navbar-expand-lg navbar-light bg-light-two">
        <Link href="/" className="navbar-brand">Next.js Bootstrap</Link>
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
              <Link href="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link">Contact</Link>
            </li>
            <li className={`nav-item dropdown ${isDropdownOpen ? 'show' : ''}`}>
              <div
                className="nav-link dropdown-toggle"
                role="button"
                onClick={toggleDropdown}
                aria-expanded={isDropdownOpen ? 'true' : 'false'}
              >
                Dropdown
              </div>
              <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                <Link href="/pages/table" className="dropdown-item">
                
                table
                </Link>
                <Link href="/dropdown-item-2" className="dropdown-item">
                    Dropdown Item 2
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>

     
    </>
  );
};

export default Header;
