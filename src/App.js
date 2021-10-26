import logo from './logo.svg';
import './App.css';
import Nav from './component/Nav';
import Login from './component/Login';
import Namelist from './component/Namelist';
import Productlist from './component/Productlist';
import Customer from './component/Customer.js';
import FuncCustmoer from './component/FuncCustmoer';


function App() {
  return (
    <div className="App">
      <Nav />
    <Namelist/>
    <Productlist />
    <Customer />
    <FuncCustmoer/>

    </div>
  );
}

export default App;
