import React from 'react';
import './checkoutcomponent.css'
import CheckOutCartReviewComponent from './CheckOutCartReview/CheckOutCartReviewComponent';
import SlotAndPaymentcomponent from './SlotAndPaymentComponent/SlotAndPaymentcomponent';

function ChechOutcomponent() {
  return (
    <div>
         <div className="checkout-main-container">
            <div className="checkout-header-container">
                header
            </div>
            <div className="chechkout-content-container">
                <div className="scheckout-slotandpayment-container">
                <SlotAndPaymentcomponent />
                </div>
                <div className="checkout-checkoutcart-review">
                <CheckOutCartReviewComponent/>
                </div>
            </div>
            </div>
    </div>
  )
}

export default ChechOutcomponent;