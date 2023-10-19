import { useState,useEffect } from 'react'
import FilterComponent from '../FilterComponent/FilterComponent';
import './nearbycitycomponent.css';
import Rating from '@mui/material/Rating';
import { recommendedSalon } from '../../Service/api';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { nearBySalon } from '../../Service/api';
import { useDispatch } from 'react-redux';
import { setNearByVal } from '../../ReduxSlicers/FilterSlicer';
import { useSelector, UseSelector } from 'react-redux/es/hooks/useSelector';





function NearByCityComponent() {
  

   const [nearby,setNearBy] = useState([]);
   const dispatch = useDispatch();

   const nearBy_list = useSelector(state => state.filter.value.nearByIntiList);

  useEffect(() => {
     
   const get_nearby = async () =>{

      try{
         
         const res = await nearBySalon();

         const nearbyList = await res.json();

         dispatch(setNearByVal(nearbyList));

         console.log("near by res",nearBy_list);

      }
      catch(err){
         console.log("error", err.stack);
      }

   }
     get_nearby();

  },[])

  useEffect(()=>{
   setNearBy(nearBy_list);
   console.log("nearby intial value",nearBy_list);
  },[nearBy_list])


  return (
    <div className='nearby-main-container'>

        <div className='nearby-container'>

            <div className='nearby-header'>
               <h2>Nearby salon in Chennai</h2>
            </div>
            <div className='nearby-filter-container'>
              <FilterComponent className='filter-container'/>
            </div>
            <div className='nearby-content-container'>
                
            <Row xs={1} md={4} className="g-4">

                 {
                  nearby.map((near,i) => (
                     <Col key={i}>
                     <div className='nearby-card'>
                     <div className="nearby-shop-image">
                     <img src="/logo192.png"/>
                     </div>
                          <div className="nearby-shop-name">
                          {near["shopName"]}
                          </div>
                          <div className="rating-container-nearby">

                           <span className='nearby-ratings-value'>{4.5}</span> 
                          <Rating
                          name="recommened-shop-rating"
                          defaultValue={4.5} precision={0.5}
                          readOnly
                          />            
                          </div>
                          <div className="nearby-shop-location">
                               {near["location"]}
                          </div>
                     
                     </div>
                   </Col>

                  ))
                 }
                  
            </Row>
            </div>
         
        </div>


    </div>
  )
}

export default NearByCityComponent;