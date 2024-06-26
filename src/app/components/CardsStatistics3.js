import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardsStatistics3 = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleBodyClick = () => {
      setIsOpen(false);
    };
    // Attach event listener on component mount
    document.body.addEventListener('click', handleBodyClick);
    // Clean up event listener on component unmount
    return () => {
      document.body.removeEventListener('click', handleBodyClick);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownItemClick = (event) => {
    // Handle dropdown item click
    console.log('Clicked on:', event.target.textContent);
    setIsOpen(false); // Close dropdown after item is clicked
  };
  // สร้าง dropdown ให้เลือกวันที่ต้องการดูข้อมูล <Dropdown1/>
  const Dropdown1 = () => {
    return (
      <div className="dropdown">
        <button
          className="btn btn-sm p-0"
          type="button"
          id="totalSalesList"
          aria-haspopup="true"
          aria-expanded={isOpen ? 'true' : 'false'}
          onClick={toggleDropdown}
        >
          Today <i className="bx bx-chevron-down"></i>
        </button>
        {isOpen && (
          <div className="dropdown-menu  dropdown-menu-end  show" aria-labelledby="totalSalesList">
            <a className="dropdown-item" href="#" onClick={handleDropdownItemClick}>
              Yesterday
            </a>
            <a className="dropdown-item" href="#" onClick={handleDropdownItemClick}>
              Last Week
            </a>
            <a className="dropdown-item" href="#" onClick={handleDropdownItemClick}>
              Last Month
            </a>
          </div>
        )}
      </div>
    );
  };





  return (
   <>
     <div className="card">
        <div className="card-header d-flex align-items-center justify-content-between">
        <h6 className="card-title m-0 me-2">{props.title}</h6>

        <Dropdown1/>

        </div>
        <div className="card-body text-center">
        <div className={props.divclass}>
          <span className={props.spanclass}><FontAwesomeIcon icon={props.icon} /></span>
        </div>
        <h3 className="card-title mb-1 me-2">{props.text}</h3>
        <small className="d-block mb-2">{props.small}</small>
        <span className={props.status}>{props.span} <FontAwesomeIcon icon={props.icon} /></span>
        </div>
      </div>
   </>
  );
};

export default CardsStatistics3;
