import React from 'react'
import About from '../../Components/About/About'
import Bottompart from '../../Components/Bottompart/Bottompart'
import Topbar from '../../Components/Topbar/Topbar'

function Aboutpage() {
  return (
    <>
    <div>
   <Topbar/>
    </div>
    <div>
   <About/>
    </div>
    <div>
<Bottompart/>
    </div>
    </>
  )
}

export default Aboutpage