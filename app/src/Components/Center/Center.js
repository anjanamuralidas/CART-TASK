import React from 'react'
import './Center.css'

function Center({products}) {
  return (
    <>
    <div id='center'>
        <div id="pro" className='col-sm-3'>
            <img id='im' src={products.images} alt='image'/>
            <p id='pdt'> {products.name}</p>
            <p id='price'>{products.price}</p>
            <button id='btn1'>view</button>
        </div>


        
    </div>
    </>
  )
}

export default Center