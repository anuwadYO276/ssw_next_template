// components/card.js

import React from 'react';

const Card2 = ({ title, description,imageUrl,price }) => {
  return (
    <div className="card">
      {imageUrl && <img src={imageUrl} className="card-img-top" alt={title} />}
      <div className="card-body">
      <h5 class="card-title">{title}</h5>
      <p class="card-text">{description}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
  );
};

export default Card2;
