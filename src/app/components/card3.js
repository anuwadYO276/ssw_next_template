// components/card.js

import React from 'react';

const Card3 = ({ title, description,image}) => {
  return (
    <div className="card-shadow">
    <div className="d-flex align-items-end row">
    <div className="col-sm-7">
    <div className="card-body">
    <h3 className="card-title text-primary">{title} 🎉</h3>
      <p className="mb-4">{description}</p>
      <button type="button" className="btn btn-sm btn-primary">View Badges</button>
      
    </div>

    </div>
    <div className="col-sm-5 text-center text-sm-left">
    <div className="card-body pb-0 px-0 px-md-4">
      <img src={image} height="165" alt="..." />
      </div>
    </div>
    </div>
    </div>
  );
};

export default Card3;
