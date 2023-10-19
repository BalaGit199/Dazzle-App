import React from 'react'
import FooterComponent from '../FooterComponent/FooterComponent';
import Header from '../HeaderComponent/Header';
import NearByCityComponent from '../NearByComponent/NearByCityComponent';
import OfferPanel from '../OfferPanelcomponent/OfferPanel';
import RecommendedSalon from '../RecommendedSalonComponent/RecommendedSalon';
import './homepage.css';

function HomePage() {
  return (
    <div className='app-homepage'>
    <Header className="header-test"/>
     <div className='home-conatiner'>
     <OfferPanel/>
     <RecommendedSalon/>
     <NearByCityComponent/>
     <FooterComponent />
     </div>
    </div>
  )
}

export default HomePage;