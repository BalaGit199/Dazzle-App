import React, { useEffect, useState } from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { RiArrowDropDownLine } from "@react-icons/all-files/ri/RiArrowDropDownLine";
import { BiFilterAlt } from "@react-icons/all-files/bi/BiFilterAlt";
import SortByComponent from '../../features/SortByComponent/SortByComponent';
import './filtercomponent.css'
import FilterContentComponent from '../../features/FilterContentComponent/FilterContentComponent';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setDeleteval,resetDeleteVal } from '../../ReduxSlicers/FilterSlicer';
import { nearBySalon } from '../../Service/api';
import { setNearByVal } from '../../ReduxSlicers/FilterSlicer';

function FilterComponent() {

  const [nearbyList,setNearByList] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const fliterOption = useSelector( state => state.filter.value.fliterOption);
  const nearByInit = useSelector(state => state.filter.value.nearByIntiList);

 useEffect(()=>{
  const nearbylistinti = async () =>{

    try{
        const res = await nearBySalon();
        const nearbyList = await res.json();   
        setNearByList(nearbyList);
      }
    catch(err){
        console.log("nearby error",err.stack)
     } 
}

nearbylistinti();

 },[])

 useEffect(()=>{

  dispatch(setNearByVal(nearbyList));
  console.log("final nearby list",nearbyList);

 },[nearbyList])

  console.log("filter option",fliterOption);
  console.log("intial all nearby list",nearByInit);

  return (
    <div className='filter-main-container'>
      <div className='filter-container'>
       <Stack direction="row" spacing={1} >
          
          <FilterContentComponent />
          
          <SortByComponent/>
          
           {
            fliterOption.map((fli,i)=>(
              <Chip key={i}
              className="filter"
              label={fli.name}
              variant="outlined"
              onDelete={!fli.flivalue ? undefined : ()=>dispatch(resetDeleteVal(fli.name))}
              onClick={()=>dispatch(setDeleteval(fli.name))}
              clickable
              />
            ))
           }
      
    </Stack>
        </div>


    </div>
  )
}

export default FilterComponent