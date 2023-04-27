import React from 'react'
import "./Cart.css";
import { remove } from '../store/cartSlice';
import { useSelector,useDispatch } from 'react-redux';
import CloseIcon from "@mui/icons-material/Close";
const Cart = () => {
  const products=useSelector(state=>state.cart)
  const dispatch=useDispatch();
  const removehd=(prod)=>{
      dispatch(remove(prod))
  }
  return (
    <div className="cart-head">
      <div className="blank"></div>
      <div className="cart-title">
        <h1>Your Cart</h1>
      </div>
      <div className="cart-items">
        <div className="prod-data">
          <h4>S.no</h4>
          <h4 className="prod-head">Products</h4>
          <h4 style={{ paddingLeft: "10vh" }}>Price</h4>
          <h4>Remove</h4>
        </div>
        <div className="cart-array">
          {products.map((item, no) => (
            <div key={item.id} className="cart-prods">
              <h4>0{no + 1}</h4>
              <div className="cart-desc">
                <img src="https://cdn.shopify.com/s/files/1/0371/0504/1547/products/2mood-13-06-202179460_1.jpg?v=1675763599" />
                <h5 style={{ width: "35vh", color: "gray" }}>{item.title}</h5>
              </div>
              <div style={{ display: "flex" }}>
                <h4 style={{ fontWeight: "600" }}>
                  <span>&#8364;</span>
                  {item.price}
                </h4>
              </div>

              <CloseIcon onClick={()=>removehd(item.id)} />
            </div>
          ))}
        </div>
      </div>
      <div style={{height:"13vh",marginRight:"20px"}}>
        <button className="checkout">Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
