"use client";
import React, { useState } from 'react';
import Datatable1 from '../components/datatable1';
import Datatable2 from '../components/datatable2';

export default function Datatable() {



  
  const dataa = [
    { id: 1, title: 'Conan the Barbarian', year: '1982', test: 'aniw' },
    { id: 2, title: 'Batman Begins', year: '2005', test: 'dcl' },
    { id: 3, title: 'A Beautiful Mind', year: '2001', test: 'sss' },
  ];
  
  const columnsa = [
    {
      name: 'Title',
      selector: row => row.title,
      sortable: true,
    },
    {
      name: 'Year',
      selector: row => row.year,
      sortable: true,
    },
    {
      name: 'test',
      selector: row => row.test,
      sortable: true,
    },
  ];

  return (
    <>
      <br/><br/><br/><br/>
      <div className="container-fluid">
        
        {/* <Datatable1 title="ssss" columns={columnsx} data={datax}/> */}
        <Datatable2 title="Datatable Search" details="A lightweight, extendable, dependency-free javascript HTML table plugin."columns={columnsa} data={dataa} />
      </div>
    </>
  );
}
