
import React from 'react';
import CustomDropdown from './Dropdown_card7';

const CardPea = ({ title, description,TextHead1,TextHead2,data,DataDropdown,average }) => {

  const getAvatarImage = (payStatus) => {
    if (payStatus == 1) {
      return "https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/icons/unicons/cc-success.png";
    } else {
      return "https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/icons/unicons/cc-warning.png";
    }
  };

  //สร้าง const แปลงวันที่เป็น วัน-เดือน-ปี จาก 2024-05-01
  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('th-TH', options);
  };

  const getStatusColor = (payStatus) => {
    if (payStatus == 1) {
      return "text-success-custom";
    } else {
      return "text-danger";
    }
  };


  return (
    <div className="card-shadow">
      <div className="card-body">

      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex flex-column">
          <h5 className="card-title m-0 me-2">{title} </h5>
          <small className="text-truncate text-muted">{description}({average})</small>
        </div>
        <CustomDropdown DataDropdown={DataDropdown} />
      </div>
      
      <div className="row mb-3 mt-3">
      <div className="col-6">{TextHead1}</div>
      <div className="col-6" align="right">{TextHead2}</div>
      </div>

      {
        data.map((item, index) => (

        <div className="row mb-3" key={index}>
          <div className="col-8">
            <div className="d-flex justify-content-start align-items-center">
            
             <div className="avatar me-2">
                    <img src={getAvatarImage(item.pay_status)} alt="Avatar" className="rounded-circle" />
              </div>

              <div className="d-flex flex-column">
                <h6 className="mb-0 text-truncate">{formatDate(item.bill_due_date)}</h6>
                <small className="text-truncate text-muted">{item.pay_status_name}</small>
              </div>
            </div>
          </div>
          <div  align="right" className="col-4" ><p className={getStatusColor(item.pay_status)}>{item.net_amount} บาท </p> </div>
        </div>
        ))
      }

    </div>
    </div>
  );
};

export default CardPea;

