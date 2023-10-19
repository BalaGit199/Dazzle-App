import * as React from 'react';
import { useEffect } from 'react';
import Menu from '@mui/material/Menu';
import './sortbyComponent.css';
import Chip from '@mui/material/Chip';
import { RiArrowDropDownLine } from "@react-icons/all-files/ri/RiArrowDropDownLine";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';


export default function SortByComponent() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [tdelete , setDelete] =  React.useState(false);
  const [sortLabel,setSortLabel] = React.useState("Sort By");


  useEffect(()=>{

    const clicktest = () =>{

      const sortbyplaced = document.getElementById("sortbyChip").getBoundingClientRect();
      console.log("sort by container val",Math.ceil(sortbyplaced.top));
  
    }
    clicktest();

  },[])

  useEffect(()=>{

    //   const getMenuTop = () =>{
    //   const sortmenuvalue = document.getElementsByClassName("css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper")[0];
    //   console.log("menu placed value",sortmenuvalue);
    //  }
     
    //  getMenuTop();
   console.log("after set the value....");

  },[anchorEl])

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

 const handleClickSort = async (event) => {
    setAnchorEl(event.currentTarget);
    const sortbyplaced = await document.getElementById("sortbyChip").getBoundingClientRect();
    console.log("sort by container val",Math.ceil(sortbyplaced.top));
    const sortbydata = await document.getElementsByClassName("css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper");      
    const setTop = Math.ceil(sortbyplaced.top) + 'px';
    console.log("sort by valueeeee11111",sortbydata[0].getBoundingClientRect());

    sortbydata[0].style.top = setTop;
    console.log("view top css",sortbydata[0].style.top,setTop);
    console.log("sort by valueeeee",sortbydata[0].getBoundingClientRect());
  };

  const removeDelete = () => {

    setDelete(false);

    console.log("delete button works--");
  };

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

   const setValueLabel = (val) => {

    val === 'Relevance' ? setSortLabel('Sort By') : setSortLabel(val);

    console.log('label value',val);

   }

  const labelChange = (value) =>{

        setValueLabel(value.target.value);
  }

  return (
    <div>
    <Chip id="sortbyChip"
        className="filter sortby"
        label={sortLabel}
        onClick={handleClickSort}
        onDelete={handleDelete}
        deleteIcon={<RiArrowDropDownLine style={{fontWeight:500,color:'gray'}}/>}
        variant="outlined"
        clickable
       />


       <Menu id="sortby-basic-menu" className='sort-by-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
       
      <div className='sortby-data'>
      <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Sort By</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="Relevance"
        name="radio-buttons-group"
      >
        <FormControlLabel value="Relevance" control={<Radio />} label="Relevance" onClick={(e)=> labelChange(e)} />
        <FormControlLabel value="Rating" control={<Radio />} label="Rating" onClick={(e)=> labelChange(e)}/>
        <FormControlLabel value="Offers" control={<Radio />} label="Offers" onClick={(e)=> labelChange(e)}/>
        <FormControlLabel value="LowToHigh" control={<Radio />} label="Cos:Low To High" />
        <FormControlLabel value="HighToLow" control={<Radio />} label="Cos:High To Low" />
      </RadioGroup>
     </FormControl>
            
        </div>
            <Button>
              Apply
             </Button>
      </Menu>

       

    
    </div>
  );
}