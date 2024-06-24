"use client";
import React, { useEffect, useState } from 'react';

export default function Page() {
 
  return (
    <div>
      <br/><br/><br/><br/>
      <h1>Page</h1>


<div className='container'>
 
<div className='row'>
<div className='col-md-4 mb-3'>
<div className="card mb-4">
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Cras justo odio</li>
        <li className="list-group-item">Dapibus ac facilisis in</li>
        <li className="list-group-item">Vestibulum at eros</li>
      </ul>
    </div>

</div>
<div className='col-md-4 mb-3'>
<div className="card p-3 text-end">
      <figure className="mb-0">
        <blockquote className="blockquote">
          <p>A well-known quote, contained in a blockquote element.</p>
        </blockquote>
        <figcaption className="blockquote-footer mb-0 text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </figcaption>
      </figure>
    </div>

</div>
<div className='col-md-4 mb-3'>
<div className="card h-100">
      <div className="card-header d-flex align-items-center justify-content-between">
        <h5 className="card-title m-0 me-2">For Business Sharks</h5>
        <div className="dropdown">
          <button className="btn p-0" type="button" id="purchaseItemList" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="bx bx-dots-vertical-rounded"></i>
          </button>
          <div className="dropdown-menu dropdown-menu-end" aria-labelledby="purchaseItemList">
            <a className="dropdown-item" href="javascript:void(0);">Select All</a>
            <a className="dropdown-item" href="javascript:void(0);">Refresh</a>
            <a className="dropdown-item" href="javascript:void(0);">Share</a>
          </div>
        </div>
      </div>
      <div className="card-body">
        <p>Here, i focus ona range of items and featured that we use in life without them</p>
        <h6>Basic price is $30</h6>
        <form id="businessForm" onsubmit="return false">
          <div className="form-check custom-option custom-option-basic mb-3">
            <label className="form-check-label custom-option-content" for="brandingCheckbox">
              <input className="form-check-input" type="checkbox" id="brandingCheckbox"/>
              <span className="custom-option-header pb-0">
                <span className="fw-medium">Branding</span>
                <span className="badge bg-label-success">+ $30</span>
              </span>
            </label>
          </div>
          <div className="form-check custom-option custom-option-basic mb-3 checked">
            <label className="form-check-label custom-option-content" for="marketingCheckbox">
              <input className="form-check-input" type="checkbox" id="marketingCheckbox" checked=""/>
              <span className="custom-option-header pb-0">
                <span className="fw-medium">Marketing</span>
                <span className="badge bg-label-primary">+ $75</span>
              </span>
            </label>
          </div>
          <div className="form-check custom-option custom-option-basic mb-3 checked">
            <label className="form-check-label custom-option-content" for="appBuildingCheckbox">
              <input className="form-check-input" type="checkbox" id="appBuildingCheckbox"/>
              <span className="custom-option-header pb-0">
                <span className="fw-medium">App Building</span>
                <span className="badge bg-label-success">+ $125</span>
              </span>
            </label>
          </div>
          <div className="form-check custom-option custom-option-basic mb-3">
            <label className="form-check-label custom-option-content" for="seoCheckbox">
              <input className="form-check-input" type="checkbox" id="seoCheckbox"/>
              <span className="custom-option-header pb-0">
                <span className="fw-medium">SEO</span>
                <span className="badge bg-label-primary">+ $48</span>
              </span>
            </label>
          </div>
          <div className="d-flex justify-content-between mb-1">
            <span className="fw-medium">Vat Taxes</span>
            <span className="fw-medium">$24</span>
          </div>
          <div className="d-flex justify-content-between">
            <span className="fw-medium">Total Amount</span>
            <span className="h5 text-primary mb-0">$99</span>
          </div>
          <hr/>
          <div className="col-12 text-center">
            <button type="submit" className="btn btn-primary w-100 d-grid">Purchase</button>
          </div>
        </form>
      </div>
    </div>
</div>
</div> 
   
</div>


    </div>
  );
}