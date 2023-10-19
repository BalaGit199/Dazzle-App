import {createSlice} from '@reduxjs/toolkit';

export const userSlicer = createSlice({
    name:'user',
    initialState:{ value : {
    name:'balaji'
    }},
    reducers:{
        setUsername : (state,action) =>{
            state.value=action.payload;
        }
    }
});

export const {setUsername} =userSlicer.actions;
export default userSlicer.reducer;