import React from 'react'
import './Topbar.css'
import { Link } from 'react-router-dom';
import { Search } from '@mui/icons-material/';
import {ShoppingCart} from '@mui/icons-material/';


function Topbar() {
  return (
    <>
      <div id='tpbr'>
        <div>
          <img id='logo' src="/assets/logo.jpg" alt='image' />
        </div>
        
      </div>
      <div >
      
        <nav id='nav'>
        
          <Link id='a1' to={'/Mainpage'}>HOME</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link id='a2' to={'/About'}>ABOUT</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link id='a3' to={'/product'}>PRODUCT</Link>&nbsp;&nbsp;
          <Link  to={'/cart'}><ShoppingCart id='a4'/></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


        </nav>
      </div>
    </>
  )
}

export default Topbar