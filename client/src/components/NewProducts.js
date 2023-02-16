import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./loader";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Salebanner from "./reso/Sale-banner.jpg";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import "./NewProducts.css";

const NewProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading,setLoading]=useState(false);



   var intervalId1 = setInterval(function () {
     const date = new Date();
     document.getElementById("timer").innerHTML = date.toLocaleTimeString();
   }, 1000);

  const getProd = async () => {
    try {
      setLoading(true)
      const url = `https://fakestoreapi.com/products`;
      const response = await axios.get(url);
      const Data = await response.data;
      console.log(response.data)
      setProducts(Data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };   
  useEffect(() => {
    getProd();
  }, []);
  return (
    <>
      <div className="prod-row">
        <h2 className="best-sell">Best-Selling</h2>
        {loading ? (
          <Loader />
        ) : (
          <div className="wrapper">
            {console.log(products)}
            {products.map(
              (item, index) =>
                index < 5 && (
                  <div key={item._id} className="prod_item">
                    <img src="https://cdn.shopify.com/s/files/1/0371/0504/1547/products/2mood-13-06-202179460_1.jpg?v=1675763599" />
                    <div className="cart-icon">
                      <ShoppingCartOutlinedIcon className="cart" />
                      <FavoriteBorderOutlinedIcon className="fav" />
                    </div>
                    <div className="item-data">
                      <h3>{item.title.slice(0, 24)}</h3>
                      <h5>
                        <span>&#8364;</span>
                        {item.price}
                      </h5>
                    </div>
                  </div>
                )
            )}
          </div>
        )}
      </div>
      <div className="sale-banner">
        <img src={Salebanner} />
        <div className="banner-timer">
          <h1>SALE ENDS IN</h1>
          <span class="timer th" id="timer"></span>
          <h4>SHOP NOW</h4>
        </div>
      </div>
      <div className="prod-row">
        <h2 className="best-sell">New Arriavls</h2>
        {loading ? (
          <Loader />
        ) : (
          <div className="wrapper">
            {console.log(products)}
            {products.map(
              (item, index) =>
                index < 5 && (
                  <div key={item._id} className="prod_item">
                    <img src="https://images.asos-media.com/products/lola-may-tie-back-waist-crop-top-in-brown/201447754-1-brown?$n_480w$&wid=476&fit=constrain" />
                    <div className="cart-icon">
                      <ShoppingCartOutlinedIcon className="cart" />
                      <FavoriteBorderOutlinedIcon className="fav" />
                    </div>
                    <div className="item-data">
                      <h3>{item.title.slice(0, 24)}</h3>
                      <h5>
                        <span>&#8364;</span>
                        {item.price}
                      </h5>
                    </div>
                  </div>
                )
            )}
          </div>
        )}
        
      </div>
    </>
  );
};

export default NewProducts;
