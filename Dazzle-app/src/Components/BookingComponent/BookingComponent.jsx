import React from 'react';
import Header from '../HeaderComponent/Header';
import './bookingcomponent.css';
import Rating from '@mui/material/Rating';
import {  Routes, Route, Link,Outlet } from 'react-router-dom';
import ShopCategoerirsService from '../ShopServiceCategoeries/ShopCategoerirsService';
import { AiFillHeart } from "@react-icons/all-files/ai/AiFillHeart";
import { RiShareForward2Fill } from "@react-icons/all-files/ri/RiShareForward2Fill";
import { BiSearch } from "@react-icons/all-files/bi/BiSearch";
import { useEffect } from 'react';




function BookingComponent() {


  useEffect(()=>{

    const featureList = document.getElementById("shop-booking-features-container");

    const intialFilterVal = featureList.children[1]

    intialFilterVal.classList.add("featureColor");

    // console.log("intial filter value",intialFilterVal);

  },[])

           
     const featureSelect = (indexval) =>{

         console.log("index value",indexval);
         const featureList = document.getElementById("shop-booking-features-container");
          console.log("feature list",featureList.children.length);

          for(let index=0;index < featureList.children.length;index++){

            if(index === indexval){
              let temp = featureList.children[index];
               temp.classList.add("featureColor");
            }
            else{

              let temp = featureList.children[index];
              temp.classList.remove("featureColor");

            }

          }

     }

     const favourate = () =>{

      const select_fav =document.getElementById("shop-favourate-icon");

      const fav_tag_name = select_fav.children[0];

      fav_tag_name.classList.toggle("favourate-color");

      console.log("shop favourate",fav_tag_name)

     }


  return (
    <div className="shop-booking-main-container">
        <div className="shop-booking-header">
            <Header/>
        </div>
        <div className="shop-booking-conatiner">   {/* booking content main container */}



            <div className="shop-details-container">   {/* shop details container */}
                <div className="shop-details-content-container">
                    <div className="booking-shop-image">
                     <img src="logo192.png"/>
                        </div> 
                    <div className="booking-shop-details">
                       <div className="booking-shop-name"><span>
                        Green Trends
                        </span></div>
                        <div className="booking-shop-disc">
                        <p>Booking Shop Description</p>
                    </div>
                    <div className="booking-shop-ratings-container"><span className='booking-shop-ratings'>
                        4.5</span><span className='book-rating-icon'>
                        <Rating
                       name="offer-shop-rating"
                       defaultValue={3.5} precision={0.5}
                       readOnly
                      />
                        </span>
                        </div>

                    <div className="booking-shop-locationAndDistance"><span>
                        Chennai,1.5km
                        </span></div>
                    <div className="booking-shop-timing"><span>Open Now! </span><span>02:00</span>-<span>05:00</span>
                    </div>
                    </div>
                     
                     <div className='other-shop-features'>

                      <div className="shop-booking-search-container">
                      <BiSearch className='search-book-icon'/>
                      </div>

                        <div className='shop-favourate-icon' id='shop-favourate-icon'>
                          <AiFillHeart onClick={() => favourate()}/>
                        </div>
                        <div className='shop-share-icon'>
                           <RiShareForward2Fill/>
                        </div>

                     </div>
                 
                </div>
            </div>

            <div className="shop-booking-features-main-container">
                <div className="shop-booking-features-container" id='shop-booking-features-container'>
                    <div className="booking-shop-feature-list shop-booking-overview-container" onClick={()=>featureSelect(0)}>
                     <Link to={"/booking/overview"}>Overview</Link>
                    </div>
                    <div className="booking-shop-feature-list shop-booking-service-container" onClick={()=>featureSelect(1)}>
                     <Link to="/booking/service">Services</Link>
                    </div>
                    <div className="booking-shop-feature-list shop-booking-review-container" onClick={()=>featureSelect(2)}>
                    <Link>Review</Link>
                    </div>
                    <div className="booking-shop-feature-list shop-photos-container" onClick={()=>featureSelect(3)}>
                    <Link>Photos</Link> 
                    </div>
                </div>
            </div>

            <div>
            <Outlet/>
            </div>
        </div>


    </div>
  )
}

export default BookingComponent;