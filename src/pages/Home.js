import React from 'react'















import logo1 from "./logo1.png"

import video1 from "./video.mp4"













const Home = () => {
  return (
    <div>
    <div  className='hm' style={{marginTop : "30vh", textAlign : "center"}}>
        <div  style={{textAlign : "center"}}>
          <img src={logo1} alt="logo1" />
        </div>
        <h2 className='rtitle' >Moulvibazar Polythnic Insttitute</h2>
        <div className='ins' style={{marginTop : "3rem"}}>
        <video width="400" height="auto" controls="controls" autoplay="true"  className='institute' src={video1} />
        </div>
        
    </div>

        <div>
        <p style={{textAlign : "center",marginTop : "2rem" ,marginBottom : ".5rem",fontSize : ".7rem"}} className='rtitle'  >Copyright by Anirban das joy  @2023</p>
        </div>
    </div>
    
  )
}

export default Home