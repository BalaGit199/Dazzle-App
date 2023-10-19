import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './recommenedsalon.css';
import { recommendedSalon } from '../../Service/api';
import { useState,useEffect } from 'react';
import Rating from '@mui/material/Rating';
import SilderConmponent from '../../features/SilderComponent/SilderConmponent';
import { Button } from 'react-bootstrap';

function RecommendedSalon() {


  const [recommended_list,setRecommeded] = useState([]);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024},
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  useEffect( ()=>{

    const recommendsalon_data = async () =>{

      try{

        const res = await recommendedSalon();

        const recommendsalon_list = await res.json();

        setRecommeded(recommendsalon_list);

      }

     catch(err)
     {
        console.log("erorr---",err.stack);
     }
      
    };
    
    recommendsalon_data();

  },[])
  console.log("recommededd",recommended_list);

  return (
    // <div>
    //   <div className='recommend-salon-main-conatainer'>
    //   <div className='recommend-salon-conatainer'>
       

    //    <div className="recommend-carosuel-container">
    //    <div className="recommended-salon-header">
    //     <span>Recommended salon</span>
    //    </div>

    //   <Carousel responsive={responsive} >

    //        {
    //         recommended_list.map((a,i)=>(
    //           <div className='reommended-salon-card' key={i} >
    //           <img className='recommended-salon-card-img' alt='' src='./logo192.png' />
    //           <h3 className='recommended-salon-card-shop-name'>{a["shop-name"]}</h3>
    //           <div className="rating-container">
    //           <p> <span>{a["ratings"]}</span>
    //               <Rating
    //     name="recommened-shop-rating"

    //     defaultValue={a["ratings"]} precision={0.5}
    //     readOnly
    //   />
    //   {/* <Typography component="legend">Read only</Typography>
    //   <Rating name="read-only" value={4} readOnly /> */} </p>
    //           </div>

    //           <p className='recommened-salon-card-loaction'>{a["location"]}</p>
    //       </div>

    //         ))
    //        }
    //   </Carousel>
    //   </div>
    //   </div>
    // </div>
    // </div>

    // <div className="recommened-main-container">
    //     <div className="recommended-container">
    //       <div className="recommeded-container-title">
    //         <h3 className="recommded-title">Recommeded Salon</h3>
    //       </div>
    //       <div className="recommended-carousal-container">
    //       <Carousel responsive={responsive} >
    //         <div className="recommeded-carosual card">
    //           <img src="logo192.png" />
    //           <div className="recommeded-carosual-card-body">
    //             <div className="recommeded-shop-name">
    //               Green trends
    //             </div>
    //             <div className="recommeded-shop-ratings">
    //               4.5
    //             </div>
    //             <div className="recommeded shop-location">
    //               chennai
    //             </div>
    //           </div>
    //         </div>
    //         <div className="recommeded-carosual card">
    //           <img src="logo192.png" />
    //           <div className="recommeded-carosual-card-body">
    //             <div className="recommeded-shop-name">
    //               Green trends
    //             </div>
    //             <div className="recommeded-shop-ratings">
    //               4.5
    //             </div>
    //             <div className="recommeded shop-location">
    //               chennai
    //             </div>
    //           </div>
    //         </div>
    //         <div className="recommeded-carosual card">
    //           <img src="logo192.png" />
    //           <div className="recommeded-carosual-card-body">
    //             <div className="recommeded-shop-name">
    //               Green trends
    //             </div>
    //             <div className="recommeded-shop-ratings">
    //               4.5
    //             </div>
    //             <div className="recommeded shop-location">
    //               chennai
    //             </div>
    //           </div>
    //         </div>
    //       </Carousel>
    //       </div>
    //     </div>
    // </div>
    <div className="recommended-main-container">

         <div className="recommeded-header">Recommeded Salon </div>

         <div className="recommended-body-slider">

         <SilderConmponent/>

         </div>

    </div>  
    )
}

export default RecommendedSalon;