import React from 'react'
import Header from '../HeaderComponent/Header';
import './offershopcomponent.css';
import Rating from '@mui/material/Rating';
import { BiFilter } from "@react-icons/all-files/bi/BiFilter";

function OfferShopsComponent() {

    // window.addEventListener('scroll',()=>{
    //    const scrolled = window.scrollY;
    //    console.log("scroll height",scrolled);
    //    if(Math.ceil(scrolled) > 20) {

    //     const headerval = document.getElementById('offer-shop-header');

    //     headerval.classList.add("change-color");

    //    }

    // if(Math.ceil(scrolled) === 0) {

    //     const headerval = document.getElementById('offer-shop-header');

    //     headerval.classList.remove("change-color");

    //    }

    // })
  return (
    <div id='offer-shop-main-container' className="offer-shop-main-container">
      <div id='offer-shop-header' className='offer-shop-header'>
       <Header/>
      </div>

      <div className="shop-content-main-container">
      <div className="offer-shop-container">
         <div className="offer-head-label">
            <h2>WELCOME 50</h2>
         </div>
         <div className="offer-shop-content">
            <div className="filter-shops">
                <div className="offer-total-shops">
                   <span>29 Restrauants</span>
                </div>
                <div className="offer-shop-filters">
                    <span className="filter-features filter1">Releveant</span>
                    <span className="filter-features filter2">Ratings</span>
                    <span className="filter-features filter2">Categories</span>
                    <span className="filter-features filter3">Cost:Low to High</span>
                    <span className="filter-features filter4">Cost:High to Low</span>
                </div>
                <div className='offer-filter-list'>
                  <span className='filter-offer-icon'> <BiFilter/></span>
                  <span className='filter-offer-text'>Filter </span>                  
                </div>
            </div>

        <div className="offer-all-shop-list">
            <div className="shop-card-container">

                <div className="offer-shop-card">
                    <div className="offer-card-image">
                        <img src='logo192.png'/>
                    </div>
                    <div className="offer-shop-name">
                        <h3>Green Trends</h3>
                    </div>
                    <div className="offer-shop-categories">
                        <p>HairCut,SkinCare,Bridal,HairColor</p>
                    </div>
                    <div className="offer-shop-ratings">
                    <span className="offer-shop-ratings-value">4.5</span><Rating
                          name="off-shop-rating"
                          defaultValue={4.5} precision={0.5}
                          readOnly
                          />
                    </div>
                    
                    <div className="offer-shpp-location">
                        <span>Chennai</span>
                    </div>
                </div>

                
                <div className="offer-shop-card">
                    <div className="offer-card-image">
                        <img src='logo192.png'/>
                    </div>
                    <div className="offer-shop-name">
                        <h3>Green Trends</h3>
                    </div>
                    <div className="offer-shop-categories">
                        <p>HairCut,SkinCare,Bridal,HairColor</p>
                    </div>
                    <div className="offer-shop-ratings">
                    <span className="offer-shop-ratings-value">4.5</span><Rating
                          name="off-shop-rating"
                          defaultValue={4.5} precision={0.5}
                          readOnly
                          />
                    </div>
                    
                    <div className="offer-shpp-location">
                        <span>Chennai</span>
                    </div>
                </div>


                <div className="offer-shop-card">
                    <div className="offer-card-image">
                        <img src='logo192.png'/>
                    </div>
                    <div className="offer-shop-name">
                        <h3>Green Trends</h3>
                    </div>
                    <div className="offer-shop-categories">
                        <p>HairCut,SkinCare,Bridal,HairColor</p>
                    </div>
                    <div className="offer-shop-ratings">
                    <span className="offer-shop-ratings-value">4.5</span><Rating
                          name="off-shop-rating"
                          defaultValue={4.5} precision={0.5}
                          readOnly
                          />
                    </div>
                    
                    <div className="offer-shpp-location">
                        <span>Chennai</span>
                    </div>
                </div>


                <div className="offer-shop-card">
                    <div className="offer-card-image">
                        <img src='logo192.png'/>
                    </div>
                    <div className="offer-shop-name">
                        <h3>Green Trends</h3>
                    </div>
                    <div className="offer-shop-categories">
                        <p>HairCut,SkinCare,Bridal,HairColor</p>
                    </div>
                    <div className="offer-shop-ratings">
                    <span className="offer-shop-ratings-value">4.5</span><Rating
                          name="off-shop-rating"
                          defaultValue={4.5} precision={0.5}
                          readOnly
                          />
                    </div>
                    
                    <div className="offer-shpp-location">
                        <span>Chennai</span>
                    </div>
                </div>


                <div className="offer-shop-card">
                    <div className="offer-card-image">
                        <img src='logo192.png'/>
                    </div>
                    <div className="offer-shop-name">
                        <h3>Green Trends</h3>
                    </div>
                    <div className="offer-shop-categories">
                        <p>HairCut,SkinCare,Bridal,HairColor</p>
                    </div>
                    <div className="offer-shop-ratings">
                    <span className="offer-shop-ratings-value">4.5</span><Rating
                          name="off-shop-rating"
                          defaultValue={4.5} precision={0.5}
                          readOnly
                          />
                    </div>
                    
                    <div className="offer-shpp-location">
                        <span>Chennai</span>
                    </div>
                </div>


                <div className="offer-shop-card">
                    <div className="offer-card-image">
                        <img src='logo192.png'/>
                    </div>
                    <div className="offer-shop-name">
                        <h3>Green Trends</h3>
                    </div>
                    <div className="offer-shop-categories">
                        <p>HairCut,SkinCare,Bridal,HairColor</p>
                    </div>
                    <div className="offer-shop-ratings">
                    <span className="offer-shop-ratings-value">4.5</span><Rating
                          name="off-shop-rating"
                          defaultValue={4.5} precision={0.5}
                          readOnly
                          />
                    </div>
                    
                    <div className="offer-shpp-location">
                        <span>Chennai</span>
                    </div>
                </div>


                <div className="offer-shop-card">
                    <div className="offer-card-image">
                        <img src='logo192.png'/>
                    </div>
                    <div className="offer-shop-name">
                        <h3>Green Trends</h3>
                    </div>
                    <div className="offer-shop-categories">
                        <p>HairCut,SkinCare,Bridal,HairColor</p>
                    </div>
                    <div className="offer-shop-ratings">
                    <span className="offer-shop-ratings-value">4.5</span><Rating
                          name="off-shop-rating"
                          defaultValue={4.5} precision={0.5}
                          readOnly
                          />
                    </div>
                    
                    <div className="offer-shpp-location">
                        <span>Chennai</span>
                    </div>
                </div>

                <div className="offer-shop-card">
                    <div className="offer-card-image">
                        <img className="card-image-offer" src='logo192.png'/>
                    </div>
                    <div className="offer-shop-name">
                        <h3>Green Trends</h3>
                    </div>
                    <div className="offer-shop-categories">
                        <p>HairCut,SkinCare,Bridal,HairColor</p>
                    </div>
                    <div className="offer-shop-ratings">
                    <span className="offer-shop-ratings-value">4.5</span><Rating
                          name="off-shop-rating"
                          defaultValue={4.5} precision={0.5}
                          readOnly
                          />
                    </div>
                    
                    <div className="offer-shpp-location">
                        <span>Chennai</span>
                    </div>
                </div>


            </div>
        </div>
        </div>
      </div>
      </div>
      



    </div>
  )
}

export default OfferShopsComponent;