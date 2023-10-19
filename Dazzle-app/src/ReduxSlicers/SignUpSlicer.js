import { createSlice } from "@reduxjs/toolkit";

 export const signUpSlicer = createSlice({
 
    name:'signup',
    initialState: { value:{}},
    reducers:{
        signup:(state,action) => {
           state.value = action.payload
        }
    }

 })
  
 export const {signup} = signUpSlicer.actions;
 export default signUpSlicer.reducer;