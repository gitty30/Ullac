import React, { useState, useEffect } from "react";
import banner from "./reso/jewl-header.png";
import Loader from "./loader";
import axios from "axios";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import data from "../data.js"
import "./Accessories.css"
const Accessories = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [value, setValue] = useState("ACCESSORIES");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const getProd = async () => {
    try {
      console.log(value);
      setLoading(true);
      // const url = `https://fakestoreapi.com/products`;
      // const response = await axios.get(url);
      // const Data = await response.data;
      setProducts(data);
      setLoading(false);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProd();
  }, [value]);
  return (
    <>
      <div className="women">
        <div
          className="jewl-header"
          style={{
            minWidth: "32rem",
            minHeight: "40rem",
            // backgroundImage: "url(" + S1 + ")",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundImage: "url(" + banner + ")",
          }}
        >
          {/* <img src={banner} alt="banner" /> */}
        </div>

        <div className="section">
          <div className={isVisible ? "up filt" : "side filt"}>
            <FormatAlignLeftIcon
              onClick={() => setIsVisible(!isVisible)}
              className="filter-icon"
            />
            {/* <p>FILTER</p> */}

            {isVisible && (
              <div className="filter-menu">
                <button
                  value="ANKLETS"
                  onClick={(e) => setValue(e.target.value)}
                >
                  ANKLETS
                </button>
                <button value="BELTS" onClick={(e) => setValue(e.target.value)}>
                  BELTS
                </button>
                <button
                  value="BRACELETS"
                  onClick={(e) => setValue(e.target.value)}
                >
                  BRACELETS
                </button>
                <button
                  value="BANGLES"
                  onClick={(e) => setValue(e.target.value)}
                >
                  BANGLES
                </button>
                <button value="TOPS" onClick={(e) => setValue(e.target.value)}>
                  TOPS
                </button>
                <button
                  value="BROOCHES"
                  onClick={(e) => setValue(e.target.value)}
                >
                  BROOCHES
                </button>
                <button value="PINS" onClick={(e) => setValue(e.target.value)}>
                  PINS
                </button>
                <button
                  value="EARRINGS"
                  onClick={(e) => setValue(e.target.value)}
                >
                  EARRINGS
                </button>
                <button
                  value="NECKLACES"
                  onClick={(e) => setValue(e.target.value)}
                >
                  NECKLACES
                </button>
              </div>
            )}

            <MoreHorizIcon className="more" />
          </div>
          <ul className="no-of-prod">
            <li>{products.length + 3} </li>
            <li>20 </li>
          </ul>
          <div className="filer-head">
            <div
              className="heading"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "96%",
                // paddingBottom:"-5px"
              }}
            >
              <h3 style={{ marginLeft: "25px" }}>{value}</h3>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "13%",
                }}
              >
                <h5 style={{ fontSize: "2vh", cursor: "pointer" }}>SEARCH</h5>
                <h5 style={{ fontSize: "2vh", cursor: "pointer" }}>SORT</h5>
              </div>
            </div>
            <div className="top-prod">
              <div className="prod_item_top_men">
                <img src="https://cdn.shopify.com/s/files/1/0371/0504/1547/products/13210106.jpg?v=1675763587" />
                <div className="prod-detail">
                  <p className="title">Milky midi Dress</p>
                  <p className="price">&#8364;41</p>
                </div>
              </div>
              {/* <div className="prod_item_top">
                <img src="https://cdn.shopify.com/s/files/1/0371/0504/1547/products/2515188.jpg?v=1675763592" />
                <div className="cart-icon">
                  <ShoppingCartOutlinedIcon className="cart" />
                  <FavoriteBorderOutlinedIcon className="fav" />
                </div>
              </div> */}
              <div className="prod_item_top_men">
                <img src="https://cdn.shopify.com/s/files/1/0371/0504/1547/products/090912183.jpg?v=1675763566" />
                <div className="prod-detail">
                  <p className="title">Light blue fit jeans</p>
                  <p className="price">&#8364;23</p>
                </div>
              </div>
            </div>
            <div className="products">
              {products.map((item, index) => (
                <div key={item.id} className="prod_item_wom">
                  <img src="https://cdn.shopify.com/s/files/1/0371/0504/1547/products/2mood-13-06-202179460_1.jpg?v=1675763599" />
                  <div className="cart-icon">
                    <ShoppingCartOutlinedIcon className="cart" />
                    <FavoriteBorderOutlinedIcon className="fav" />
                  </div>
                  <div className="item-data-women">
                    <h3>{item.title.slice(0, 24)}</h3>
                    <h5>
                      <span>&#8364;</span>
                      {item.price}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accessories;
