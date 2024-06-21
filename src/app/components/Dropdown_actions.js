import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical,faTrash,faEye,faPenToSquare } from '@fortawesome/free-solid-svg-icons';

const Dropdown_actions = ({ DataDropdown }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="link" id="dropdown-basic" className="p-0">
        <FontAwesomeIcon icon={faEllipsisVertical} />
      </Dropdown.Toggle>
      <Dropdown.Menu>
      {Object.keys(DataDropdown).map(key => (
          <Dropdown.Item key={key} href={DataDropdown[key]['href']} className="d-flex align-items-center">
            <FontAwesomeIcon icon={DataDropdown[key]['icon']} className="me-2" />
            {DataDropdown[key]['ItemName']}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Dropdown_actions;
