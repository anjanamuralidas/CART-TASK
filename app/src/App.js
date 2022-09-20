
import './App.css';
import React from 'react'
import{
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"

import Mainpage from './Pages/Mainpage/Mainpage';
import Aboutpage from './Pages/Aboutpage/Aboutpage';

import Productpage from './Pages/Productpage/Productpage';
import Cartpage from './Pages/Cartpage/Cartpage';

function App() {
  return (
    <div>
      <Router>
      <Routes>
          <Route path="/" element={<Mainpage/>}></Route>
          <Route path="/Mainpage" element={<Mainpage/>}></Route>
          <Route path="/About" element={<Aboutpage/>}></Route>
          <Route path="/product" element={<Productpage/>}></Route>
          <Route path="/cart" element={<Cartpage/>}></Route>
          

      </Routes>
      </Router>
    </div>
  );
}

export default App;
