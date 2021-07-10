import React from 'react';
import './BalanceDisplay.css';
const BalanceDisplay = () => {
    return (
        <>
            <div className="balance-layout">
                <div className="left">
                    <div className="top">
                        <div className="label">Avilable Ballance In USD</div>
                        <div className="value">134,510.14</div>
                    </div>
                    <div className="middle">
                        <div className="child-left">
                        <div className="label">Transction</div>
                        <div className="value">34,405</div>
                        </div>
                        <div className="child-right">
                        <div className="label">Wallet</div>
                        <div className="value">23</div>
                        </div>
                    </div>
                    <div className="bottom">
                    <div className="label">Last Activity at 21may,2021</div>
                    </div>
                </div>
                <div className="right"></div>

            </div>
        </>
    )
}
export default BalanceDisplay;
