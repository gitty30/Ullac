import React,{useState} from 'react'

import jennie2 from "./reso/jennie2.jpg";
import img3 from "./reso/imag3.png";
import rose2 from "./reso/rose2.jpg";
import S1 from "./reso/S1.jpeg";
import lisa from './reso/lisa.jpeg';
import jiso from "./reso/jisoo.jpg";
import './Carasoul.css';
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
const Carasoul = () => {
  const SliderData = [
    {
      img: S1,
      head: "New Arrivals",
      link1: "WOMEN COLLECTION",
      link2: "MEN COLLECTION",
    },
    { img: jennie2, head: "ULLAC Fashion", link1: "SHOP NOW" },
    { img: rose2, head: "Women's accessories", link1: "SHOP NOW" },
  ];
// const [current, setCurrent] = useState(0);
//   const length = SliderData.length;

//   const nextSlide = () => {
//     setCurrent(current === length - 1 ? 0 : current + 1);
//   };

//   const prevSlide = () => {
//     setCurrent(current === 0 ? length - 1 : current - 1);
//   };

//   if (!Array.isArray(SliderData) || SliderData.length <= 0) {
//     return null;
//   }
// #f0f0f0
  return (
    // <div className="carasoul">
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide carasoul1 carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
          
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={S1} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={jennie2} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={rose2} className="d-block w-100 " alt="..." />
        </div>
      </div>
      {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button> */}
    </div>
    // </div>
  );
}

export default Carasoul
