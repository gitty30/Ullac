import './App.css';
import Header from './components/Header';
import Carasoul from './components/Carasoul';
import NewProducts from './components/NewProducts';
import Footer from './components/Footer';
import cars from "./components/reso/cars1.jpg";
function App() {

  return (
    <div className="page">
      <header>
        <Header />
      </header>
      <Carasoul />
      <NewProducts/>
      <Footer/>
    </div>
  );
}

export default App;
