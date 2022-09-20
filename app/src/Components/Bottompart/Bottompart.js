import React from 'react'
import './Bottompart.css';
import {AddLocation,Call,Email,Facebook,Instagram,Twitter}  from '@mui/icons-material/';

function Bottompart() {
  return (
    <>
    <div id='btm'>
        <div id='dd1'>
            <p id='p1'><b>SHOP CART</b></p>
            <p id='p3'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
        </div>
        <div id='dd2'>
            <p id='p11'><b>MENU</b></p>
            <p id='p31'>Shop</p>
            <p id='p32'>About</p>
            <p id='p33'>Journal</p>
            <p id='p34'>Contact Us</p>
        </div>
        <div id='dd3'>
            <p id='p11'><b>HELP</b></p>
            <p id='p31'>Shipping Information</p>
            <p id='p32'>Returns & Exchange</p>
            <p id='p33'>Terms & Conditions</p>
            <p id='p34'>Privacy Policy</p>
        </div>
        <div id='dd4'>
            <p id='p11'><b>HAVE A QUESTIONS?</b></p>
            <p id='p31'><AddLocation/>203 Fake St. Mountain<br/> View, San Francisco,<br/> California, USA</p>
            <p id='p32'><Call/>9633341895</p>
            
        </div>
        <div id='dd6'>
            <p id='p11'><Facebook/></p>
            <p id='p31'><Instagram/></p>
            <p id='p32'><Twitter/></p>
            <p id='p33'><Email/></p>
        </div>
    </div>
    <div id='footer'>
        <footer >Copyright ©2022 All rights reserved </footer>

    </div>
    </>
  )
}

export default Bottompart