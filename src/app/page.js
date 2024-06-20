"use client";
import React, { useEffect, useState } from 'react';
import Card3 from './components/card3';
import Card4 from './components/card4';


const data = {
  // labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
      borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
      borderWidth: 1,
      data: [300, 50, 100],
    },
  ],
};

export default function Home() {
  return (
    <>
    <br/><br/><br/><br/>

    <div className='container'>
    <div className="row">
    <div className="col-lg-6 mb-4">
      <Card3 
          title="Congratulations John! " 
          description="You have done 72% more sales today. Check your new badge in your profile."
          image="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/illustrations/man-with-laptop-light.png" 
      />  
    </div>
    
    <div className="col-lg-6 mb-4">
      <div className="row">
      <div className="col-lg-6 col-md-12 col-6 mb-4">
      
      <Card4
          title="8,258" 
          description="Total Orders"
          Chart="doughnut"
          data = {data}
          width={150}
          height={150}
      /> 
      </div>
      <div className="col-lg-6 col-md-12 col-6 mb-4">
      <Card4
          title="4,228" 
          description="Total Orders"
          Chart="line"
          data = {data}
          width={150}
          height={150}
      /> 
      </div>
      </div>
    </div>
    </div>
    </div>
   
    </>
  );
}
