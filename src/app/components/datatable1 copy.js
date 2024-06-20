"use client";
import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { CSVLink } from 'react-csv';

const Datatable1 = ({ title, columns, data, details, headers }) => {
  const [filterText, setFilterText] = useState('');
  const [dataItems, setDataItems] = useState(data);
  const [editing, setEditing] = useState(null);

  const filteredItems = dataItems.filter(
    item => item.title && item.title.toLowerCase().includes(filterText.toLowerCase()) ||
      item.year && item.year.toLowerCase().includes(filterText.toLowerCase()) ||
      item.test && item.test.toLowerCase().includes(filterText.toLowerCase())
  );

  const handleEdit = (id) => {
    setEditing(id);
  };

  const handleSave = (id, updatedData) => {
    setDataItems(prevData =>
      prevData.map(item => (item.id === id ? { ...item, ...updatedData } : item))
    );
    setEditing(null);
  };

  const columnsWithEdit = [
    ...columns,
    {
      name: 'Edit',
      cell: row => (
        editing === row.id ? (
          <button
            className="btn btn-success"
            onClick={() => handleSave(row.id, { title: 'New Title', year: '2020', test: 'New Test' })}
          >
            Save
          </button>
        ) : (
          <button
            className="btn btn-primary"
            onClick={() => handleEdit(row.id)}
          >
            Edit
          </button>
        )
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
          <div className="row">
            <div className="col-sm-6 col-md-10 mb-3">
              <CSVLink data={filteredItems} headers={headers} filename="movie_list.csv">
                <button className="btn btn-primary">Export CSV</button>
              </CSVLink>
            </div>
            <div className="col-sm-6 col-md-2 mb-3">
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
            columns={columnsWithEdit}
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

export default Datatable1;
