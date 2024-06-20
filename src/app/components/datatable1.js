// Datatable1.js
"use client";
import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { CSVLink } from 'react-csv';
import EditModal from './EditModal_datatable1';
import Swal from 'sweetalert2';
const Datatable1 = ({ title, columns, data, details, headers }) => {
  const [filterText, setFilterText] = useState('');
  const [dataItems, setDataItems] = useState(data);
  const [editing, setEditing] = useState(null);
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({ title: '', body: '', userId: '' });

  const filteredItems = dataItems.filter(
    item => item.title && item.title.toLowerCase().includes(filterText.toLowerCase()) ||
      item.body && item.body.toLowerCase().includes(filterText.toLowerCase()) ||
      item.userId && item.userId.toString().includes(filterText.toLowerCase())
  );

  const handleEdit = (row) => {
    setEditing(row.id);
    setFormData({ title: row.title, body: row.body, userId: row.userId });
    setShow(true);
  };

  const handleSave = () => {
    setDataItems(prevData =>
      prevData.map(item => (item.id === editing ? { ...item, ...formData } : item))
    );
    setEditing(null);
    setShow(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const columnsWithEdit = [
    ...columns,
    {
      name: 'Edit',
      cell: row => (
        <button className="btn btn-primary" onClick={() => handleEdit(row)}>
          Edit
        </button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
    {
      name: 'Delete',
      cell: row => (
        <button
          className="btn btn-danger"
          onClick={() => handleDelete(row)}
        >
          Delete
        </button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    }

  ];


  const handleDelete = (row) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        setDataItems(prevData => prevData.filter(item => item.id !== row.id));
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  };

  return (
    <>
      <div className="card-shadow">
        <div className="card-body">
       

          
          <h5>{title}</h5>
          <p>{details}</p>
          <div className="row">
            <div className="col-sm-6 col-md-2 mb-3">
              <input
                type="text"
                placeholder="Search..."
                value={filterText}
                onChange={e => setFilterText(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="col-sm-6 col-md-10 mb-3">
              <CSVLink data={filteredItems} headers={headers} filename="movie_list.csv">
                <button className="btn btn-primary">Export</button>
              </CSVLink>
            </div>
          </div>
          <DataTable
            columns={columnsWithEdit}
            data={filteredItems}
            pagination
            paginationPerPage={5}
            paginationRowsPerPageOptions={[5, 10, 15]}
          />
        </div>
      </div>
      
      <EditModal 
        show={show} 
        handleClose={() => setShow(false)} 
        formData={formData} 
        handleChange={handleChange} 
        handleSave={handleSave} 
      />
    </>
  );
}

export default Datatable1;
