"use client";
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBell, faListUl, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import DropdownProfile from './DropdownProfile';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <Head>
        <title>Next.js Bootstrap</title>
      </Head>

      <nav className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme" id="layout-navbar">
        <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
          <a className="nav-item nav-link px-0 me-xl-4" href="#" onClick={(e) => e.preventDefault()}>
            <i className="bx bx-menu bx-sm"></i>
          </a>
        </div>

        <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
          <div className="navbar-nav align-items-center">
            <div className="nav-item navbar-search-wrapper mb-0">
              <a className="nav-item nav-link search-toggler px-0" href="#" onClick={(e) => e.preventDefault()}>
                <i className="bx bx-search bx-sm"></i>
                <span className="d-none d-md-inline-block text-muted">Search (Ctrl+/)</span>
              </a>
            </div>
          </div>

          <ul className="navbar-nav flex-row align-items-center ms-auto">
            <li className="nav-item dropdown-language dropdown me-2 me-xl-0">
              <a className="nav-link dropdown-toggle hide-arrow" href="#" data-bs-toggle="dropdown">
                <i className="bx bx-globe bx-sm"></i>
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a className="dropdown-item active" href="#" onClick={(e) => e.preventDefault()} data-language="en" data-text-direction="ltr">
                    <span className="align-middle">English</span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#" onClick={(e) => e.preventDefault()} data-language="fr" data-text-direction="ltr">
                    <span className="align-middle">French</span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#" onClick={(e) => e.preventDefault()} data-language="ar" data-text-direction="rtl">
                    <span className="align-middle">Arabic</span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#" onClick={(e) => e.preventDefault()} data-language="de" data-text-direction="ltr">
                    <span className="align-middle">German</span>
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown-shortcuts navbar-dropdown dropdown me-2 me-xl-0">
              <a className="nav-link dropdown-toggle hide-arrow" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                <i className="bx bx-grid-alt bx-sm"></i>
              </a>
              <div className="dropdown-menu dropdown-menu-end py-0">
                <div className="dropdown-menu-header border-bottom">
                  <div className="dropdown-header d-flex align-items-center py-3">
                    <h5 className="text-body mb-0 me-auto">Shortcuts</h5>
                    <a href="#" className="dropdown-shortcuts-add text-body" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add shortcuts" data-bs-original-title="Add shortcuts">
                      <i className="bx bx-sm bx-plus-circle"></i>
                    </a>
                  </div>
                </div>
                <div className="dropdown-shortcuts-list scrollable-container ps">
                  <div className="row row-bordered overflow-visible g-0">
                    <div className="dropdown-shortcuts-item col">
                      <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                        <i className="bx bx-calendar fs-4"></i>
                      </span>
                      <Link href="app-calendar.html">
                        <a className="stretched-link">Calendar</a>
                      </Link>
                      <small className="text-muted mb-0">Appointments</small>
                    </div>
                    <div className="dropdown-shortcuts-item col">
                      <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                        <i className="bx bx-food-menu fs-4"></i>
                      </span>
                      <Link href="app-invoice-list.html">
                        <a className="stretched-link">Invoice App</a>
                      </Link>
                      <small className="text-muted mb-0">Manage Accounts</small>
                    </div>
                  </div>
                  <div className="row row-bordered overflow-visible g-0">
                    <div className="dropdown-shortcuts-item col">
                      <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                        <i className="bx bx-user fs-4"></i>
                      </span>
                      <Link href="app-user-list.html">
                        <a className="stretched-link">User App</a>
                      </Link>
                      <small className="text-muted mb-0">Manage Users</small>
                    </div>
                    <div className="dropdown-shortcuts-item col">
                      <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                        <i className="bx bx-check-shield fs-4"></i>
                      </span>
                      <Link href="app-access-roles.html">
                        <a className="stretched-link">Role Management</a>
                      </Link>
                      <small className="text-muted mb-0">Permission</small>
                    </div>
                  </div>
                  <div className="row row-bordered overflow-visible g-0">
                    <div className="dropdown-shortcuts-item col">
                      <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                        <i className="bx bx-pie-chart-alt-2 fs-4"></i>
                      </span>
                      <Link href="index.html">
                        <a className="stretched-link">Dashboard</a>
                      </Link>
                      <small className="text-muted mb-0">User Profile</small>
                    </div>
                    <div className="dropdown-shortcuts-item col">
                      <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                        <i className="bx bx-cog fs-4"></i>
                      </span>
                      <Link href="pages-account-settings-account.html">
                        <a className="stretched-link">Setting</a>
                      </Link>
                      <small className="text-muted mb-0">Account Settings</small>
                    </div>
                  </div>
                  <div className="row row-bordered overflow-visible g-0">
                    <div className="dropdown-shortcuts-item col">
                      <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                        <i className="bx bx-help-circle fs-4"></i>
                      </span>
                      <Link href="pages-faq.html">
                        <a className="stretched-link">FAQs</a>
                      </Link>
                      <small className="text-muted mb-0">FAQs &amp; Articles</small>
                    </div>
                    <div className="dropdown-shortcuts-item col">
                      <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                        <i className="bx bx-window-open fs-4"></i>
                      </span>
                      <Link href="modal-examples.html">
                        <a className="stretched-link">Modals</a>
                      </Link>
                      <small className="text-muted mb-0">Useful Popups</small>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item dropdown-style-switcher dropdown me-2 me-xl-0">
              <a className="nav-link dropdown-toggle hide-arrow" href="#" data-bs-toggle="dropdown">
                <i className="bx bx-sm bx-sun"></i>
              </a>
              <ul className="dropdown-menu dropdown-menu-end dropdown-styles">
                <li>
                  <a className="dropdown-item" href="#" onClick={(e) => e.preventDefault()} data-theme="light">
                    <span className="align-middle"><i className="bx bx-sun me-2"></i>Light</span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#" onClick={(e) => e.preventDefault()} data-theme="dark">
                    <span className="align-middle"><i className="bx bx-moon me-2"></i>Dark</span>
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown-notifications navbar-dropdown dropdown me-3 me-xl-2">
              <a className="nav-link dropdown-toggle hide-arrow" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                <i className="bx bx-bell bx-sm"></i>
                <span className="badge bg-danger rounded-pill">5</span>
              </a>
              <ul className="dropdown-menu dropdown-menu-end py-0">
                <li className="dropdown-menu-header border-bottom">
                  <div className="dropdown-header d-flex align-items-center py-3">
                    <h5 className="text-body mb-0 me-auto">Notification</h5>
                    <a href="#" className="dropdown-notifications-all text-body" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Mark all as read" data-bs-original-title="Mark all as read">
                      <i className="bx fs-4 bx-envelope-open"></i>
                    </a>
                  </div>
                </li>
                <li className="dropdown-notifications-list scrollable-container ps">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item list-group-item-action dropdown-notifications-item">
                      <Link href="javascript:void(0)">
                        <a className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar">
                              <img src="assets/img/avatars/1.png" alt className="w-px-40 h-auto rounded-circle" />
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-1">Congratulation Lettie 🎉</h6>
                            <p className="mb-0">Won the monthly best seller gold badge</p>
                            <small className="text-muted">1h ago</small>
                          </div>
                          <div className="flex-shrink-0 dropdown-notifications-actions">
                            <a href="#" className="dropdown-notifications-read"><span className="badge badge-dot"></span></a>
                            <a href="#" className="dropdown-notifications-archive"><span className="bx bx-x"></span></a>
                          </div>
                        </a>
                      </Link>
                    </li>
                    <li className="list-group-item list-group-item-action dropdown-notifications-item">
                      <Link href="javascript:void(0)">
                        <a className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar">
                              <span className="avatar-initial rounded-circle bg-label-danger">CF</span>
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-1">Charles Franklin</h6>
                            <p className="mb-0">Accepted your connection</p>
                            <small className="text-muted">12hr ago</small>
                          </div>
                          <div className="flex-shrink-0 dropdown-notifications-actions">
                            <a href="#" className="dropdown-notifications-read"><span className="badge badge-dot"></span></a>
                            <a href="#" className="dropdown-notifications-archive"><span className="bx bx-x"></span></a>
                          </div>
                        </a>
                      </Link>
                    </li>
                    <li className="list-group-item list-group-item-action dropdown-notifications-item">
                      <Link href="javascript:void(0)">
                        <a className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar">
                              <img src="assets/img/avatars/2.png" alt className="w-px-40 h-auto rounded-circle" />
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-1">New Message ✉️</h6>
                            <p className="mb-0">You have new message from Natalie</p>
                            <small className="text-muted">1h ago</small>
                          </div>
                          <div className="flex-shrink-0 dropdown-notifications-actions">
                            <a href="#" className="dropdown-notifications-read"><span className="badge badge-dot"></span></a>
                            <a href="#" className="dropdown-notifications-archive"><span className="bx bx-x"></span></a>
                          </div>
                        </a>
                      </Link>
                    </li>
                    <li className="list-group-item list-group-item-action dropdown-notifications-item">
                      <Link href="javascript:void(0)">
                        <a className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar">
                              <img src="assets/img/avatars/3.png" alt className="w-px-40 h-auto rounded-circle" />
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-1">Yay! You have new sale 🎉</h6>
                            <p className="mb-0">New sale worth $20</p>
                            <small className="text-muted">1h ago</small>
                          </div>
                          <div className="flex-shrink-0 dropdown-notifications-actions">
                            <a href="#" className="dropdown-notifications-read"><span className="badge badge-dot"></span></a>
                            <a href="#" className="dropdown-notifications-archive"><span className="bx bx-x"></span></a>
                          </div>
                        </a>
                      </Link>
                    </li>
                    <li className="list-group-item list-group-item-action dropdown-notifications-item">
                      <Link href="javascript:void(0)">
                        <a className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar">
                              <img src="assets/img/avatars/4.png" alt className="w-px-40 h-auto rounded-circle" />
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-1">New Rating 🎉</h6>
                            <p className="mb-0">You have a new rating</p>
                            <small className="text-muted">1h ago</small>
                          </div>
                          <div className="flex-shrink-0 dropdown-notifications-actions">
                            <a href="#" className="dropdown-notifications-read"><span className="badge badge-dot"></span></a>
                            <a href="#" className="dropdown-notifications-archive"><span className="bx bx-x"></span></a>
                          </div>
                        </a>
                      </Link>
                    </li>
                    <li className="list-group-item list-group-item-action dropdown-notifications-item">
                      <Link href="javascript:void(0)">
                        <a className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar">
                              <img src="assets/img/avatars/5.png" alt className="w-px-40 h-auto rounded-circle" />
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-1">New Connection</h6>
                            <p className="mb-0">You have a new connection request</p>
                            <small className="text-muted">1h ago</small>
                          </div>
                          <div className="flex-shrink-0 dropdown-notifications-actions">
                            <a href="#" className="dropdown-notifications-read"><span className="badge badge-dot"></span></a>
                            <a href="#" className="dropdown-notifications-archive"><span className="bx bx-x"></span></a>
                          </div>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-menu-footer border-top">
                  <a href="#" className="dropdown-item d-flex justify-content-center p-3">
                    View all notifications
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item navbar-dropdown dropdown-user dropdown">
              <a className="nav-link dropdown-toggle hide-arrow" href="#" data-bs-toggle="dropdown">
                <div className="avatar avatar-online">
                  <img src="assets/img/avatars/1.png" alt className="w-px-40 h-auto rounded-circle" />
                </div>
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a className="dropdown-item" href="#">
                    <div className="d-flex">
                      <div className="flex-shrink-0 me-3">
                        <div className="avatar avatar-online">
                          <img src="assets/img/avatars/1.png" alt className="w-px-40 h-auto rounded-circle" />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <span className="fw-semibold d-block">John Doe</span>
                        <small className="text-muted">Admin</small>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="dropdown-divider"></div>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="bx bx-user me-2"></i>
                    <span className="align-middle">My Profile</span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="bx bx-cog me-2"></i>
                    <span className="align-middle">Settings</span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <span className="d-flex align-items-center align-middle">
                      <i className="flex-shrink-0 bx bx-credit-card me-2"></i>
                      <span className="flex-grow-1 align-middle">Billing</span>
                      <span className="flex-shrink-0 badge badge-danger rounded-pill ms-2">4</span>
                    </span>
                  </a>
                </li>
                <li>
                  <div className="dropdown-divider"></div>
                </li>
                <li>
                  <a className="dropdown-item" href="auth-login-basic.html">
                    <i className="bx bx-power-off me-2"></i>
                    <span className="align-middle">Log Out</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        </nav>
    </>
  );
}
