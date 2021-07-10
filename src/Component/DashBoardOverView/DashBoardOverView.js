import React from 'react';
import './DashBoardOverView.css';
import BalanceDisplay from './BalanceDisplay/BalanceDisplay.js';
import WalletLayout from './WalletLayout/WalletLayout.js';
import MarketValue from './MarketValue/MarketValue.js';
import VendorsLayout from './VendorLayout/VendorLayout.js';
const DashBoardOverView = () => {
    return (
     
            <div className="display-layout">
                <div className="title"><h3>OverView</h3></div>
                <div className="display-body">
                    <div className="left-layout">
                        <div className="child-top">
                            <BalanceDisplay />
                        </div>
                        <div className="child-bottom">
                            <WalletLayout 
                                walletName={'Niowallet' }
                                walletVal= {'4.4345675 NIO' }
                            />
                            <WalletLayout
                            walletName={'Etherum Wallet' }
                                walletVal={'0.000764 ETH' } 

                                />
                        </div>
                    </div>
                    <div className="middle-layout">
                        <MarketValue bgColor="#E3E0FE"
                            currency={'BTC/USD'}
                            currencyValue={'$18.925'}
                        />
                        <MarketValue bgColor="#D8F8E8"
                            currency={'ETH/USD'}
                            currencyValue={'$591.889'}
                        />
                        <MarketValue bgColor="#DBE3F7"
                            currency={'XTH/USD'}
                            currencyValue={'$0.61686'}
                        />
                        <MarketValue bgColor="#F1EDE9"
                            currency={'Litecoin/USD'}
                            currencyValue={'$87.889'}
                        />
                    </div>
                    <div className="right-layout">
                        <VendorsLayout vendorIcon={'https://image.flaticon.com/icons/png/512/124/124010.png'}
                            vendorName={'facebook'}
                            vendorRate={'+$7000'}
                            vendorType={'social'}
                            time={'11:45AM'}
                        />
                        <VendorsLayout vendorIcon={"https://play-lh.googleusercontent.com/1keEOkk2GrxZpaRH73-vDqpAXhJNU9tbP5mfk82X6YxH8EhnU2JPOb5w1FLUJiqkEg=s180-rw"}
                            vendorName={'foodpanda'}
                            vendorRate={'-$15.5'}
                            vendorType={'Meal'}
                            time={'10:00AM'}
                        />
                        <VendorsLayout  vendorIcon={'https://image.similarpng.com/very-thumbnail/2020/06/Icon-logo-vodafone-transparent-background-PNG.png'}
                            vendorName={'vodaphone'}
                            vendorRate={'-$58'} 
                            vendorType={'Phone'}
                            time={'4:13PM'}
                        />
                        <VendorsLayout vendorIcon={'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/022017/untitled-1_140.jpg?itok=TXk1sbAY'}
                         vendorName={'uberPremier'}
                            vendorRate={'-$8.75'}
                            vendorType={'Transport'}
                            time={'8:30PM'} />
                        <VendorsLayout vendorIcon={'https://barretthonors.asu.edu/sites/default/files/styles/event_image/public/events/citibank_twitter_profile_icon_v04.png?itok=2PCxMVyF'}
                             vendorName={'citibank'}
                            vendorRate={'-$2318.75'}
                            vendorType={'credited'}
                            time={'9:30PM'}
                        />
                    </div>
                </div>
            </div>
    
    )
}
export default DashBoardOverView;