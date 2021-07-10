import React from 'react';
import './sideNav.css';
import Heading from './Heading/Heading.js';
import Midmenu from './Midmenu/Midmenu.js';
import Buttommenu from './Buttommenu/Buttommenu.js';
const SideNav = () => {

    return (
        <>
            <div className='side-menu-contain'>
                <div className='main-heading'>
                    <p>  Mine & Shine</p>
                </div>
                <div className='mid-menu'>
                    <Midmenu
                        myIcon={<i class="fa fa-home"></i>}
                        myItem={'Dashboard'}
                    />
                    <Midmenu
                        myIcon={<i class="fa fa-home"></i>}
                        myItem={'Wallet'}
                    />
                    <Midmenu
                        myIcon={<i class="fa fa-home"></i>}
                        myItem={'Statistics'}
                    />
                    <Midmenu
                        myIcon={<i class="fa fa-globe"></i>}
                        myItem={'Transaction'}
                    />
                    <Midmenu
                        myIcon={<i class="fa fa-home"></i>}
                        myItem={'Exchange'}
                    />
                    <Midmenu
                        myIcon={<i class="fa fa-home"></i>}
                        myItem={'News'}
                    />


                </div>
                <div className='buttom-menu'>
                    <div className='buttom-layout-title'> Active Device</div>
                    <div className='buttom-user-status'>
                    <Buttommenu
                        buttomUsericon="#E3E0FE"
                        userlabelStatus={'iphoneBsplus'}
                        uservaluestatus={'active'}
                    />
                    <Buttommenu
                         buttomUsericon="#E3E0FE"
                        userlabelStatus={'Macbook'}
                        uservaluestatus={'active'}
                    />
                    </div>
                   

                </div>

            </div>


        </>
    )
}
export default SideNav;