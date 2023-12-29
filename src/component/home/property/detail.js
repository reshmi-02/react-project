import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineBed } from "react-icons/md";
import { LiaBathSolid } from "react-icons/lia";
import { LiaBedSolid } from "react-icons/lia";
import { GiDuality } from "react-icons/gi";
import { LiaArrowAltCircleRightSolid } from "react-icons/lia";
import { GiBandageRoll } from "react-icons/gi";
import Navbar from '../navabar/navbar.js';
import Footer from '../footer/footer.js';
// import { IoIosArrowDown } from "react-icons/io";
// import { IoIosArrowUp } from "react-icons/io";
import './detail.scss'

const Detail = () => {
    const [param] = useSearchParams()
    console.log(param.get("key"))
    const state = useSelector((samp) => samp)

    const [boolean, setboolean] = useState(false)
    const [readmore, setreadmore] = useState(false)
    const viewdetail = () => {
        setboolean(true)
    }
    const read = () => {
        setreadmore(!readmore)
    }
    return (
        <div className='detail-section'>
            <Navbar/>
            <div className='detail-container'>
                <div className='detail-row1'>
                    <div className='detail-col1'>

                        {
                            state.value.aob.map((e, i) => {
                                return e.id === Number(param.get("key")) ? <div className='detail-col1-card' key={i}>
                                    <p className="detail-col1-para1">{e.amount}</p>
                                    <p className='detail-col1-para2'>{e.mainname}</p>
                                    <div className='detail-col1-inner-card'>
                                        <div className='detail-col1-innner-card-image'>
                                            <img src={e.image} alt=""></img>
                                        </div>
                                        <div className='detail-col1-inner-card-content'>
                                            <div className='detail-col1-essential'>
                                                <p><MdOutlineBed /> <span>{e.bed}</span> Beds</p>
                                                <p style={{ borderRight: "1px solid silver", borderLeft: "1px solid silver" }}><LiaBathSolid /> <span>{e.bath}</span> Baths</p>
                                                <p><LiaBedSolid /> {e.furnishing}</p>
                                            </div>
                                            <div className='detail-col1-detail'>
                                                {
                                                    e.carpet ? <div className='detail-col1-detail-content'>
                                                        <p>Area</p>
                                                        <h4>{e.carpet} sqft</h4>
                                                    </div> : ""
                                                }
                                                {
                                                    e.floor ? <div className='detail-col1-detail-content'>
                                                        <p>Floor</p>
                                                        <h4>{e.floor}</h4>
                                                    </div> : ""
                                                }
                                                {
                                                    e.facing ? <div className='detail-col1-detail-content'>
                                                        <p>Facing</p>
                                                        <h4>{e.direction}</h4>
                                                    </div> : ""
                                                }
                                                {
                                                    e.carparking ? <div className='detail-col1-detail-content'>
                                                        <p>Carparking</p>
                                                        <h4>{e.carparking}</h4>
                                                    </div> : ""
                                                }
                                                {
                                                    e.availability ? <div className='detail-col1-detail-content'>
                                                        <p>Status</p>
                                                        <h4>{e.availability}</h4>
                                                    </div> : ""
                                                }
                                                {
                                                    e.ageofconstruciton ? <div className='detail-col1-detail-content'>
                                                        <p>Age of construction</p>
                                                        <h4>{e.ageofconstruciton}</h4>
                                                    </div> : ""
                                                }
                                                {

                                                    e.tenant ? <div className='detail-col1-detail-content'>
                                                        <p>Tenant</p>
                                                        <h4>{e.tenant}</h4>
                                                    </div> : ""

                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="detail-col1-footer">
                                        <div className='detail-col1-footer-owner'>
                                            <p>Contact Owner</p>
                                        </div>
                                        <div className='detailcol1-footer-availability'>
                                            <p>Check Availability</p>
                                        </div>
                                    </div>
                                </div> : ""
                            })
                        }

                    </div>
                    <div className='detail-col2'>
                        {
                            state.value.aob.map((e, i) => {

                                return e.id === Number(param.get("key")) ? <div className='detail-col2-card' key={i}>
                                    <h3>More Details</h3>
                                    <div className="detail-col2-inner-card">
                                        <div className='detail-col2-detail'>
                                            <p>Rental Value</p>
                                            <h4>{e.rentalvalue}</h4>
                                        </div>
                                        <div className='detail-col2-detail'>
                                            <p>Security Deposit</p>
                                            <h4>{e.securitydeposit} {e.deposit}</h4>
                                        </div>
                                        <div className='detail-col2-detail'>
                                            <p>Address</p>
                                            <h4>{e.Address}</h4>
                                        </div>
                                        <div className='detail-col2-detail'>
                                            <p>Age of construction</p>
                                            <h4>{e.ageOfConstruction}</h4>
                                        </div>

                                        <div className='detail-col2-detail'>
                                            <p>Flooring</p>
                                            <h4>{e.Flooring}</h4>
                                        </div>
                                        <div className='detail-col2-detail'>
                                            <p>Over Looking</p>
                                            <h4>{e.overlooking}</h4>
                                        </div>

                                        {
                                            boolean ? <div className='detail-col2-inner-detail'>
                                                <div className='detail-col2-detail'>
                                                    <p>Additional Rooms</p>
                                                    <h4>{e.additionalrooms}</h4>
                                                </div>
                                                <div className='detail-col2-detail'>
                                                    <p>Water Availability</p>
                                                    <h4>{e.waterAvailability}</h4>
                                                </div>
                                                <div className='detail-col2-detail'>
                                                    <p>Powercut</p>
                                                    <h4>{e.powerCut}</h4>
                                                </div>
                                            </div> : <p className="detail-col2-detail-para" onClick={viewdetail}>view all details <IoIosArrowDown /></p>
                                        }

                                        <div className='detail-col2-description'>
                                            <p><span>Description : </span>{e.description}</p>
                                        </div>
                                        <div className='detail-col2-btn'>
                                            <p>contact owner</p>
                                        </div>
                                    </div>
                                </div> : ""

                            })
                        }

                    </div>
                </div>
                <div className="detail-row2">
                    <div className="detail-row2-col">
                        <h4>Contact Owner</h4>
                        {
                            state.value.aob.map((e, i) => {
                                return e.id === Number(param.get("key")) ? <h4 key={i}>{e.owner}</h4> : ""

                            })
                        }
                        <p>Check Availability</p>
                    </div>
                </div>
            </div>
            {/* responsive */}
            <div className='responsive-detail-section'>
                {
                    state.value.aob.map((e, i) => {
                        return e.id === Number(param.get("key")) ? <div className='responsive-detail-container' key={i}>
                            <div className='responsive-detial-image'>
                                <img src={e.image} alt="" />
                            </div>
                            <div className='responsive-detail-row1'>
                                <p className='responsive-detail-para1'>{e.amount}</p>
                                <p className='responsive-detail-para2'>{e.innername}</p>
                            </div>
                            <div className='responsive-detail-row2'>
                                <div className='responsive-detail-row2-btn'>
                                    <div className='responsive-detail-row2-btn1'>
                                        <p>Get Phone Number</p>
                                    </div>
                                </div>
                                <div className='responsive-detail-row2-btn'>
                                    <div className='responsive-detail-row2-btn2'>
                                        <p>Contact Owner</p>
                                    </div>
                                </div>
                            </div>
                            <div className="responsive-detail-row3">
                                {
                                    e.furnishing ? <div className='responsive-detail-card'>
                                        <i><LiaBedSolid /></i>
                                        <p>{e.furnishing}</p>
                                    </div> : ""
                                }
                                {
                                    e.carpet ? <div className='responsive-detail-card'>
                                        <i><GiBandageRoll /></i>
                                        <p>{e.carpet}</p>
                                    </div> : ""
                                }
                                {
                                    e.facing ? <div className='responsive-detail-card'>
                                        <i><LiaArrowAltCircleRightSolid /></i>
                                        <p>{e.facing}</p>
                                    </div> : ""
                                }
                                {
                                    e.tenant ? <div className='responsive-detail-card'>
                                        <i><GiDuality /></i>
                                        <p>{e.tenant}</p>
                                    </div> : ""
                                }
                                {
                                    e.bed ? <div className='responsive-detail-card'>
                                        <i> <MdOutlineBed /></i>
                                        <p>{e.bed} Beds</p>
                                    </div> : ""
                                }
                                {
                                    e.bath ? <div className='responsive-detail-card'>
                                        <i><LiaBathSolid /></i>
                                        <p>{e.bath} Baths</p>
                                    </div> : ""
                                }
                            </div>
                            <div className='responsive-detail-row4'>
                                <h3>More Details</h3>
                                <div className='responsive-detail-row4-content'>
                                    <p>Rental Value</p>
                                    <h4>{e.rentalvalue}</h4>
                                </div>
                                <div className='responsive-detail-row4-content'>
                                    <p>Security Deposit</p>
                                    <h4>{e.securitydeposit} {e.deposit}</h4>
                                </div>
                                <div className='responsive-detail-row4-content'>
                                    <p>Address</p>
                                    <h4>{e.Address}</h4>
                                </div>
                                <div className='responsive-detail-row4-content'>
                                    <p>Age of construction</p>
                                    <h4>{e.ageOfConstruction}</h4>
                                </div>

                                <div className='responsive-detail-row4-content'>
                                    <p>Flooring</p>
                                    <h4>{e.Flooring}</h4>
                                </div>
                                <div className='responsive-detail-row4-content'>
                                    <p>Over Looking</p>
                                    <h4>{e.overlooking}</h4>
                                </div>
                                <div className='responsive-detail-row4-content'>
                                    <p>Additional Rooms</p>
                                    <h4>{e.additionalrooms}</h4>
                                </div>
                                <div className='responsive-detail-row4-content'>
                                    <p>Water Availability</p>
                                    <h4>{e.waterAvailability}</h4>
                                </div>
                                <div className='responsive-detail-row4-content'>
                                    <p>Powercut</p>
                                    <h4>{e.powerCut}</h4>
                                </div>  
                            </div>
                        </div> : ""

                    })
                }
            </div>
            <div className="detail-disclaimer">
                {
                    readmore ? <div className='detail-disclaimer-para'>
                        <p><span>Disclaimer : </span>Magicbricks has endeavoured to ascertain the requirement of RERA registration. However, the advertiser claims that there
                            is no requirement for such registration. Users are cautioned accordingly...</p>
                        <p>Magicbricks acts merely as a medium for posting information and content. It is clarified that the data available on the website is not physically verified and hence no representation or warranty is expressly or impliedly given to its accuracy in any form. The User is advised to do thorough research and due diligence before making any decision regarding investment. Nothing contained on the platform shall
                            deem to constitute legal advice, solicitation, invitation etc. in any form whatsoever.<span onClick={read}>Read Less</span></p>
                    </div> : <div className='detail-disclaimer-para'>
                        <p><span>Disclaimer : </span>Magicbricks has endeavoured to ascertain the requirement of RERA registration. However, the advertiser claims that there
                            is no requirement for such registration. Users are cautioned accordingly...<span onClick={read}>Read More</span></p>
                    </div>
                }

            </div>
            <Footer/>
        </div>
    )
}

export default Detail