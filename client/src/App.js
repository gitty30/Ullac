import react,{useState,useEffect} from 'react';
import "./App.css";
import Header from "./components/Header";
import Carasoul from "./components/Carasoul";
import NewProducts from "./components/NewProducts";
import Women from "./components/Women";
import Men from './components/Men';
import Accessories from './components/Accessories';
import Footer from "./components/Footer";
import Sale from './components/Sale';
import Login from './components/Login';
import Singup from './components/Singup';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import cars from "./components/reso/cars1.jpg";
function App() {
  const [isSolid, setIsSolid] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    setIsSolid(window.scrollY > 50);
  };
    
  return (
    <div className="page">
      <BrowserRouter>
        <header
          style={{
            backgroundColor: isSolid ? "white" : "transparent",
            transition: "background-color 0.5s ease",
            top: "0px",
          }}
        >
          <Header />
        </header>
        <Routes>
          <Route path="/" element={[<Carasoul />, <NewProducts />]} />
          <Route path="/Women" element={<Women />} />
          <Route path="/Men" element={<Men />} />
          <Route path="/Accessories" element={<Accessories />} />
          <Route path="/Sale" element={<Sale />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Singup/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
