import React from 'react'
import Header from '../HeaderComponent/Header';
import './dealscomponent.css'
import { BiRightArrowCircle } from "@react-icons/all-files/bi/BiRightArrowCircle";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function DealsComponent() {

    // const cameraFeeD = document.getElementById("cameraFeed");

    // navigator.mediaDevices.getUserMedia({video : true})
    // .then(stream => {
    //     cameraFeeD.srcObject = stream;
    // })
    // .catch(error =>{
    //     console.error("error camera:",error);
    // })
    // useEffect(()=>{
    // })

    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
  
      desktop: {
        breakpoint: { max: 2000, min: 500 },
        items: 5
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
  return (
    <div className='deals-main-container'>

        <div className="deals-main-header">
         <Header/>
        </div>

        <div className="deals-main-content-outer-container">

           <div className="deals-main-content-innner-container">

            <div className="main-combo-deasls-banner-container">

                <div className="banner-combo-header">
                   <div className="banner-header">
                    Combo Offers
                   </div>
                   <div className="banner-showmore">
                    show more <BiRightArrowCircle />
                   </div>
                </div>

                <div className="deals-banner-combo-container">
                    <div className="deals-banner-card banner-card-1">
                    <img src="logo192.jpg"/>

                    <div className="deals-banner-card-body">
                      <div className="deals-banner-card-caption-container">
                          <div className="deals-banner-card-caption caption-1">
                          </div>
                          <div className="deals-banner-card-caption caption-2">Shop Now</div>
                      </div>
                    </div>
                    </div>
                    <div className="deals-banner-card banner-card-2">
                    <img src="salon-img.jpg"/>

                    <div className="deals-banner-card-body">
                      <div className="deals-banner-card-caption-container">
                          <div className="deals-banner-card-caption caption-1">
                          </div>
                          <div className="deals-banner-card-caption caption-2">Shop Now</div>
                      </div>
                    </div>
                    </div>
                    <div className="deals-banner-card banner-card-3">
                    <img src="salon-img.jpg"/>

                    <div className="deals-banner-card-body">
                      <div className="deals-banner-card-caption-container">
                          <div className="deals-banner-card-caption caption-1">
                          </div>
                          <div className="deals-banner-card-caption caption-2">Shop Now</div>
                      </div>
                    </div>
                    </div>
                    <div className="deals-banner-card banner-card-4">
                    <img src="salon-img.jpg"/>
                    <div className="deals-banner-card-body">
                      <div className="deals-banner-card-caption-container">
                          <div className="deals-banner-card-caption caption-1">
                          </div>
                          <div className="deals-banner-card-caption caption-2">Shop Now</div>
                      </div>
                    </div>
                    </div>
                    <div className="deals-banner-card banner-card-5">
                    <img src="salon-img.jpg"/>
                    <div className="deals-banner-card-body">
                      <div className="deals-banner-card-caption-container">
                          <div className="deals-banner-card-caption caption-1">
                          </div>
                          <div className="deals-banner-card-caption caption-2">Shop Now</div>
                      </div>
                    </div>
                    </div>
                    <div className="deals-banner-card banner-card-6">
                    <img src="logo192.jpg"/>
                    <div className="deals-banner-card-body">
                      <div className="deals-banner-card-caption-container">
                          <div className="deals-banner-card-caption caption-1">
                          </div>
                          <div className="deals-banner-card-caption caption-2">Shop Now</div>
                      </div>
                    </div>
                    </div>
                    <div className="deals-banner-card banner-card-7">
                    <img src="salon-img.jpg"/>
                    <div className="deals-banner-card-body">
                      <div className="deals-banner-card-caption-container">
                          <div className="deals-banner-card-caption caption-1">
                          </div>
                          <div className="deals-banner-card-caption caption-2">Shop Now</div>
                      </div>
                    </div>
                    </div>
                    <div className="deals-banner-card banner-card-8">
                      <img src="salon-img.jpg"/>
                      <div className="deals-banner-card-body">
                      <div className="deals-banner-card-caption-container">
                          <div className="deals-banner-card-caption caption-1">
                          </div>
                          <div className="deals-banner-card-caption caption-2">Shop Now</div>
                      </div>
                    </div>
                    </div>
                </div>

            </div>

            <div className="category-deals-container">

            <div className="category-deals-header">
              Exclusive Categories
            </div>
                
            <div className="category-deal-slider-container">

<Carousel responsive={responsive}>
    
  <div className="category-deal-slider-card catecard-1">
    <img src="salon-img.jpg"/>

    <div className="deal-category-name">
      category 1
    </div>
  </div>
  <div className="category-deal-slider-card catecard-2">
     <img src="salon-img.jpg"/>

    <div className="deal-category-name">
      category 1
    </div>
  </div>
  <div className="category-deal-slider-card catecard-3">
  <img src="salon-img.jpg"/>

    <div className="deal-category-name">
      category 1
    </div>
  </div>
  <div className="category-deal-slider-card catecard-4">
  <img src="salon-img.jpg"/>

    <div className="deal-category-name">
      category 1
    </div>
  </div>
  <div className="category-deal-slider-card catecard-5">
     <img src="salon-img.jpg"/>

    <div className="deal-category-name">
      category 1
    </div>
  </div>
  <div className="category-deal-slider-card catecard-6">
  <img src="salon-img.jpg"/>

    <div className="deal-category-name">
      category 1
    </div>
  </div>
  <div className="category-deal-slider-card catecard-7">
     <img src="salon-img.jpg"/>

    <div className="deal-category-name">
      category 1
    </div>
  </div>
  <div className="category-deal-slider-card catecard-8">
  <img src="salon-img.jpg"/>

    <div className="deal-category-name">
      category 1
    </div>
  </div>

</Carousel>


</div>

            </div>

            <div className="main-flat-deals-container">
                  <div className="flat-deals-header">
                  Daily Saver Deals
                  </div>
                  <div className="flat-deals-outer-container">
                     <div className="flat-deals-inner-container">
                       <div className="flat-deals-card card1">
                         <div className="flat-deals-card-image">
                          <img src="salon-img.jpg"/>
                          <div className="flat-image-background"></div>
                          <div className="flat-card-offer-label">₹100 OFF ABOVE ₹499</div>
                         </div>
                        <div className="flat-deal-card-shopname">
                          Green Trends
                        </div>
                        <div className="flat-deals-card-ratings">
                          4 ratings
                        </div>
                        <div className="flat-deals-card-desc">
                          haircut,haircolor,coloring,skincare,pedicure
                        </div>
                        <div className="flat-deals-card-location">
                          arumbakkam,chennai
                        </div>
                       </div>
                       <div className="flat-deals-card card2">
                       <div className="flat-deals-card-image">
                          <img src="salon-img.jpg"/>
                          <div className="flat-image-background"></div>
                          <div className="flat-card-offer-label">₹100 OFF ABOVE ₹499</div>
                         </div>
                       <div className="flat-deal-card-shopname">
                          Green Trends
                        </div>
                        <div className="flat-deals-card-ratings">
                          4 ratings
                        </div>
                        <div className="flat-deals-card-desc">
                          haircut,haircolor,coloring,skincare,pedicure
                        </div>
                        <div className="flat-deals-card-location">
                          arumbakkam,chennai
                        </div>
                       </div>
                       <div className="flat-deals-card card3">
                       <div className="flat-deals-card-image">
                          <img src="salon-img.jpg"/>
                          <div className="flat-image-background"></div>
                          <div className="flat-card-offer-label">₹100 OFF ABOVE ₹499</div>
                         </div>
                       <div className="flat-deal-card-shopname">
                          Green Trends
                        </div>
                        <div className="flat-deals-card-ratings">
                          4 ratings
                        </div>
                        <div className="flat-deals-card-desc">
                          haircut,haircolor,coloring,skincare,pedicure
                        </div>
                        <div className="flat-deals-card-location">
                          arumbakkam,chennai
                        </div>
                       </div>
                       <div className="flat-deals-card card4">
                       <div className="flat-deals-card-image">
                          <img src="salon-img.jpg"/>
                          <div className="flat-image-background"></div>
                          <div className="flat-card-offer-label">₹100 OFF ABOVE ₹499</div>
                         </div>
                       <div className="flat-deal-card-shopname">
                          Green Trends
                        </div>
                        <div className="flat-deals-card-ratings">
                          4 ratings
                        </div>
                        <div className="flat-deals-card-desc">
                          haircut,haircolor,coloring,skincare,pedicure
                        </div>
                        <div className="flat-deals-card-location">
                          arumbakkam,chennai
                        </div>
                       </div>
                       <div className="flat-deals-card card5">
                           <div className="flat-deals-card-image">
                          <img src="salon-img.jpg"/>
                          <div className="flat-image-background"></div>
                          <div className="flat-card-offer-label">₹100 OFF ABOVE ₹499</div>
                         </div>
                       <div className="flat-deal-card-shopname">
                          Green Trends
                        </div>
                        <div className="flat-deals-card-ratings">
                          4 ratings
                        </div>
                        <div className="flat-deals-card-desc">
                          haircut,haircolor,coloring,skincare,pedicure
                        </div>
                        <div className="flat-deals-card-location">
                          arumbakkam,chennai
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

export default DealsComponent;