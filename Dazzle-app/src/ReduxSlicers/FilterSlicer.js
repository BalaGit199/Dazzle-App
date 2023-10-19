import { createSlice } from "@reduxjs/toolkit";


export const fliterSlicer = createSlice({

    name:'filterslice',
    initialState:{ value : {

        fliterOption : [{name :"Home Salon",flivalue:false,label:"homeSalon"},{name :"Offers",flivalue:false,label:"offer"},
        {name :"Rating 4.0+",flivalue:false,label:"ratings"},
        {name :"New On Dazzle",flivalue:false,label:"newOnDazzle"}],
        nearByIntiList:[]

    }},
    reducers:{

        setDeleteval : (state,action) => {
            state.value.fliterOption.map((val)=>{
                if(val.name === action.payload){ 
                  val.flivalue = true;

                  const fliternearby = state.value.nearByIntiList.filter((data) => data[val.label] === true);

                  state.value.nearByIntiList = fliternearby;
                 
                  console.log("temp list",fliternearby);
                }
            })
        },
        resetDeleteVal : (state,action) =>{
            state.value.fliterOption.map((val)=>{
                if(val.name === action.payload){ 
                  val.flivalue = false;
                   console.log("Selected value",val.flivalue)
                }
            })
        },
        setNearByVal : (state,action) =>{
            state.value.nearByIntiList = action.payload
        }
    }
})

export const {setDeleteval,resetDeleteVal,setNearByVal} =fliterSlicer.actions;
export default fliterSlicer.reducer;