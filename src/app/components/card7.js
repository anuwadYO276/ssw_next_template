
import React from 'react';
import CustomDropdown from './Dropdown_card7';

const Card7 = ({ title, description,TextHead1,TextHead2,data,DataDropdown }) => {
  return (
    <div className="card-shadow">
      <div className="card-body">

      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex flex-column">
          <h5 className="card-title m-0 me-2">{title}</h5>
          <small className="text-truncate text-muted">{description}</small>
        </div>
        <CustomDropdown DataDropdown={DataDropdown} />
      </div>
      
      <div className="row mb-3 mt-3">
      <div className="col-6">{TextHead1}</div>
      <div className="col-6" align="right">{TextHead2}</div>
      </div>

      {Object.keys(data).map(key => (
        <div className="row mb-2" key={key}>
          <div className="col-6">
            <div className="d-flex justify-content-start align-items-center">
              
              {data[key]['avatar'] && 
                <div className="avatar me-2">
                  <img src={data[key]['avatar']} alt="Avatar" className="rounded-circle"/>
                </div>
              }
              
              <div className="d-flex flex-column">
                <h6 className="mb-0 text-truncate">{data[key]['name']}</h6>
                <small className="text-truncate text-muted">{data[key]['position']}</small>
              </div>
            </div>
          </div>
          <div className="col-6" align="right">{data[key]['score']}</div>
        </div>
      ))}

    </div>
    </div>
  );
};

export default Card7;

