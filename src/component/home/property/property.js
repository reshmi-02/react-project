import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";
import './property.scss'


const Property = () => {
    const state = useSelector((samp) => samp)
    console.log(state.value.aob)
    const nav = useNavigate()
    const detnav = useNavigate()
    const detail = (val) => {
        detnav(`/detail?key=${val}`)
    }
    const seeallprop = () => {
        nav(`/allprop`)
    }
    return (
        <div className='property-section'>
            <div className='property-container'>
                <div className='property-head'>
                    <div className='property-head-content'>
                        <p className='property-head-para'>Popular Owner Properties</p>
                        <p className="property-head-para2" onClick={seeallprop}>See all Properties <FaArrowRight /></p>
                    </div>
                    <div className='property-line'>

                    </div>
                </div>
                <div className='property-row'>
                    {
                        state.value.aob.map((e, i) => {
                            return e.id <= 4 ? <div key={i} className='property-col'>
                                <div className='property-card'>
                                    <div className='property-image'>
                                        <img src={e.image} alt=""></img>
                                    </div>
                                    <p className='property-bhk'>{e.bhk} BHK Flat</p>
                                    <div className='property-amount'>
                                        <h4 className='property-amount-head'>{e.amount}</h4>
                                        <p>|</p>
                                        <h4 className='property-amount-head2'>{e.Sqft} sqft</h4>
                                    </div>
                                    <p className='property-place'>{e.place}</p>
                                    <p className='property-move'>{e.move}</p>
                                    <div className='property-btn'>
                                    <button onClick={() => detail(e.id)}>{e.view}</button>
                                    </div>
                                </div>
                            </div> : ""
                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default Property