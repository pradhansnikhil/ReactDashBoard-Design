import React from 'react';
import HeaderOptions from './HeaderOptions/HeaderOptions.js';
import './Header.css';
const Header = () => {
    return (
        <>
            <div className='headerLayout'>
                <div className='head-left'>
                    <div className='title'>
                        <h3>WELCOME TO DASHBOARD</h3>
                    </div>
                    <div className='options-layout'>
                        <HeaderOptions
                            headerIcon={"fa fa-bitcoin"}
                        />
                        <HeaderOptions
                            headerIcon={"fa fa-bitcoin"}
                        />

                        <HeaderOptions  headerIcon={"fa fa-bitcoin"}/>
                        <HeaderOptions headerIcon={"fa fa-bitcoin"}/>
                        <HeaderOptions headerIcon={"fa fa-bitcoin"}/>
                        <HeaderOptions headerIcon={"fa fa-bitcoin"}/>
                        <HeaderOptions headerIcon={"fa fa-bitcoin"}/>
                        <HeaderOptions headerIcon={"fa fa-bitcoin"}/>
                        <HeaderOptions headerIcon={"fa fa-bitcoin"}/>
         

                

                    </div>
                </div>
                <div className='head-right'>
                    <div className='title'>
                        <h3>SEARCH</h3>
                    </div>
                    <div className='searchbar'>
                        <input type="text" className='search' placeholder='Enter Search Term' />
                        <div className='action'>
                            <i className="fa fa-search"></i>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}
export default Header;