import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './offerpanel.css';
import { useEffect ,useState} from 'react';

function OfferPanel() {


  const initial_offer = [];
  const [offer,setOffer ] = useState(initial_offer);
   const [filteroffer,setFilterOffer ] = useState(initial_offer);

  const API_URL = "http://localhost:3500/offerPanelData";

  useEffect(() => {
    const get_offer = async () => {
      const off_list = await fetch(API_URL);
      const final_off = await off_list.json();
      console.log("valuesss", final_off);
       setOffer(final_off);
    };

   get_offer();

  },[]);

  useEffect(()=> {

    const filter_value1 = async() =>{
       const temp = [];
       const filter_value = offer.map(a => { temp.push(a["offer-percent"]) });
          
       setFilterOffer(temp);
    };
     filter_value1();
     console.log("filter valuess111 ",filteroffer);  
  },[offer])


  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },

    desktop: {
      breakpoint: { max: 2000, min: 500 },
      items: 3
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
    <div className='offer-panel-main-container'>
      <div className='offer-panel-conatainer'>
       
       <div className="offer-panel-header">
        <span>Best offers for you</span>
       </div>

       <div className="offer-carosuel-container">

      <Carousel responsive={responsive} >
        {
          offer.map((list,i) =>(

            <div className='offer-panel-card' key={i}>
            <picture className='offer-panel-card-img' src='\logo192.png' alt=''/>             
            <div className='offer-panel-card-cations' >
              <p className='offer-panel-caption-1'>
                <span className='main-offer-caption'>Welcome Offer <span className='offer-panel-value-caption'>{list["offer-percent"]} % </span>Off</span>
                <span className='additional-offer-cation'>Seize this amazing deal</span>
              </p>
            </div>
            <button id='button-color-change' className='offer-panel-card-button'>
             Book Now!
            </button>
            </div>

          ))
        }
      </Carousel>
      </div>
      </div>
    </div>
  )
}

export default OfferPanel;