
import React from 'react';

const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString('th-TH', options);
};

const iconcheckStatus = (status) => {
  if (status == 1) {
    return "https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/icons/unicons/cc-success.png";
  }
  return 'https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/icons/unicons/paypal.png';
};

const textcheckStatus = (status) => {
  if (status == 1) {
    return "text-success mb-0";
  }
  return 'text-danger mb-0';
};

const Card3 = (props) => {

  
  return (
    <>

      {props.data.map((item, index) => (
       <li className="d-flex mb-4 pb-1" key={index}>
       <div className="avatar flex-shrink-0 me-3">
       <img src={iconcheckStatus(item.pay_status)} alt="User" className="rounded"/>
       </div>
       <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
         <div className="me-2">
           
         <h6 className="mb-0">{formatDate(item.bill_due_date)}</h6>
           <small className="text-muted d-block mb-1">{item.pay_status_name}</small>
         </div>
         <div className="user-progress d-flex align-items-center gap-1">
           <h6 className={textcheckStatus(item.pay_status)}>{item.total_amount}</h6> <span className="text-muted">บาท</span>
         </div>
       </div>
      </li>
      ))}
    </>
  );
};

export default Card3;
