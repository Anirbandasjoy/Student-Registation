import { configureStore } from "@reduxjs/toolkit";




import studentsReducer from "../features/students/StudentsSlice";





const store = configureStore({
    reducer : studentsReducer,
});

export default store;