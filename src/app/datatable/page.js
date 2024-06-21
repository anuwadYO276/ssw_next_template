"use client";
import React, { useEffect, useState } from 'react';
import Datatable1 from '../components/datatable1';
import Datatable2 from '../components/datatable2';
import Datatable3 from '../components/datatable3';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faEye, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function Datatable() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ดึงข้อมูลจาก API
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const columns = [
    {
      name: 'Title',
      selector: row => row.title,
      sortable: true,
    },
    {
      name: 'Body',
      selector: row => row.body,
      sortable: true,
    },
    {
      name: 'User ID',
      selector: row => row.userId,
      sortable: true,
    },
  ];

  const headers = [
    { label: 'Title', key: 'title' },
    { label: 'body', key: 'body' },
    { label: 'User ID', key: 'userId' },
  ];

  const DataDropdown = {
    1: {
      'ItemName': 'View',
      'href': '#/action-1', 
      'icon': faEye,  
    },
    2: {
      'ItemName': 'Edit',
      'href': '#/action-1', 
      'icon': faPenToSquare,   
    },
    3: {
      'ItemName': 'Delete',
      'href': '#/action-1',
      'icon': faTrash,    
    },
  }

  // const title = "Datatable Search";
  const details = "A lightweight, extendable, dependency-free javascript HTML table plugin.";
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <br /><br /><br /><br />
      <div className="container-fluid">
      <div className="mb-3">
        {/* <Datatable1 title="Datatable 1" details={details} columns={columns} data={data} headers={headers}/> */}
      </div>
      {/* <div className="mb-3">
        <Datatable2 
            title="Datatable 2" 
            details={details} 
            columns={columns} 
            data={data} 
            headers={headers}/>
      </div> */}
      <div className="mb-3">
        <Datatable3
            title="Table Basic" 
            details={details} 
            columns={columns} 
            data={data} 
            headers={headers}
            DataDropdown={DataDropdown}
          />
      </div>
      </div>
    </>
  );
}
