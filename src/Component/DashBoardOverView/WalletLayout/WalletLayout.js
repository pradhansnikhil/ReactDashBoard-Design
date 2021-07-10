import React from 'react';
import './WalletLayout.css';

    const WalletLayout = ({walletName,walletVal}) => {
    return (
        <>
            <div className='wallet-container'>
                <div className='wallet-label'>
                    <div className='top-wallet-name'>{walletName}</div>
                </div>
                <div className='wallet-value'>
                    <div className='bottom-wallet-val'>{walletVal}</div>
                </div>
                <div className='icon'></div>
            </div>
        </>
    )
}
export default WalletLayout;
