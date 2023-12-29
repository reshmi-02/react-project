import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import './navbar.scss'
import { HiMiniBars3 } from "react-icons/hi2";

const Navbar = () => {
    return (
        <div className="navbar-section">
            <div className='navbar-container'>
                <div className='navbar-row1'>
                    <div className="navbar-col1">
                        <div className='navbar-col1-sub1'>
                            <h3>magicbricks</h3>
                            <p>chennai <IoIosArrowDown /></p>
                        </div>
                        <div className='navbar-col1-sub2'>
                            <p>MB Prime <IoIosArrowDown /></p>
                            <p>Login <IoIosArrowDown /></p>
                            <div className='navbar-col1-sub2-content'>
                                <p className="navbar-prop">Post Property </p>
                                <p className="navbar-free">free</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='navbar-row2'>
                    <div className='navbar-col2'>
                        <div className="navbar-col2-content">
                            <p>Buy <IoIosArrowDown className="navbar-icon"/></p>
                        </div>
                        <div className="navbar-col2-content">
                            <p>Rent <IoIosArrowDown className="navbar-icon"/></p>
                        </div>
                        <div className="navbar-col2-content">
                            <p>Sell <IoIosArrowDown className="navbar-icon"/></p>
                        </div>
                        <div className="navbar-col2-content">
                            <p>Home Loans <IoIosArrowDown className="navbar-icon"/></p>
                        </div>
                        <div className="navbar-col2-content">
                            <p>Property Services <IoIosArrowDown className="navbar-icon"/></p>
                        </div>
                        <div className="navbar-col2-new-content">
                        <p className="navbar-col2-prop">MB Advice </p>
                            <p className="navbar-col2-free">new </p>
                            <IoIosArrowDown className="navbar-icon"/>
                        </div>
                        <div className="navbar-col2-content">
                            <p>Help <IoIosArrowDown className="navbar-icon"/></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='responsive-navbar-section'>
                <div className='responsive-navbar-bars'>
                    <p><HiMiniBars3 className="responsive-bar"/></p>
                    <img alt="" src='https://cdn.staticmb.com/magicservicestatic/images/revamp/mb-logo-mobile-white.svg'></img>
                </div>
                <div className='responsive-navbar-props'>
                    <div className='responsive-navbar-content'>
                                <p className="responsive-navbar-prop">Post Property </p>
                               
                            </div>
                            <p className="responsive-navbar-free">free</p>
                </div>
            </div>
        </div>
    )
}   

export default Navbar