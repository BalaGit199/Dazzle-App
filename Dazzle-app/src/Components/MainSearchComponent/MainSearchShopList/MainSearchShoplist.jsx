import React from 'react';
import { useEffect } from 'react';
import './mainsearchshoplist.css';

function MainSearchShoplist() {

  const selectMainOption = (val) =>{

    if(val === 0){

      const selectSwitchOption1= document.getElementById("main-search-option-1");
      const selectSwitchOption2 = document.getElementById("main-search-option-2");
      selectSwitchOption1.classList.add("search-main-colour");
      selectSwitchOption2.classList.remove("search-main-colour");
      console.log("salon");

    }
    else{

      const selectSwitchOption1= document.getElementById("main-search-option-1");
      const selectSwitchOption2 = document.getElementById("main-search-option-2");
      selectSwitchOption2.classList.add("search-main-colour");
      selectSwitchOption1.classList.remove("search-main-colour");
      console.log("category");
    }

  }

  useEffect(()=>{

    const defaultOption = document.getElementById("main-search-option-1");

    defaultOption.classList.add("search-main-colour");
     
    console.log("main search option",defaultOption);
  },[])
  return(
  <div className='main-search-shop-list-main-container'>

     <div className="main-search-shop-list-container">
        <div className="main-search-shop-list-option" id='main-search-option'>
          <div className="main-search-list-option-1" id='main-search-option-1' onClick={()=>{selectMainOption(0)}}>Salon</div>
          <div className="main-search-list-option-2" id='main-search-option-2' onClick={()=>{selectMainOption(1)}}>Category</div>
        </div>

      <div className="main-search-shop-list-body-container">

        <div className="main-search-shop-list-body-salon">

          <div className="main-search-shop-list-body-salon-card">

            <div className="main-search-shop-list-card-image">
              <img src="salon-img.jpg"/>
            </div>

            <div className="main-search-shop-list-salon-card-body">
              <div className="main-search-shop-list-card-shopname">shopname</div>
              <div className="main-search-shop-list-card-ratings">rating</div>
              <div className="main-search-shop-list-card-location">location</div>
            </div>

          </div>

          <div className="main-search-shop-list-body-salon-card">

            <div className="main-search-shop-list-card-image">
              <img src="salon-img.jpg"/>
            </div>

            <div className="main-search-shop-list-salon-card-body">
              <div className="main-search-shop-list-card-shopname">shopname</div>
              <div className="main-search-shop-list-card-ratings">rating</div>
              <div className="main-search-shop-list-card-location">location</div>
            </div>

          </div>
          
          <div className="main-search-shop-list-body-salon-card">

            <div className="main-search-shop-list-card-image">
              <img src="salon-img.jpg"/>
            </div>

            <div className="main-search-shop-list-salon-card-body">
              <div className="main-search-shop-list-card-shopname">shopname</div>
              <div className="main-search-shop-list-card-ratings">rating</div>
              <div className="main-search-shop-list-card-location">location</div>
            </div>

          </div>
          
          <div className="main-search-shop-list-body-salon-card">

            <div className="main-search-shop-list-card-image">
              <img src="salon-img.jpg"/>
            </div>

            <div className="main-search-shop-list-salon-card-body">
              <div className="main-search-shop-list-card-shopname">shopname</div>
              <div className="main-search-shop-list-card-ratings">rating</div>
              <div className="main-search-shop-list-card-location">location</div>
            </div>

          </div>
          
          <div className="main-search-shop-list-body-salon-card">

            <div className="main-search-shop-list-card-image">
              <img src="salon-img.jpg"/>
            </div>

            <div className="main-search-shop-list-salon-card-body">
              <div className="main-search-shop-list-card-shopname">shopname</div>
              <div className="main-search-shop-list-card-ratings">rating</div>
              <div className="main-search-shop-list-card-location">location</div>
            </div>

          </div>
          <div className="main-search-shop-list-body-salon-card">

<div className="main-search-shop-list-card-image">
  <img src="salon-img.jpg"/>
</div>

<div className="main-search-shop-list-salon-card-body">
  <div className="main-search-shop-list-card-shopname">shopname</div>
  <div className="main-search-shop-list-card-ratings">rating</div>
  <div className="main-search-shop-list-card-location">location</div>
</div>

</div>
          
        </div>

        </div>

     </div>

  </div>
  )
}

export default MainSearchShoplist;