import Link from 'next/link';
import { useState } from 'react';

const DropdownListAlert = (props) => {
  const [isVisible, setIsVisible] = useState(true);
  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <>
      <li className="list-group-item list-group-item-action dropdown-notifications-item border-bottom">
        <div className="d-flex">
            <div className="flex-shrink-0 me-3">
              <div className="avatar">
                <img src={props.img} alt="" className="w-px-40 h-auto rounded-circle" />
              </div>
            </div>
            <div className="flex-grow-1">
              <h6 className="mb-1">{props.title}</h6>
              <p className="mb-0">{props.content}</p>
              <small className="text-muted">{props.time}</small>
            </div>
            <div className="flex-shrink-0 dropdown-notifications-actions">
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={handleClose}
              ></button>
            </div>
          </div>
      </li>
    </>
  );
};

export default DropdownListAlert;
