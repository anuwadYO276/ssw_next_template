"use client";
import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import Image from 'next/image';
import { CSVLink } from 'react-csv';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical,faTrash } from '@fortawesome/free-solid-svg-icons';
import Dropdown_actions from './Dropdown_actions';

const Datatable3 = ({ title,columns, data,details,headers,DataDropdown}) => {
  const [filterText, setFilterText] = useState('');
  const filteredItems = data.filter(
    item => item.title && item.title.toLowerCase().includes(filterText.toLowerCase()) || 
    item.year && item.year.toLowerCase().includes(filterText.toLowerCase())|| 
    item.test && item.test.toLowerCase().includes(filterText.toLowerCase())

  );

const columnsWithEdit = [
  ...columns,
  {
    name: 'Edit',
    cell: row => (
      <Dropdown_actions DataDropdown={DataDropdown} />
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  }

];

  return (
    <>
<div className="card-shadow">
  <div className="card-body">
    <h5>{title}</h5>
    <p>{details}</p>

        <DataTable
          columns={columnsWithEdit}
          data={filteredItems}
          pagination
          paginationPerPage={5}
          paginationRowsPerPageOptions={[5, 10, 15]}
          className='dataTable custom-font-size'
        />
        
    </div> 
      </div>
    </>
  );
}
export default Datatable3;