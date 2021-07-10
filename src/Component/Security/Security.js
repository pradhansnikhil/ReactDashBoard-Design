import React from 'react';
import './Security.css';
const Security = ({securityLabel,securityValue,securityBgcolor})=> {
    return(
        <>
        <div className='security-layout'>
            <div className='security-left'>
            <div className='security-label'>{securityLabel}</div>
            <div className='security-value'>{securityValue}</div>
 
             
            </div>
            <div className='security-right'></div>
        </div>
        </>
    )

}
export default Security;