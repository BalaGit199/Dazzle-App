import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { BiFilterAlt } from "@react-icons/all-files/bi/BiFilterAlt";
import './filtercontentcomponent.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function FilterContentComponent() {
  const [open, setOpen] = React.useState(false);
  const [changeColorFilter,setChangeColor] = React.useState(10);
  const defaultSelect = 'Relevance';
  const [currentSelect,setCurrentSelected] = useState(defaultSelect);
  const [value, setValue] = React.useState('female');


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  const changeColor = (value,selectedFliter) =>{

    const eleLen = document.getElementsByClassName("filter-label-items");

    for(let index=0;index < eleLen.length;index++){

       if(Number(value) === index)
       {
        const element = eleLen[index];
        element.classList.add("example");
       }
       else
       {
        const element = eleLen[index];
        element.classList.remove("example");
       }
      // console.log("loop cate",eleLen[index]);

    }
    // ele.classList.toggle("example");
    setChangeColor(value);
    setCurrentSelected(selectedFliter);
    console.log("print value  ",eleLen,selectedFliter);
  } 
  useEffect(()=>{
    const inti_ele = document.getElementById("label-filter-list");
    console.log("intial element",inti_ele);
    // inti_ele.classList.add("example");
  },[])


  function handleChangeOp(event) {
    console.log("event---",event.target.value);
 }

//  const handleChange = (event) => {
//   setValue((event.target as HTMLInputElement).value);
// };

  return (
    <div>
       <Chip
        className="filter filterprop"
        label="Fliter" 
        onClick={handleClickOpen}
        onDelete={handleClose}
        deleteIcon={<BiFilterAlt/>}
        variant="outlined"
        clickable
         />
         
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Filter
        </BootstrapDialogTitle>
        <div className='filter-content-main'>

            <div className="filter-label">

              <ul className="label-filter-list" id="label-filter-list">
                <li className="filter-label-items item1" onClick={() => changeColor(0,"Relevance")}>Sort By</li>
                <li className="filter-label-items item2" onClick={() => changeColor(1,"Home_Salon")}>Home Salon</li>
                <li className="filter-label-items item3" onClick={() => changeColor(2,"Categories")}>Categories</li>
                <li className="filter-label-items item4" onClick={() => changeColor(3,"Ratings")}>Ratings</li>
                <li className="filter-label-items item5" onClick={() => changeColor(4,"Ac/Non-Ac")}>Ac/Non-Ac</li>
              </ul>

            </div>
            <div className="filter-feature">
         <FormControl>
           <FormLabel >{currentSelect}</FormLabel>

           {(() => {
            
        //     switch(defaultSelect){

        //     case "Relevance" : return(
        //     default:      return <h1>No project match</h1>

        //     }
              if(currentSelect === 'Relevance'){
               return(
              <RadioGroup 
              onChange={(event) => handleClickOpen(event)}
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Relevance"
              name="radio-buttons-group"
             >
            <FormControlLabel value="Relevance" control={<Radio />} label="Relevance(Default)" onChange={(e) =>handleChangeOp(e)}/>
            <FormControlLabel value="Rating" control={<Radio />} label="Rating" onChange={(e) =>handleChangeOp(e)} />
            <FormControlLabel value="Offers" control={<Radio />} label="Offers" onChange={(e) =>handleChangeOp(e)} />
            <FormControlLabel value="Low-to-High" control={<Radio />} label="Cost:Low to High" onChange={(e) =>handleChangeOp(e)}/>
            <FormControlLabel value="High-to-Low" control={<Radio />} label="Cost:High to Low" onChange={(e) =>handleChangeOp(e)}/>
    
           </RadioGroup>
                  )
                }
                else if(currentSelect === "Home_Salon"){
                    return (
                      <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="In-Salon" />
                      </FormGroup>
                    );
                }
                else if(currentSelect === "Categories"){
                  return (
                    <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Hair Cut" />
                    <FormControlLabel control={<Checkbox />} label="Hair Coloring" />
                    <FormControlLabel control={<Checkbox />} label="Brial" />
                    <FormControlLabel control={<Checkbox />} label="Personal Grooming" />
                    <FormControlLabel control={<Checkbox />} label="Massage" />
                    <FormControlLabel control={<Checkbox />} label="Manicure" />
                  </FormGroup>
                  );
                }
                else if(currentSelect === "Ratings"){
                  return(
                    <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Ratings 4.0+" />
                    <FormControlLabel control={<Checkbox />} label="Ratings 3.5+" />
                    </FormGroup>
                  );
                }
                else if(currentSelect === "Ac/Non-Ac"){
                  return(
                    <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={value}

                  >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                  </RadioGroup>
                  );

                }
                else{
                  return <p>Nothing </p>
                }
        
            })()}

    </FormControl>
             </div>

            </div>

            <div className="filter-action-btn">
            <Button autoFocus onClick={handleClose}>
            filter
             </Button>
            </div>
       
      </BootstrapDialog>
    </div>
  );
}