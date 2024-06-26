import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { CSVLink } from 'react-csv';
import SpinKit from '../components/SpinKit';

const DataTable1 = ({ columns, csvHeaders, data, loading, search, setSearch }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [clientRendered, setClientRendered] = useState(false);

  useEffect(() => {
    setClientRendered(true);
  }, []);

  useEffect(() => {
    const lowercasedFilter = search.toLowerCase();
    const filteredData = data.filter(item => {
      return Object.keys(item).some(key =>
        item[key].toString().toLowerCase().includes(lowercasedFilter)
      );
    });
    setFilteredData(filteredData);
  }, [search, data]);




  return (
    <>
      <div className="card">  
        <div className="card-header">
          <h4>DataTable</h4>
        </div>
        <div className="card-body">
          <div className="row mb-3">
            <div className="col-md-2">
              Search:
              <input
                type="search"
                className="form-control"
                placeholder="Search..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
            <div className="col-md-10 text-end">
              <div align="right" className='mt-4'>
                {clientRendered && (
                  <CSVLink
                    data={filteredData}
                    headers={csvHeaders}
                    filename="data.csv"
                    className="btn btn-success"
                  >
                    Export CSV
                  </CSVLink>
                )}
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              Total Records: {data.length}
            </div>
            <div className="col-md-6 text-end">
              Filtered Records: {filteredData.length}
            </div>
          </div>
          {loading ? (
            <SpinKit />
          ) : (
            <DataTable
              columns={columns}
              data={filteredData}
              pagination
              highlightOnHover
              pointerOnHover
              // className='data-table-custom'
            />
          )}
        </div>
      </div>
    </>
  );
};

export default DataTable1;
