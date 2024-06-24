
import React from 'react';
import Card3 from './Card3';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

const Card2 = (props) => {
  return (
    <>

    {/* <pre>{JSON.stringify(props.data, null, 2)}</pre> */}
    
      <div className="row">
      {props.data.map((item, index) => (
        <div className="col-lg-6" key={index}>


      <div className="card-shadow h-100">
      <div className="card-header-custom d-flex align-items-center justify-content-between">
      <div className="card-title mb-0">
        <h5 className="m-0 me-2">{item.house_no}</h5>
        <small className="text-muted">{item.net_amount_average}</small>
      </div>
      <FontAwesomeIcon icon={faEllipsisVertical} />
       

      </div>
      <div className="card-body">
        <ul className="p-0 m-0">
          <Card3 data={item.payment} />
        </ul>
      </div>
    </div>
        </div>
      ))}
      </div>
    </>
  );
};

export default Card2;
