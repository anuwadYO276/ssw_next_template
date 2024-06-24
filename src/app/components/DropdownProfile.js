// components/Dropdown.js
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const DropdownProfile = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="dropdown">
        <span className="avatar avatar-online ms-3" id="dropdownMenuButton"
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
            onClick={toggleDropdown}>
            <img src="http://areadiv.com/img/img-005.png" alt="" className="w-px-40 h-auto rounded-circle"/>
        </span>
      <div className={`dropdown-menu${dropdownOpen ? ' show' : ''} `} aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" href="pages-account-settings-account.html">
          <div className="d-flex">
            <div className="flex-shrink-0 me-3">
              <div className="avatar avatar-online">
                <img src="http://areadiv.com/img/img-005.png" alt="" className="w-px-40 h-auto rounded-circle"/>
              </div>
            </div>
            <div className="flex-grow-1">
              <span className="fw-medium d-block">John Doe</span>
              <small className="text-muted">Admin</small>
            </div>
          </div>
        </a>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item" href="pages-profile-user.html">
          <i className="bx bx-user me-2"></i>
          <span className="align-middle">My Profile</span>
        </a>
        <a className="dropdown-item" href="pages-account-settings-account.html">
          <i className="bx bx-cog me-2"></i>
          <span className="align-middle">Settings</span>
        </a>
        <a className="dropdown-item" href="pages-account-settings-billing.html">
          <span className="d-flex align-items-center align-middle">
            <i className="flex-shrink-0 bx bx-credit-card me-2"></i>
            <span className="flex-grow-1 align-middle">Billing</span>
            <span className="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">4</span>
          </span>
        </a>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item" href="pages-faq.html">
          <i className="bx bx-help-circle me-2"></i>
          <span className="align-middle">FAQ</span>
        </a>
        <a className="dropdown-item" href="pages-pricing.html">
          <i className="bx bx-dollar me-2"></i>
          <span className="align-middle">Pricing</span>
        </a>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item" href="auth-login-cover.html" target="_blank">
          <i className="bx bx-power-off me-2"></i>
          <span className="align-middle">Log Out</span>
        </a>
      </div>
    </div>
  );
};

export default DropdownProfile;
