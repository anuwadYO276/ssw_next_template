import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl } from '@fortawesome/free-solid-svg-icons';
import DropdownListAlert from './DropdownListAlert';

import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';

const DropdownDesktop = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const scrollContainerRef = useRef(null);

  // Function to toggle the dropdown state
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Function to handle clicks outside of the dropdown
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const ps = new PerfectScrollbar(scrollContainerRef.current);
      return () => {
        ps.destroy();
      };
    }
  }, [isDropdownOpen]);

  const renderedItems = [];
  for (let i = 0; i < 10; i++) {
    renderedItems.push(
        <DropdownListAlert
          key={i}
          img="http://areadiv.com/img/img-005.png"
          title="Congratulation Lettie 🎉"
          content="Won the monthly best seller gold badge"
          time="1h ago"
        />
    );
  }

  return (
   <>
   <Link href="/" className="navbar-dexMenu">
        <span className="navbar-brand">Next.js</span>
      </Link>
      <Link href="/cards"className="navbar-dexMenu">
        <span className="navbar-brand">Cards</span>
      </Link>
      <Link href="/datatable" className="navbar-dexMenu">
        <span className="navbar-brand">Datatable</span>
      </Link>
      <Link href="/modal" className="navbar-dexMenu">
        <span className="navbar-brand">Modal</span>
      </Link>
    </>
  );
};

export default DropdownDesktop;
