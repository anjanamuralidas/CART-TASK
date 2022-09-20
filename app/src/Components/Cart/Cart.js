import React, { useState, useEffect } from 'react'
import './Cart.css'

import { Delete, Edit } from '@mui/icons-material/';
import { Button, IconButton, TextField, Item } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Cart() {
  const LOCAL_STORAGE_KEY = "products";
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [])

  const [bag, setBag] = useState([])
  const [book, setBook] = useState([])
  const [sanitizer, setSanitizer] = useState([])
  const [booksdiscount, setBooksdiscount] = useState('');
  const [bagdiscount, setBagdiscount] = useState('');
  const [sandiscount, setSandiscount] = useState('');
  const [promos, setPromos] = useState([]);
  const [total, setTotal] = useState(0);
  const [grandtotal, setGrandtotal] = useState(0);
  const [proffer, setProffer] = useState(0)

  const checkout = () => {

    toast("Products Will Reach You Soon")
  }
  const addpromo = (event) => {
    console.log(promos);
    if (promos.code === 'PRIME123') {
      if (proffer != 0) {
        toast("Coupon  already applied")
      } else {
        setProffer(123)
      }

    } else {

    }

  }



  useEffect(() => {
    let total = 0;
    cart.forEach(item => {
      total += item.price
      setTotal(total)
    })
    console.log(total);
  }, []);



  useEffect(() => {
    const bg = cart.filter((category) => {
      return category.category === "bag"

    })
    setBag(bg);
  }, []);
  useEffect(() => {
    let bgtotal = 0
    bag.forEach((item) => {
      bgtotal += item.price
      console.log(bgtotal);
      if (bgtotal > 1500) {
        const ltprice = bgtotal;
        console.log(ltprice);
        setBagdiscount(ltprice);

      } else {

      }

    })
    //  console.log(bagdiscount);

  }, [bag]);

  useEffect(() => {
    const bk = cart.filter((category) => {
      return category.category === "book"

    })
    setBook(bk)
  }, []);
  useEffect(() => {
    let bktotal = 0
    book.forEach((item) => {
      bktotal += item.price

      if (bktotal > 500) {
        const bprice = bktotal * 10 / 100;
        console.log(bprice);
        setBooksdiscount(bprice);

      } 

    })
    console.log(booksdiscount);

  }, [book]);


  useEffect(() => {
    const sn = cart.filter((category) => {
      return category.category === "sanitizer"

    })
    setSanitizer(sn)
  }, []);
  useEffect(() => {
    let santotal = 0
    book.forEach((item) => {
      santotal += item.price

      if (santotal > 3000) {
        const snprice = santotal - 100;

        setSandiscount(100)

      } 
    })
    // console.log(sandiscount);

  }, [sanitizer]);



  const promo = (event) => {
    const name = event.target.name
    const value = event.target.value
    setPromos({ ...promos, [name]: value })
    // console.log(promos);
  }
  useEffect(() => {
    const cost = total - sandiscount - booksdiscount - bagdiscount - proffer
    setGrandtotal(cost)

  }, [booksdiscount, sandiscount, bagdiscount, proffer])

  const remove = (uid) => {
    console.log(uid);
    const newList = cart.filter((crt) => {
      return crt.uid !== uid
    }
    );
    setCart(newList);
    window.location.reload(false);

  }
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cart))
  }, [cart]);

  console.log(total,booksdiscount,sandiscount);



  return (
    <>
      <div>
        <h3 id='hh'>YOUR CART</h3>
        {
          cart.map((crt) =>
            <div id='cd1' className="card">
              <div className="card-body">
                <img id="im2" src={crt.images} alt='image'></img>
                <p id='pp1'>{crt.name}&nbsp; &nbsp;₹{crt.price}</p>

                <div>
                  <IconButton id="dlt" aria-label="delete" onClick={() => remove(crt.uid)} >
                    <Delete />
                  </IconButton>

                </div>
              </div>
            </div>
          )}

        <div className='last'>
        <div className="row">
            <div className="gTotal">Total: {total}</div>
          </div>
          <div className='row'>
            {total > 10000 ? <th className='applyPromo'> <TextField size='small' type="text" name='code' label='Apply promo Code' onChange={promo} /><Button id='bbt' type='Submit' onClick={addpromo}> Submit</Button></th> : ""}
          </div>
          <div className="row">
            {booksdiscount != 0 ? <th className='discount'>  Book Discount:{booksdiscount} <span className='totalSpan'></span></th> : ""}
          </div>
          <div className="row">
            {sandiscount != 0 ? <th className='discount'>  Sanitizer Discount:{sandiscount} <span className='totalSpan'></span></th> : ""}
          </div>
          <div className="row">
            {bagdiscount != 0 ? <th className='discount'>  Bag Discount:{bagdiscount} <span className='totalSpan'></span></th> : ""}
          </div><br />

          <div className="row">
          {sandiscount != 0 || booksdiscount != 0 ? <div className="gTotal">Grand Total: {grandtotal}</div> : ""}

          </div>
          <div className="row">
            <th className='finalButton'>  <Button id="bbt1" variant='contained' onClick={checkout}>Check Out</Button></th>
          </div>
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
    </>
  )

}

export default Cart