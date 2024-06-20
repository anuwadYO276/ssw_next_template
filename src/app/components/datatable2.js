"use client";
import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import Image from 'next/image';
import { CSVLink } from 'react-csv';

const Datatable2 = ({ title,columns, data,details,headers}) => {
  const [filterText, setFilterText] = useState('');
  const filteredItems = data.filter(
    item => item.title && item.title.toLowerCase().includes(filterText.toLowerCase()) || 
    item.year && item.year.toLowerCase().includes(filterText.toLowerCase())|| 
    item.test && item.test.toLowerCase().includes(filterText.toLowerCase())

  );



  return (
    <>
<div className="card-shadow">
  
  

<div className="card-body">
    <h5>{title}</h5>
    <p>{details}</p>
    
    <div className="row">
      <div className="col-sm-6 col-md-10  mb-3">
        <CSVLink data={filteredItems} headers={headers} filename="movie_list.csv" >
          <button className="btn btn-primary" > Export CSV  </button>
        </CSVLink>
      </div>
      <div className="col-sm-6 col-md-2  mb-3">
       
        <input
            type="text"
            placeholder="Search..."
            value={filterText}
            onChange={e => setFilterText(e.target.value)}
            className="form-control"
          />
      </div>
    </div>   
        
        <DataTable
          columns={columns}
          data={filteredItems}
          pagination
          paginationPerPage={5}
          paginationRowsPerPageOptions={[5, 10, 15]}
        />
        
    </div> 
      </div>
    </>
  );
}
export default Datatable2;