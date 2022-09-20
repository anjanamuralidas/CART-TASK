import React, { useState, useEffect } from 'react'
import Bottompart from '../../Components/Bottompart/Bottompart'
import { v4 as uuidv4 } from 'uuid';
import Topbar from '../../Components/Topbar/Topbar'
import { task } from "../../dummydata.js";
import './Productpage.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Productpage() {
  const LOCAL_STORAGE_KEY = "products";
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [])
  const [bagtotal, setBagtotal] = useState();

  const add = (id) => {
    const pdt = task.filter((productdetails) => {
      return productdetails.id === id

    })
    console.log(pdt[0].category);
   
if(pdt[0].category==="bag"){
    let bgtotal = 0
    bagtotal.forEach((item) => {
      bgtotal += item.price

      setBagtotal(bagtotal)

    })
    console.log(bgtotal);
    if (bgtotal < 1500) {
      const uid = uuidv4()
      const flt = pdt[0];
      Object.assign(flt, { uid });
      console.log(uid)
      console.log(flt);
      setProducts([...products, { ...flt }])

    } else {
      toast("can't add products")

    }
  }
  else{
 const uid=uuidv4()
    const flt=pdt[0];
    Object.assign(flt, {uid});
    console.log(uid)
    console.log(flt);
    setProducts([...products,{...flt}])
  }





  }
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(products))
  }, [products]);

  useEffect(() => {
    const bgtt = products.filter((bagdata) => {
      return bagdata.category === "bag"
    })
    setBagtotal(bgtt)
    console.log(bgtt);


  }, [products]);


  return (
    <>
      <div>
        <Topbar />
      </div>
      <div>
        {/* {
            task.map((p)=>(<>{console.log(p)}
                <Product key={p.id} data={p}  />
                </>
            ))
          } */}
        {
          task.map((p) =>

            <div id='center'>
              <div id="pro" className='col-sm-3'>
                <img id='im' src={p.images} alt='image' />
                <p id='pdt'> {p.name}</p>
                <p id='price'>{p.price}</p>
                <button id='btn' onClick={() => add(p.id)} >ADD TO CART</button>
              </div>
              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />


            </div>

          )
        }


      </div>
      <div>
        <Bottompart />
      </div>
    </>
  )
}

export default Productpage