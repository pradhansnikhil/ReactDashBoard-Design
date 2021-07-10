import React from 'react';
import './VendorLayout.css';
const VendorLayout=({vendorIcon,vendorRate,vendorName,vendorType,time})=>{
    return(
        <div className="vendor-layout-wrapper">
            <div className="vendor-left">
                <img src={vendorIcon}/>
            </div>
            <div className="vendor-middle">
                <div className="vendor-child-top">
                    <div className='up-child-name'>{vendorName}</div>
                    <div className='below-child-type'>{vendorType}</div>
                </div>
            </div>
            <div className="vendor-right">
            <div className='up-child-rate'>{vendorRate}</div>
            <div className='below-child-type'>{time}</div>
            </div>
        </div>
    )
}
export default VendorLayout;
