import React from 'react';
import './Buttommenu.css';
const Buttommenu = ({ userlabelStatus, uservaluestatus, buttomUsericon }) => {
    return (
        <>


            <div className='buttom-items-layout'>
                
                    <div className='buttom-left-image'
                     style={{ background: buttomUsericon }}></div>
                    <div className='buttom-right-item'>
                        <div className='buttom-user-label'>
                            <div>{userlabelStatus}</div>
                        </div>
                        <div className='buttom-user-value'>
                            <div>{uservaluestatus}</div>
                        </div>
                    
                </div>

            </div>


        </>
    )
}
export default Buttommenu;