import React from 'react'



import logo1 from "./logo1.png"

import video1 from "./video.mp4"

const Home = () => {
  return (
    <div  className='hm' style={{marginTop : "6rem", textAlign : "center"}}>
        <div  style={{textAlign : "center"}}>
          <img src={logo1} alt="logo1" />
        </div>
        <h2 className='rtitle' >Moulvibazar Polythnic Insttitute</h2>
        <div className='ins' style={{marginTop : "3rem"}}>
        <video width="400" height="auto" controls="controls" autoplay="true"  className='institute' src={video1} />
        </div>
 
    </div>
  )
}

export default Home