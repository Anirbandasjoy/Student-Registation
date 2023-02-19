const { createSlice } = require("@reduxjs/toolkit")
const { v4: uuidv4 } = require('uuid');

const initialStudents = {
    students : [
        {
            id : uuidv4(),
            Roll : 579461,
            Reg : 1502148081,
            Name : "Aniraban das Joy",
           
        },
        {
            id : uuidv4(),
            Roll : 579439,
            Reg : 1502148081,
            Name : "Joy das",
           
        },
    ],
};

 export const studentsSlice = createSlice({
    name : "students",
    initialState : initialStudents,
    reducers : {
        showStudents : (state) => state,
        addStudents : (state,action) => {
            state.students.push(action.payload)
        },

        updateStudents : (state,action) => {
            const {Name, Roll, Reg,id} = action.payload;
           const isStudentExist = state.students.filter((student) => student.id === id);
           if(isStudentExist){
            isStudentExist[0].Name = Name;
            isStudentExist[0].Reg = Reg;
            isStudentExist[0].Roll = Roll;
           }
        },
        deleteStudents : (state,action) => {
            const id = action.payload;
            state.students = state.students.filter((student) => student.id !== id);
        },

    }
})
export const {showStudents,addStudents,deleteStudents,updateStudents} = studentsSlice.actions;

export default studentsSlice.reducer;