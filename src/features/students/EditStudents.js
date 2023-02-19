import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'


import logo1 from "./logo1.png"
import { updateStudents } from './StudentsSlice'


const EditStudents = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
   const [Name,setName] = useState(location.state.Name);
   const [Roll,setRoll] = useState(location.state.Roll);
   const [Reg,setReg] = useState(location.state.Reg);
   const [id,setid] = useState(location.state.id);
   const hendelSubmites = (event) =>{
    event.preventDefault();
    dispatch(updateStudents({Name,Roll,Reg,id}));
    navigate("/show-students" , {replace : true})

   }

  return (
    <div style={{marginTop : "5rem"}}>
    <div>
        <div  style={{textAlign : "center"}}>
          <img src={logo1} alt="logo1" />
        </div>
       <h2 className='rtitle'>Update Data</h2>
    
       </div>
      <form onSubmit={hendelSubmites}>
        <div className='input'>
          <label htmlFor="Name"></label>
          <input className='fristi' type="text" id='name' name='name' value={Name} required placeholder='Enter your name' onChange={(e) =>{
            setName(e.target.value);
          }} />
        </div>
        <div  className='input'>
          <label htmlFor="Roll Number">  </label>
          <input type="number" id='Roll' name='Roll' value={Roll} required placeholder='Enter your roll number' onChange={(e) =>{
            setRoll(e.target.value)
          }}/>
        </div>
        <div  className='input'>
          <label htmlFor="Registation number">    </label>
          <input type="number" id='Reg' name='Reg' value={Reg} required placeholder='Enter your registation number' onChange={(e) =>{
            setReg(e.target.value)
          }} />
        </div>
        <button className='sumbmitbtn' type="submit">Updata</button>
      </form>
  </div>
  )
}

export default EditStudents