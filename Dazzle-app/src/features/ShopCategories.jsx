import * as React from 'react';
// import Button from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
import './shopcategories.css';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // const hovertest = (event) =>{
  //   setAnchorEl(event.currentTarget);

  // }
  // const leavetest = (event) =>{
  //   setAnchorEl(event.currentTarget);

  // }

  return (
    <div>
    <span onClick={handleClick}>
        Categories
    </span>
      <Menu className='cate-prop'
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
       
        <div className='cate-data'>
            <p onClick={handleClose}>Hair Cut</p>
            <p onClick={handleClose}>Hair Colouring</p>
            <p onClick={handleClose}>Bridal</p>
            <p onClick={handleClose}>Personal Grooming</p>
            <p onClick={handleClose}>Massage</p>
            <p onClick={handleClose}>Manicure</p>
        </div>
      </Menu>
    </div>
  );
}