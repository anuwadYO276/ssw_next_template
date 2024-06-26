import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl } from '@fortawesome/free-solid-svg-icons';
import DropdownListAlert from './DropdownListAlert';

import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';

const DropdownMobile = () => {
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
  // -webkit-fill-available
  return (
    <div className="navbar-dropdown navbar-moMenu " ref={dropdownRef}>
      <a className="nav-link dropdown-toggle hide-arrow" onClick={toggleDropdown}>
        <FontAwesomeIcon icon={faListUl} size="lg" className="navbar-icon" />
      </a>
      {isDropdownOpen && (
        <ul className="dropdown-menu show" data-bs-popper="static">
          <li className="dropdown-menu-header border-bottom">
            <div className="dropdown-header d-flex align-items-center py-3">
              <h5 className="text-body mb-0 me-auto">menu</h5>
            </div>
          </li>
          <li className="dropdown-notifications-list scrollable-container ps ps--active-y" ref={scrollContainerRef}>
            <ul className="list-group list-group-flush">


            <li className="list-group-item list-group-item-action dropdown-notifications-item border-bottom">
              <div className="d-flex">
              <div className="flex-grow-1">
              <Link href="/">
                <span className="navbar-brand">Home</span>
              </Link>
              </div>
              <div className="flex-shrink-0 dropdown-notifications-actions"></div>
              </div>
            </li>
            <li className="list-group-item list-group-item-action dropdown-notifications-item border-bottom">
              <div className="d-flex">
              <div className="flex-grow-1">
              <Link href="/cards">
                <span className="navbar-brand">Cards</span>
              </Link>
              </div>
              <div className="flex-shrink-0 dropdown-notifications-actions"></div>
              </div>
            </li>
            <li className="list-group-item list-group-item-action dropdown-notifications-item border-bottom">
              <div className="d-flex">
              <div className="flex-grow-1">
              <Link href="/datatable">
                <span className="navbar-brand">Datatable</span>
              </Link>
              </div>
              <div className="flex-shrink-0 dropdown-notifications-actions"></div>
              </div>
            </li>
            <li className="list-group-item list-group-item-action dropdown-notifications-item">
              <div className="d-flex">
              <div className="flex-grow-1">
              <Link href="/modal" >
                <span className="navbar-brand">Modal</span>
              </Link>
              </div>
              <div className="flex-shrink-0 dropdown-notifications-actions"></div>
              </div>
            </li>


            </ul>
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMobile;
