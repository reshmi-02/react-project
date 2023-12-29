import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { handleaob } from '../../slice.js'
import { LiaBedSolid } from "react-icons/lia";
import { GiDuality } from "react-icons/gi";
import { LiaArrowAltCircleRightSolid } from "react-icons/lia";
import { RiCarWashingLine } from "react-icons/ri";
import { GiBandageRoll } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { GrSteps } from "react-icons/gr";
import Navbar from '../navabar/navbar.js';
import Footer from '../footer/footer.js';
import './allprop.scss'

const Allprop = () => {

    const state = useSelector((samp) => samp)
    const dispatch = useDispatch()
    const detnav = useNavigate()
    const gotodetail = (val) => {
        detnav(`/detail?key=${val}`)
    }
    const detail = (value) => {
        let x = state.value.aob.map((e) => {
            return e.id === value ? { ...e, isdetail: !e.isdetail } : e
        })
        dispatch(handleaob(x))
    }

    return (
        <div className='prop-section'>
            <Navbar/>
            <div className='prop-container'>
                <div className='prop-prop'>
                    <div className='prop-property'>
                        <p>8 Properties</p>
                    </div>
                    <div className='prop-agent'>
                        <p>Top Agents</p>
                    </div>
                </div>
                <div className='prop-row'>
                    <div className="prop-head">
                        <p>8 results | Owner Residential Properties for Rent in Chennai</p>
                    </div>
                    {
                        state.value.aob.map((e, i) => {
                            return e.id >= 5 ? <div key={i} className='prop-col'>
                                <div className="prop-inner-col">
                                    <div className='prop-card'>
                                        <div className='prop-card1'>
                                            <div className='prop-image'>
                                                <img src={e.image} alt="" />
                                            </div>
                                            <p>Agent : {e.owner}</p>
                                        </div>
                                        <div className='prop-card2'>
                                            <p className='prop-card2-head'>{e.innername}</p>
                                            <p>{e.sideheading}</p>
                                            <div className='prop-card2-content'>
                                                {e.isdetail ? <div className='prop-card2-contentdetail'>
                                                    <div className='prop-card2-detail'>
                                                        {e.furnishing ? <div className='prop-card2-area'>
                                                            <i><LiaBedSolid /></i>
                                                            <div className='prop-card2-area-detail'>
                                                                <p>FURNISHING</p>
                                                                <p>{e.furnishing}</p>
                                                            </div>
                                                        </div> : ""}
                                                        {e.tenant ? <div className='prop-card2-area'>
                                                            <i><GiDuality /></i>
                                                            <div className='prop-card2-area-detail'>
                                                                <p>TENANT PREFERRED</p>
                                                                <p>{e.tenant}</p>
                                                            </div>
                                                        </div> : ""}
                                                        {e.carpet ? <div className='prop-card2-area'>
                                                            <i><GiBandageRoll /></i>
                                                            <div className='prop-card2-area-detail'>
                                                                <p>CARPET</p>
                                                                <p>{e.carpet}</p>
                                                            </div>
                                                        </div> : ""}
                                                        {e.carparking ? <div className='prop-card2-area'>
                                                            <i><RiCarWashingLine /></i>
                                                            <div className='prop-card2-area-detail'>
                                                                <p>CAR PARKING</p>
                                                                <p>{e.carparking}</p>
                                                            </div>
                                                        </div> : ""}
                                                        {e.facing ? <div className='prop-card2-area'>
                                                            <i><LiaArrowAltCircleRightSolid /></i>
                                                            <div className='prop-card2-area-detail'>
                                                                <p>FACING</p>
                                                                <p>{e.facing}</p>
                                                            </div>
                                                        </div> : ""}
                                                        {e.floor ? <div className='prop-card2-area'>
                                                            <i><GrSteps /></i>
                                                            <div className='prop-card2-area-detail'>
                                                                <p>FLOOR</p>
                                                                <p>{e.floor}</p>
                                                            </div>
                                                        </div> : ""}
                                                    </div>
                                                    <div className='prop-card2-icon'>
                                                        <i onClick={() => detail(e.id)}><IoIosArrowUp /></i>
                                                    </div>
                                                </div> : <div className='prop-card2-contentdetail'>
                                                    <div className='prop-card2-detail'>
                                                        {e.furnishing ? <div className='prop-card2-area'>
                                                            <i><LiaBedSolid /></i>
                                                            <div className='prop-card2-area-detail'>
                                                                <p>FURNISHING</p>
                                                                <p>{e.furnishing}</p>
                                                            </div>
                                                        </div> : ""}
                                                        {e.tenant ? <div className='prop-card2-area'>
                                                            <i><GiDuality /></i>
                                                            <div className='prop-card2-area-detail'>
                                                                <p>TENANT PREFERRED</p>
                                                                <p>{e.tenant}</p>
                                                            </div>
                                                        </div> : ""}
                                                        {e.carpet ? <div className='prop-card2-area'>
                                                            <i><GiBandageRoll /></i>
                                                            <div className='prop-card2-area-detail'>
                                                                <p>CARPET</p>
                                                                <p>{e.carpet}</p>
                                                            </div>
                                                        </div> : ""}

                                                    </div>
                                                    <div className="prop-card2-icon">
                                                        <i onClick={() => detail(e.id)}><IoIosArrowDown /></i>
                                                    </div>
                                                </div>}
                                            </div>
                                            <p className="prop-card2-direction">{e.direction}</p>
                                        </div>

                                    </div>
                                    <div className='prop-card3'>
                                        <h4>{e.amount}</h4>
                                        {e.security ? <p>{e.security}</p> : <p>{e.charges}</p>}
                                        <div className='prop-card3-btn'>
                                            <button onClick={() => gotodetail(e.id)}>View Detail</button>
                                        </div>
                                    </div>
                                </div>
                            </div> : ""

                        })
                    }
                </div>
            </div>
            <div className='responsive-prop-section'>
                <div className='responsive-prop-head'>
                    <div className='responsive-prop-inner-head'>
                        <p>8 results |  Properties for Rent in Chennai</p>
                        <div className="responsive-prop-line">

                        </div>
                    </div>
                </div>
                <div className='responsive-prop-container'>
                    {
                        state.value.aob.map((e, i) => {
                            return (
                                <div className='responsive-prop-col' key={i}>
                                    <div className='responsive-prop-card'>
                                        <div className='responsive-prop-content'>
                                            <div className='responsive-prop-image'>
                                                <img src={e.image} alt="" />
                                            </div>
                                            <div className='responsive-prop-content-detail'>
                                                <p className='responsive-prop-para1'>{e.amount}</p>
                                                <p className='responsive-prop-para2'>{e.innername}</p>
                                                <div className='responsive-prop-content-inner-detail'>
                                                    <div className='responsive-prop-detail-area'>
                                                        <p className='responsive-prop-para3'>Carpet area</p>
                                                        <p >{e.carpet}</p>
                                                    </div>
                                                    <div className='responsive-prop-detail-area'>
                                                        <p className='responsive-prop-para3'>Status</p>
                                                        <p >{e.move}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className='responsive-prop-btn'>
                    <div className='responsive-prop-btn1'>
                        <p onClick={() => gotodetail(e.id)}>View Detail</p>
                    </div>
                    <div className='responsive-prop-btn2'>
                        <p>Contact Owner</p>
                    </div>
                </div>
                                </div>
                            )
                        })
                    }
                </div>
                
            </div>
            <Footer/>
        </div>
    )
}

export default Allprop