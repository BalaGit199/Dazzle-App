import {  Routes, Route } from 'react-router-dom';
import './App.css';
import BookingComponent from './Components/BookingComponent/BookingComponent';
import Header from './Components/HeaderComponent/Header';
// import {useState} from "react";
import HomePage from './Components/HomeComponent/HomePage';
import OfferShopsComponent from './Components/OfferShopsComponent/OfferShopsComponent';
import Registerationcomponent from './Components/RegisterationComponent/Registerationcomponent';
import { ShopOverViewComponent } from './Components/ShopOverViewComponent/ShopOverViewComponent';
import ShopCategoerirsService from './Components/ShopServiceCategoeries/ShopCategoerirsService';
import MainSearchcomponent from './Components/MainSearchComponent/MainSearchcomponent';
import MainSearchpopular from './Components/MainSearchComponent/MainSearchPopular/MainSearchpopular';
import DealsComponent from './Components/DealsComponent/DealsComponent';
import ChechOutcomponent from './Components/CheckOutComponent/ChechOutcomponent';
function App() {
  

  return ( 

    <div className='homecontainer'>
     <Routes>
       <Route path='/' element={<HomePage />} />
       <Route path='/offer-collection' element={<OfferShopsComponent />} />

       <Route path='/booking' element={<BookingComponent/>}>
        <Route path='service' element={<ShopCategoerirsService/>}/>
        <Route path='overview' element={<ShopOverViewComponent/>}/>
       </Route>
       
       <Route path='sign-up' element={<Registerationcomponent/>}/>

       <Route path='checkout' element={<ChechOutcomponent/>}/>

       <Route path='/search' element={<MainSearchcomponent/>} />
        {/* <Route path='' element={<MainSearchpopular/>}/>
        <Route path='hello/:d' element={<ShopOverViewComponent/>}/>   
       </Route> */}
       <Route path='/deals' element={<DealsComponent/>} />
     </Routes>
    </div>

  );
}

export default App;
