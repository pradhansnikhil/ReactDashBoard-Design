import React from 'react';
import Header from '../Header/Header.js';
import DashBoardOverView from '../DashBoardOverView/DashBoardOverView.js';
import './DashBoardContent.css';
import Security from '../Security/Security';
import Mining from '../Miningstatus/Mining.js';

const DashBoardContent = () => {
    return (
        <>
            <div className='content-layout'>
                <Header />
                <DashBoardOverView />
                <div className="footer-title">
                    <div className="left-title">Security</div>
                    <div className="right-title">Mining Status</div>
                </div>
                <div className='footerSection'>
                    <div className='security-section'>
                        <Security
                            securityLabel={'Identity'}
                            securityValue={'disable'}
                        />
                        <Security
                             securityLabel={'Identity'}
                            securityValue={'disable'}
                        />
                        <Security
                             securityLabel={'Phone'}
                            securityValue={'enable'}
                        />
                        <Security
                             securityLabel={'Phone'}
                            securityValue={'enable'}
                        />
                    </div>
                    <div className='mining-section'>
                        <Mining
                            miningBgColor={'#FFCD41'}
                        />
                        <Mining miningBgColor={'#FF8F68'}/>
                        <Mining miningBgColor={'#7A3DFD'}/>
                        <Mining miningBgColor={'#11f154'}/>
                    </div>

                </div>
            </div>




        </>
    )
}
export default DashBoardContent;