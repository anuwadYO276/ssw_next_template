import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import DropdownListAlert from './DropdownListAlert';

import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';

const DropdownAlert = () => {
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
  for (let i = 0; i < 5; i++) {
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
    <li className="nav-item dropdown-notifications navbar-dropdown dropdown me-3 me-xl-1" ref={dropdownRef}>
      <a className="nav-link dropdown-toggle hide-arrow" onClick={toggleDropdown}>
        <FontAwesomeIcon icon={faBell} size="lg" className="navbar-icon" />
        <span className="badge bg-danger rounded-pill badge-notifications">5</span>
      </a>
      {isDropdownOpen && (
        <ul className="dropdown-menu dropdown-menu-end show" data-bs-popper="static">
          <li className="dropdown-menu-header border-bottom">
            <div className="dropdown-header d-flex align-items-center py-3">
              <h5 className="text-body mb-0 me-auto">Notification</h5>
            </div>
          </li>
          <li className="dropdown-notifications-list scrollable-container ps ps--active-y" ref={scrollContainerRef}>
            <ul className="list-group list-group-flush">{renderedItems}</ul>
          </li>
          <li className="dropdown-menu-footer border-top p-3">
            <button className="btn btn-primary text-uppercase w-100">Close all notifications</button>
          </li>
        </ul>
      )}
    </li>
  );
};

export default DropdownAlert;
