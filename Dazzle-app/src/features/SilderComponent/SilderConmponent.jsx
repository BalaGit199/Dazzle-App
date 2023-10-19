import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import './sildercomponent.css';
import { FaAngleLeft } from "@react-icons/all-files/fa/FaAngleLeft";
import { FaAngleRight } from "@react-icons/all-files/fa/FaAngleRight";
import { recommendedSalon } from '../../Service/api';
import Rating from '@mui/material/Rating';


function SilderConmponent() {

    const [silderval,setSilder] = useState(null);
    const [cardwidthval ,setCardWidth]= useState(null);
    const [sliderCards ,setSliderCard]= useState(null);
    const [intiCards,setIntialCards] = useState(null);
    const [recommended_slider_list,setRecommeded_slider] = useState([]);


     useEffect(()=>{

        // const sliderContainer = document.getElementById("silder-main-container");
        // const slider = document.getElementById("silder-main-content");
        // setSilder(slider);
        // const sliderCards = slider.getElementsByTagName('li');
        // setSliderCard(sliderCards);
        // console.log("checkkk element",sliderCards);
        // const elementToshow = 4;
        // setIntialCards(elementToshow);
        // const silderContainerwidth = sliderContainer.clientWidth;
        // const cardWidth = silderContainerwidth/elementToshow;
        // setCardWidth(cardWidth);
        // slider.style.width = sliderCards.length*cardWidth + 'px';

        // for(let index=0; index < sliderCards.length; index++){
        //     const element = sliderCards[index];
        //     element.style.width = (cardWidth - 10) + 'px';
        // }

        const recommendsalon_data = async () =>{

            try{
      
              const res = await recommendedSalon();
      
              const recommendsalon_list = await res.json();
      
              setRecommeded_slider(recommendsalon_list);
      
            }
      
           catch(err)
           {
              console.log("erorr---",err.stack);
           }
      
          };

          recommendsalon_data();


     },[])

 

     
     useEffect(()=>{

        // const silder_card1 = sliderCards.length;
        console.log("recommeded salon data",recommended_slider_list);
        // console.log("list cards",silder_card1);
        const silder_content = document.getElementById("slider-container");
        const slider = document.getElementById('slider-content1');
        setSilder(slider);
        const slider_cards = slider.getElementsByTagName('li');
        setSliderCard(slider_cards);
        const silder_content_width = silder_content.clientWidth;
        const elementToShow = 4;
        setIntialCards(elementToShow);
        const single_slide = silder_content_width / elementToShow;
        setCardWidth(single_slide);
        slider.style.width = slider_cards.length*single_slide  + 'px';
        console.log("slider card",silder_content_width,single_slide);

        for(let index = 0;index<slider_cards.length;index++){
             const element = slider_cards[index];
             element.style.width = single_slide + 'px';
             console.log("slider loop",element);
        }
     
     },[recommended_slider_list])


     const next = () =>{
        if(+silderval.style.marginLeft.slice(0,-2) != -cardwidthval*(sliderCards.length - intiCards)){
            silderval.style.marginLeft = (+silderval.style.marginLeft.slice(0,-2))-cardwidthval+'px';
        }
        console.log("margin width",silderval.style.marginLeft.slice(0,-2))
        // console.log("fagghj",cardwidthval*(sliderCards.length - intiCards));
    }

    const prev = () => {
        if(+silderval.style.marginLeft.slice(0,-2) != 0){
            silderval.style.marginLeft = (+silderval.style.marginLeft.slice(0,-2))+cardwidthval+'px';
        }
    
    }






  return (
    <div className='silder-main-container' id='silder-main-container'>
        
        {/* silder-old-container */}
        {/* <div className="silder-container" id='silder-container'>
            <div className="silder silder-left-nav-btn" onClick={()=>prev()}><FaAngleLeft /></div>
            <ul className="silder-main-content" id='silder-main-content'>
            <li className="silder-card"> 
                            <img src="logo192.png" className='slider-card-image'/>
                                <div className="slider-card-body">
                                    <div className="slider-card-shop-name">
                                        Green Trends
                                    </div>
                                    <div className="slider-card-shop-rating">
                                        4.5
                                    </div>
                                    <div className="slider-card-shop-categoeries">
                                        ...............
                                    </div>
                                    <div className="location">
                                        Chennai
                                    </div>
                                </div>
                        </li>
            </ul>
            <div className="silder silder-right-nav-btn" id='silder-right-nav-btn' onClick={()=> next()}><FaAngleRight/></div>
        </div> */}

        <div className="slider-container" id='slider-container'>

            <div className="slider-prev-btn">
                <span onClick={() => prev()}><FaAngleLeft /></span>
            </div>
            <ul className="slider-content" id='slider-content1'>

            {     
         
         recommended_slider_list.map((list,i)=>(
                          
                <li className="slider-card" id='slider-card' key={i}>
                    <img src={list["img"]} className="slider-card-img"/>
                    <div className="slider-card-content">
                        <div className="slider-card-shop-name">
                            {list["shop-name"]} 
                        </div>
                        <div className="slider-card-ratings">
                            <span className="slider-card-rating-value">{list["ratings"]}</span>
                           <span className="slider-card-rating-icon"> <Rating
                          name="recommened-shop-rating"
                          defaultValue={list["ratings"]} precision={0.5}
                          readOnly
                          /></span>
                        </div>
                        <div className="slider-card-location">
                           {list["location"]}
                        </div>
                    </div>
                </li>

                ))
            }

            </ul>
            <div className="slider-next-btn">
                <span onClick={() => next()}><FaAngleRight/></span>
            </div>
        </div>

    </div>
  )
}

export default SilderConmponent;