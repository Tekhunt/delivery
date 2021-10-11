import './style.css';
// import HeaderBtn from "./Components/HeaderBtn";
// import Caption from './Components/Caption';
// import SearchBar from './Components/SearchBar';
import Navbar from './Components/Navbar';
import Cargo from './Components/Cargo';
import ServiceSection from './Components/ServiceSection';
import Route from './Components/Route';
import SelectService from './Components/SelectService';
import Heading from './Components/Heading';

function App() {
  return (
    <div className="App">
     <Navbar />
     <div className="bg-wrapper">
      <Heading />
      <SelectService />
     <Route />
     <Cargo />
     <ServiceSection />
     </div>
    </div>
  );
}

export default App;
