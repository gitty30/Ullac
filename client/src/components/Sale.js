import React from 'react'
import './Sale.css';
import Salebanner from "./reso/jennie-sale.png"
const Sale = () => {
  return (
    <div className="Sale">
      <div className="Sale-banner">
        <h1>
          20SS <span>SEASON </span>
          OFF
        </h1>
        <img src={Salebanner} />
      </div>
    </div>
  );
}

export default Sale
