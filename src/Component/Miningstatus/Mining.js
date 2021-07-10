import React from 'react';
import './Mining.css';
const Mining = ({ isOption,miningBgColor }) => {
    return (
        <>
            <div className="mining-layout">
                <div className="mining-left">
                    <div className="logo" style={{background:miningBgColor}}>
                        <i class="fa fa-bitcoin"></i>
                    </div>
                </div>
                <div className="mining-middle">
                    <div className="mining-child-top">
                        Gpus Mining
                   </div>
                    <div className="mining-child-bottom">
                        Running
                   </div>
                </div>
                <div className="mining-right">
                    <label className="switch">
                        <input type="radio" />
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>
        </>
    )
}
export default Mining;