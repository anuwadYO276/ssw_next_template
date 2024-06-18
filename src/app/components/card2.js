// components/card.js

import React from 'react';

const Card2 = ({ title, description,imageUrl,price }) => {
  return (
    <div className="card card-transform">
      {/* {imageUrl && <img src={imageUrl} className="card-img-top" alt={title} />} */}
      <div className="card-body">

        
<div className="row">
<div className="col-2">
        {imageUrl && <img src={imageUrl} className="card-img-top" alt={title} />}
</div>
<div className="col-10 ">
    <div className="mt-0">
    <span>{title}</span>
    <h4>{price}</h4>
    </div>
</div>
</div>

      </div>
    </div>
  );
};

export default Card2;
