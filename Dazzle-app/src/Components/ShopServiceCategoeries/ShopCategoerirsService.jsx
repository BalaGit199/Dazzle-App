import React from 'react';
import BookingComponent from '../BookingComponent/BookingComponent';
import './shopservicecategories.css';
import{HashLink as Link} from 'react-router-hash-link';
import { useEffect,useState} from 'react';
import Rating from '@mui/material/Rating';
// import { FaPercentage } from "@react-icons/all-files/fa/FaPercentage";
import { AiOutlinePercentage} from "@react-icons/all-files/ai/AiOutlinePercentage";


function ShopCategoerirsService() {

  const [scrollval,setScrollVal] = useState(null)
  const [scrollTop, setScrollTop] = useState(0);


    window.addEventListener('scroll',()=>{
    const scrolled = window.scrollY;
    handleScroll();
    console.log("scroll height",scrolled);

})

useEffect(()=>{
     const defaultValue = document.getElementById("countValue").children[0];
      console.log("default value ",defaultValue);
      defaultValue.classList.add("change-color");


      const defaultGender = document.getElementById("gender-category-container").children[0];
      defaultGender.classList.add("default-gender");


},[])

  const change_gender = (val) =>{

    const getGenderValue = document.getElementById("gender-category-container");
    
    for(let index = 0; index < getGenderValue.children.length; index++)
    {
      if(val === index){
        let temp = getGenderValue.children[index];
        temp.classList.add("default-gender")
        console.log("select gender",getGenderValue.children[index]);
      }
      else{
        let temp = getGenderValue.children[index];
        temp.classList.remove("default-gender")
      }
    }

  }



const handleScroll = () => {
  // setScrollTop(event.currentTarget.scrollTop);
  const count = document.getElementById("countValue").children.length;
  console.log('count -----',count);

  const serviceContainer = document.getElementById("check-ser-list").children.length;
  console.log("ser container length",serviceContainer);

   const navList = [];
   const serviceList = [];
   for(let i=0;i<count;i++){
    const checkVal = document.getElementById("countValue").children[i].getBoundingClientRect();
    const servcontainerlen = document.getElementById("check-ser-list").children[i].getBoundingClientRect();
    //  console.log("nav loop",Math.ceil(checkVal.top),"ser conttainer   ",Math.ceil(servcontainerlen.top));
     navList.push(Math.ceil(checkVal.top));
     serviceList.push(Math.ceil(servcontainerlen.top));
  }
  console.log("nav-list",navList,"service list",serviceList);

     serviceList.map((a,i)=>{
      if(navList[1] >= a) {
        if(i === (Number(serviceList.length)-1)){

          for(let f=0;f<serviceList.length;f++){
             
            if(i === f){
              const currentval = document.getElementById("countValue").children[f];
              currentval.classList.add("change-color");
              console.log("current container ",serviceList[i],"first nav",navList[0]);
            }
            else{
              const currentval = document.getElementById("countValue").children[f];
              currentval.classList.remove("change-color");
              console.log("current container ",serviceList[i],"first nav",navList[0]);
            }
          }
        }
        else if(navList[1] <= serviceList[i+1]){
           console.log(navList.length,"correct value --------------------",a,"----------------",i);
          for(let j=0;j<navList.length;j++){
            if(j === i)
              {
                const currentval = document.getElementById("countValue").children[j];
                currentval.classList.add("change-color");
                console.log("current container ",serviceList[j],"first nav",navList[0]);
              }
              else{
                const currentval = document.getElementById("countValue").children[j];
                currentval.classList.remove("change-color");
              }
           }
         }

         else{
          console.log("Nothing",i,serviceList.length);
         }

        }    
       })

};

console.log("last checck",scrollTop);


  return (
    
    <div className='shop-service-main-container'>
      
      <div className='gender-main-container'>

        <div className="gender-category-container" id='gender-category-container'>

          <div className="shop-gender-list Woman" onClick={()=> change_gender(0)}>Woman</div>
          <div className="shop-gender-list Men" onClick={()=> change_gender(1)}>Men</div>
          <div className="shop-gender-list Kids" onClick={()=> change_gender(2)}>Kids</div>

        </div>

      </div>

      <div className='shop-service-container'>

        <div className='shop-categories-list-main-container'>
            <div className="shop-categories-list-container" id='countValue'>
              <div className="shop-catrgory list-1"><Link to='#test' id='recomended-nav'>Recommened</Link></div>
              <div className="shop-catrgory list-2" id='hair-care'>Hair Color</div>
              <div className="shop-catrgory list-3">Hair Care</div>
              <div className="shop-catrgory list-4">Bridal</div>
              <div className="shop-catrgory list-5">Skin Care</div>
              <div className="shop-catrgory list-6">Peidicure</div>
            </div>
        </div>

        <div className="shop-search-service-main-container" id="service_main" onScroll={handleScroll}>
          {/* <div className="search-header-shop">
            <div className="shop-service-header">
              Shop Services
            </div>
            <div className="shop-ser-search">
              search
            </div>
          </div> */}
          
          <div className="shop-check-service-list" id='check-ser-list'>

          <div className="shop-service-list-container">
            <div className="shop-service-content-lst">
              
              <div className="shop-service-head">
                <h3 id='first-element'>Recommended</h3>
              </div>
              <div className="shop-service-content">
                <div className="ser-list-card ser-card1">
                  <img  className="service-card-image" src="logo192.png" />

                  <div className="service-card-body">
                        <div>
                         <div className='card-service-card-title'>
                         Hair Coloring And Wax
                         </div>
                         <div className="card-service-card-ratings"><Rating
        name="service-card-shop-rating"
        defaultValue={4.5} precision={0.5}
        readOnly
         /><p>50 votes</p>
                         </div>
                         <div className="card-service-price">
                          100
                         </div>
                        </div>
                        <div className="card-service-add-button">
                    <button>ADD</button>
                  </div>
                  </div>

                </div>

                <div className="ser-list-card ser-card2">
                  <img  className="service-card-image" src="logo192.png" />

                  <div className="service-card-body">
                        <div>
                         <div className='card-service-card-title'>
                         Hair Coloring
                         </div>
                         <div className="card-service-card-ratings"><Rating
        name="service-card-shop-rating"
        defaultValue={4.5} precision={0.5}
        readOnly
         /><p>50 votes</p>
                         </div>
                         <div className="card-service-price">
                          100
                         </div>
                        </div>
                        <div className="card-service-add-button">
                    <button>ADD</button>
                  </div>
                  </div>

                </div>

                <div className="ser-list-card">
                  <img  className="service-card-image" src="logo192.png" />

                  <div className="service-card-body">
                        <div>
                         <div className='card-service-card-title'>
                         Hair Waxing
                         </div>
                         <div className="card-service-card-ratings"><Rating
        name="service-card-shop-rating"
        defaultValue={4.5} precision={0.5}
        readOnly
         /><p>50 votes</p>
                         </div>
                         <div className="card-service-price">
                          100
                         </div>
                        </div>
                        <div className="card-service-add-button">
                    <button>ADD</button>
                  </div>
                  </div>

                </div>

                <div className="ser-list-card">
                  <img  className="service-card-image" src="logo192.png" />

                  <div className="service-card-body">
                        <div>
                         <div className='card-service-card-title'>
                         Hair Bleaching
                         </div>
                         <div className="card-service-card-ratings"><Rating
        name="service-card-shop-rating"
        defaultValue={4.5} precision={0.5}
        readOnly
         /><p>50 votes</p>
                         </div>
                         <div className="card-service-price">
                          100
                         </div>
                        </div>
                        <div className="card-service-add-button">
                    <button>ADD</button>
                  </div>
                  </div>

                </div>

                <div className="ser-list-card">
                  <img  className="service-card-image" src="logo192.png" />

                  <div className="service-card-body">
                        <div>
                         <div className='card-service-card-title'>
                         Hair Washing
                         </div>
                         <div className="card-service-card-ratings"><Rating
        name="service-card-shop-rating"
        defaultValue={4.5} precision={0.5}
        readOnly
         /><p>50 votes</p>
                         </div>
                         <div className="card-service-price">
                          100
                         </div>
                        </div>
                        <div className="card-service-add-button">
                    <button>ADD</button>
                  </div>
                  </div>

                </div>
                
              </div>
            
              
            </div>
          </div>

          <div className="shop-service-list-container">
            <div className="shop-service-content-lst">
              
              <div className="shop-service-head">
                <h3 id='test'>Hair Color</h3>
              </div>

              <div className="shop-service-content">
                <div className="ser-list">Service 1</div>
                <div className="ser-list">Service 1</div>
                <div className="ser-list">Service 1</div>
                <div className="ser-list">Service 1</div>
                <div className="ser-list">Service 1</div>
                <div className="ser-list">Service 1</div>
              </div>
            
              
            </div>
          </div>

          <div className="shop-service-list-container">
            <div className="shop-service-content-lst">
              
              <div className="shop-service-head">
                <h3>List 1</h3>
              </div>
              <div className="shop-service-content">
                <div className="ser-list">Service 1</div>
                <div className="ser-list">Service 1</div>
                <div className="ser-list">Service 1</div>
                <div className="ser-list">Service 1</div>
                <div className="ser-list">Service 1</div>
                <div className="ser-list">Service 1</div>
              </div>
            
              
            </div>
          </div>

          <div className="shop-service-list-container">
            <div className="shop-service-content-lst">
              
              <div className="shop-service-head">
                <h3>List 1</h3>
              </div>
              <div className="shop-service-content">
                <div className="ser-list">Service 1</div>
                <div className="ser-list">Service 1</div>
                <div className="ser-list">Service 1</div>
                <div className="ser-list">Service 1</div>
                <div className="ser-list">Service 1</div>
                <div className="ser-list">Service 1</div>
              </div>
            
              
            </div>
          </div>

          <div className="shop-service-list-container">
            <div className="shop-service-content-lst">
              
              <div className="shop-service-head">
                <h3>Pedicure</h3>
              </div>
              <div className="shop-service-content">
                <div className="ser-list">Service 1</div>
                <div className="ser-list">Service 1</div>
                <div className="ser-list">Service 1</div>
                <div className="ser-list">Service 1</div>
                <div className="ser-list">Service 1</div>
                <div className="ser-list">Service 1</div>
              </div>
            
              
            </div>
          </div>

          <div className="shop-service-list-container">
            <div className="shop-service-content-lst">
              
              <div className="shop-service-head">
                <h3>Pedicure</h3>
              </div>
              <div className="shop-service-content">
                <div className="ser-list">Service 1</div>
                <div className="ser-list">Service 1</div>
                <div className="ser-list">Service 1</div>
                <div className="ser-list">Service 1</div>
                <div className="ser-list">Service 1</div>
                <div className="ser-list">Service 1</div>
              </div>
            
              
            </div>
          </div>
          </div>
        </div>

        
        <div className='inner-cart-main-container'>

<div className='inner-cart-container'>
  <div className="inner-cart-shop-details-container">
    <div className='inner-cart-shop-images'>
    <img src="logo192.png" />
    </div>
    <div className='inner-cart-divider'>
    <div className="inner-cart-shop-name">
      Green Trends
    </div>
    <div className='inner-cart-shop-loation'>
      Chennai
    </div>
    </div>

  </div>

<div className="sticky-inner-cart-container">

  <div className='inner-cart-item-details'>
    <div className="cart-item-name">
         Hair Coloring And Wax
    </div>
    <div className="cart-item-qty">
      <button>-</button> 1 <button>+</button>
    </div>
    <div className="cart-item-price">
      500
    </div>
  </div>

  <div className="inner-cart-coupon">
    <div className="coupon-per-symbol"><AiOutlinePercentage/></div>
    <div className="apply-coupon-text">Apply Coupon</div>
  </div>

  <div className='inner-cart-bill-details-container'>
    <div className='bill-details-header'>
       Bill Details
    </div>
    <div className="total-item">
      <div className='total-item-head'>Item Total</div>
      <div className='total-item-value'>500</div>
    </div>
    <div className="inner-cart-partner-fee">
      <div className='partner-fee-head'>Partner-Fee</div>
      <div className='partner-fee-value'>5</div>
    </div>
    <div className="total-bill-item-pay">
      <div className="to-pay-total">To Pay</div>
      <div className="to-pay-total-amount">505</div>
    </div>
  </div>
  </div>

  <div className="inner-cart-container-payment-btn">
    <button>Payment</button>
  </div>


</div>

        </div>

      </div>

        
    </div>
  )
}

export default ShopCategoerirsService;