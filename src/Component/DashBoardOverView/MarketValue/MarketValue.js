import React from 'react';
import './MarketValue.css';
const MarketValue=({bgColor,currency,currencyValue})=>{
    return(
       <div className="marketValue-layout" style={{background:bgColor}}>
           <div className="marketItem-label">
            <div className='currency-up'>{currency}</div>
           </div>
           <div className="marketItem-value">
            <div className='currency-value'>{currencyValue} <span> <i class="fa fa-arrow-up"></i></span></div>
           
           </div>
       </div>
    )
}
export default MarketValue;
