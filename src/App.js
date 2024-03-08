import logo from './logo.svg';
import './App.css';
import Navigation from './Customer/components/Nav/Navigation';
import Homepage from './Customer/Pages/HomePage/Homepage';
import Footer from './Customer/components/Footer/Footer';

function App() {
  return (
    <div className="">
    <Navigation/>
    <div>
      <Homepage/>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
