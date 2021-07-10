import React from 'react';
import './Midmenu.css';
const Midmenu = ({ myIcon, myItem }) => {
    return (
        <>
            <div className='mid-items'>
                <div className='right-items'>
                    <div>{myIcon}</div>
                </div>
                <div className='left-icons'>
                    <div>{myItem}</div>
                </div>
            </div>




        </>
    )
}
export default Midmenu;