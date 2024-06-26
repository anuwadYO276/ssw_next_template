
import React from 'react';


const Card1 = (props) => {
  return (
    <>
    <div className="card">
      <div className="d-flex align-items-end row">
        <div className="col-sm-7">
          <div className="card-body">
            <h5 className="card-title text-primary">{props.title}</h5>
            <p className="mb-4">{props.text}</p>

            <button className={props.btn}>{props.button}</button>
          </div>
        </div>
        <div className="col-sm-5 text-center text-sm-left">
          <div className="card-body pb-0 px-0 px-md-4">
            {props.img && <img src={props.img} height="140" alt="View Badge User" />}
            {/* <img src="../../assets/img/illustrations/man-with-laptop-light.png" height="140" alt="View Badge User" data-app-light-img="illustrations/man-with-laptop-light.png" data-app-dark-img="illustrations/man-with-laptop-dark.png"> */}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Card1;
