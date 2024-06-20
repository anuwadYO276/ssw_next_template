
import React from 'react';

const Card5 = ({ title, description,image,btnName,urlName,btnClass}) => {
  const buttonClasses = [btnClass, 'w-100', 'd-grid'].join(' ');
  return (
    <div className="card-shadow">
      <div className="card-body">

      <div className="bg-label-primary rounded-3 text-center mb-3 pt-4">
          {image && <img src={image} className="img-fluid w-60" alt={title} />}
        </div>

        <h3 className="pb-1">{title}</h3>
        <p className="small">{description}</p>
        
        <button type="button" className={buttonClasses}>{btnName}</button>
        

    </div>
    </div>
  );
};

export default Card5;

