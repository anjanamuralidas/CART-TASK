import React from 'react'
import Bottompart from '../../Components/Bottompart/Bottompart';
import Center from '../../Components/Center/Center'
import Topbar from '../../Components/Topbar/Topbar'
import {Products} from "../../dummydata.js";

function Mainpage() {
  return (
    <>
    <div>
        <Topbar/>
    </div>
    <div>
    {
            Products.map((p)=>(<>{console.log(p)}
                <Center key={p.id} products={p}/>
                </>
            ))
          }
    </div>
    <div>
      <Bottompart/>
    </div>
    </>
  )
}

export default Mainpage