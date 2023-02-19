import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'




import Addstudent from '../features/students/Addstudent'
import EditStudents from '../features/students/EditStudents'
import StudentView from '../features/students/StudentView'
import Navbar from '../Navbar'
import Error from '../pages/Error'
import Home from '../pages/Home'




const Index = () => {
  return (
    <>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/' element={<Addstudent />} />
                <Route path='/show-students' element={<StudentView />} />
                <Route path='/editStudent' element={<EditStudents />} />
                <Route path='*' element={<Error />} />
            </Routes>
        
        </BrowserRouter>
    </>
  )
}

export default Index