import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

import logo1 from "./logo1.png"
import { deleteStudents } from './StudentsSlice';


const StudentView = () => {
const student = useSelector((state) => state.students);
const dispatch = useDispatch();
  const hendelDelete = (id) =>{
    dispatch(deleteStudents(id))
  }
  return (
    <div style={{marginTop : "5rem"}}>
        <div  style={{textAlign : "center"}}>
            <img src={logo1} alt="logo1" />
          </div>
       <h2 className='rtitle' style={{textAlign : "center",marginBottom : "2rem"}}>List of Student</h2>
       <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Roll Number</th>
              <th>Registation Number</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
       
       <tbody>
       {student && student.map((student) =>{
          const {Roll,Reg,Name,id} = student;
          return <tr key={Roll}>
            <td>{Name}</td>
            <td>{Roll}</td>
            <td>{Reg}</td>
            <td><Link state={{id,Name, Roll, Reg}} to="/editStudent"><button className='btne'><i className="fa-solid fa-pen-to-square"></i></button></Link></td>
            <td><button onClick={() => {hendelDelete(id)}} className='btnd'><i className="fa-solid fa-trash-can"></i></button></td>
          </tr>
        })}
       </tbody>
       </table>
    </div>
  )
}

export default StudentView