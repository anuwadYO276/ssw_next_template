// components/card.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';

const Card6 = ({ title, description,price,TextPrice,image,btnName,btnClass,data,TextAlert}) => {
  const buttonClasses = [btnClass, 'w-100', 'd-grid'].join(' ');
  return (
    <div className="card-shadow card-transform">
      <div className="card-body">

        
<div className="row  mb-3">
<div className="col-2">
        {image && <img src={image} className="card-img-top mt-1" alt={title} />}
</div>
<div className="col-6">
    <div className="fw-bold">{title}</div>
    <small className="card-text">{description}</small>
</div>
<div className="col-4" align="right">
      <div className="fw-bold">{price}</div>
      <small className="card-text">{TextPrice}</small>
</div>
</div>

        <div className="row" align="center">
            {Object.entries(data).map(([key, value]) => {
              const [cardTitle, cardText] = Object.entries(value)[0];
              return (
                <div key={key} className="col-6 mb-2">
                  <div className="card-shadow">
                    <div className="card-body">
                      <h6 className="card-title fw-bold">{cardTitle}</h6>
                      <small className="card-text">{cardText}</small>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        <div className="alert alert-light mt-2" role="alert">
        <FontAwesomeIcon icon={faCreditCard} />  {TextAlert}
        </div>

            <button className={buttonClasses} type="button">{btnName}</button>

      </div>
    </div>
  );
};

export default Card6;
