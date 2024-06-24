"use client";
import React, { useEffect, useState } from 'react';
import Card1 from '../components/Card1';

export default function Page() {
 
  return (
    <>  
    <br/><br/><br/><br/>
    <div className="container">

    <div className='mb-3'>
    <Card1 
      title="Card 1" 
      text="Some quick example text to build on the card title and make up the bulk of the card's content."
    />
  </div>

<div className='mb-3'>
    <Card1 
      title="Card 1" 
      text="Some quick example text to build on the card title and make up the bulk of the card's content."
    />
</div>
    </div>
    
    
    </>
  );
}