import React from "react";
import "./Header.css";
import black from'./reso/color.png';
import SearchIcon from "@mui/icons-material/Search";
import FaceOutlinedIcon from "@mui/icons-material/FaceOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
const Header = () => {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
          <div className="container-fluid container1">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto menu">
                <li className="nav-item item">
                  <a className="nav-link active" aria-current="page" href="/">
                    HOME
                  </a>
                </li>
                <li className="nav-item item">
                  <a className="nav-link" href="/">
                    WOMEN
                  </a>
                </li>
                <li className="nav-item item">
                  <a className="nav-link" href="/">
                    MEN
                  </a>
                </li>
                <li className="nav-item item">
                  <a className="nav-link " href="/">
                    ACCESSORIES
                  </a>
                </li>
                <li className="nav-item item">
                  <a className="nav-link " href="/">
                    SALE
                  </a>
                </li>
              </ul>

              <div className="logo">
                <img alt="img" src={black} />
              </div>
              <form className="d-flex icons" role="search">
                <SearchIcon className="icon" />
                <FaceOutlinedIcon className="icon" />
                <ShoppingBagOutlinedIcon className="icon" />
              </form>
            </div>
          </div>
        </nav>
      </>
    );
};

export default Header;
      //  <div classNameName="menu">
      //     <a classNameName="home item" href="/">
      //       HOME
      //     </a>
      //     <a classNameName="women item" href="/women">
      //       WOMEN
      //     </a>
      //     <a classNameName="men item" href="/men">
      //       MEN
      //     </a>
      //     <a classNameName="accessories item" href="/accessories">
      //       ACCESSORIES
      //     </a>
      //     <a classNameName="sale item" href="/sale">
      //       SALE
      //     </a>
      //   </div>
      //   <div classNameName="logo">
      //     <img alt="img" src={black} />
      //     {/* <h1>ULLAC</h1> */}
      //   </div>
      //   <div classNameName="icons">
      //     <SearchIcon classNameName="icon" />
      //     <FaceOutlinedIcon classNameName="icon" />
      //     <ShoppingBagOutlinedIcon classNameName="icon" />
      //   </div>