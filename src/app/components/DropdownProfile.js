import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCog, faPowerOff } from '@fortawesome/free-solid-svg-icons';

const DropdownProfile = (props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

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

  return (
    <>
      <li className="nav-item navbar-dropdown dropdown-user dropdown" ref={dropdownRef}>
        <span className="nav-link dropdown-toggle hide-arrow" onClick={toggleDropdown}>
          <div className="avatar avatar-online">
            <img src={props.img} alt="" className="w-px-40 h-auto rounded-circle" />
          </div>
        </span>

        {isDropdownOpen && (
          <ul className="dropdown-menu dropdown-menu-end show" data-bs-popper="static">
            <li>
              <Link href="#" className="dropdown-item">
                <div className="d-flex">
                  <div className="flex-shrink-0 me-3">
                    <div className="avatar avatar-online">
                      <img src={props.img} alt="" className="w-px-40 h-auto rounded-circle" />
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <span className="fw-medium d-block">{props.name}</span>
                    <small className="text-muted">{props.role}</small>
                  </div>
                </div>
              </Link>
            </li>

            <li>
              <div className="dropdown-divider"></div>
            </li>

            <li>
              <Link href="#" className="dropdown-item">
                <FontAwesomeIcon icon={faUser} className="dropdown-icon me-2" />
                <span>Profile</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="dropdown-item">
                <FontAwesomeIcon icon={faCog} className="dropdown-icon me-2" />
                <span>Settings</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="dropdown-item">
                <FontAwesomeIcon icon={faPowerOff} className="dropdown-icon me-2" />
                <span>Logout</span>
              </Link>
            </li>
          </ul>
        )}
      </li>
    </>
  );
};

export default DropdownProfile;
