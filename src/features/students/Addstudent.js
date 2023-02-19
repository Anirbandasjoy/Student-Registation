import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';


import logo1 from "./logo1.png"
import { addStudents } from './StudentsSlice';


const Addstudent = () => {
  const [Name , setName] = useState("");
  const [Roll , setRoll] = useState("");
  const [Reg , setReg] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const hendelsubmit = (event) =>{
    event.preventDefault();
    const student = {id : uuidv4(), Roll,Reg,Name};
    dispatch(addStudents(student));
    navigate("/show-students",{replace : true})

  }
  return (
    <div style={{marginTop : "5rem"}}>
      <div>
          <div  style={{textAlign : "center"}}>
            <img src={logo1} alt="logo1" />
          </div>
         <h2 className='rtitle'>Registation Form</h2>
      
         </div>
        <form onSubmit={hendelsubmit}>
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
          <button className='sumbmitbtn' type="submit">Confrim</button>
        </form>
    </div>
  )
}

export default Addstudent;


