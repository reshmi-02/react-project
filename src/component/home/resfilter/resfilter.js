import React, { useState, useEffect } from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineHouse, MdOutlineMapsHomeWork } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { GoPlus } from "react-icons/go";

import './resfilter.scss'
import { useDispatch, useSelector } from 'react-redux';
import { handleflatcolor, handlebhkcolor, handlemin, handlemax, handleminvalue, handlemaxvalue } from '../../slice.js';

const Resfilter = () => {
    const state = useSelector((samp) => samp)
    const dispatch = useDispatch()
    const [minprice, setminprice] = useState("min");
    const [maxprice, setmaxprice] = useState("max")
    const [min, setmin] = useState(false)
    const [max, setmax] = useState(false)
    const handlechange = (e) => {
        if (e.target.name === "minprice") {
            setminprice(e.target.value)
        }
        else if (e.target.name === "maxprice") {
            setmaxprice(e.target.value)
        }
    }

    const minchange = () => {
        setmin(!min)
    }
    const maxchange = () => {
        setmax(!max)
    }

    const minpricechange = (val) => {
        let x = state.value.min.map((e) => {
            return e.id === val ? { ...e, minboolean: !e.minboolean && setmin(!min) } : e
        })

        dispatch(handlemin(x))

        let y = state.value.min.find((e) => {
            return e.id === val
        })

        setminprice(` ${y.amount}`)
    }

    useEffect(() => {

        dispatch(handleminvalue(minprice))
        dispatch(handlemaxvalue(maxprice))

    }, [dispatch, minprice, maxprice])

    const maxpricechange = (id) => {
        let x = state.value.max.map((e) => {
            return e.id === id ? { ...e, maxboolean: !e.maxboolean && setmax(!max) } : e
        })

        console.log(x);

        dispatch(handlemax(x))

        let z = state.value.max.find((e) => {
            return e.id === id
        })

        setmaxprice(` ${z.amount}`)
    }



    // flat
    const flatcolorchange = (val) => {
        let x = state.value.villa.map((e) => {

            return e.id === val ? { ...e, flatboolean: !e.flatboolean } : e
            // return e.id === val ? e.flatboolean===false?{...e,flatboolean:e.flatboolean=true && setname(e.value)}:{...e,flatboolean:false && setname("Property")} : e
        })
        dispatch(handleflatcolor(x))
    }


    // no of property
    const nav = useNavigate()
    const gotofilter = () => {
        nav("/filter")
    }

    // go to home
    const home = useNavigate()
    const gotohome = () => {
        home("/")
    }


    // bhk
    const bhkcolorchange = (id) => {
        let x = state.value.flat.map((e) => {
            return e.id === id ? { ...e, bhkboolean: !e.bhkboolean } : e
        })
        dispatch(handlebhkcolor(x))
    }

    return (
        <div className='resfilter-section'>
            <div className='resfilter-container'>
                <div className='resfilter-row1'>
                    <div className='resfilter-row1-filter'>
                        <p className='resfilter-row1-para1'><FaArrowLeftLong onClick={gotohome} />  Filters</p>
                        <p className='resfilter-row1-para2'>(3)</p>
                    </div>
                    <p>Reset</p>
                </div>
                <div className='resfilter-row2'>

                    <div className='resfilter-inner-row2'>
                        <div className="resfilter-row2-filter">
                            <p style={{ borderBottom: "2px solid red" }}>Buy</p>
                        </div>
                        <div className="resfilter-row2-filter">
                            <p>Rent</p>
                        </div>
                        <div className="resfilter-row2-filter">
                            <p>Plot</p>
                        </div>
                        <div className="resfilter-row2-filter">
                            <p>Commercial</p>
                        </div>
                    </div>
                </div>
                <div className='resfilter-row4'>
                    <h4>Budget</h4>
                    <div className='resfilter-inner-row4'>
                        <div className='resfilter-row4-price'>

                            <input onClick={minchange} value={minprice} name="minprice" onChange={handlechange} />


                            <i><IoIosArrowDown /></i>
                            {min ? <div className='resfilter-row4-pricechange'>
                                {
                                    state.value.min.map((e, i) => {
                                        return (

                                            <div key={i}>

                                                <p onClick={() => minpricechange(e.id)}>{e.val}</p>
                                            </div>

                                        )
                                    })
                                }
                            </div> : ""}
                        </div>
                        <p>to</p>
                        <div className='resfilter-row4-price'>
                            <input onClick={maxchange} value={maxprice} name="maxprice" onChange={handlechange} />
                            <i><IoIosArrowDown /></i>

                            {max ? <div className='resfilter-row4-pricechange'>
                                {
                                    state.value.max.map((e, i) => {
                                        return (
                                            <div key={i}>
                                                <p onClick={() => maxpricechange(e.id)} >{e.val}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div> : ""}
                        </div>
                    </div>
                </div>
                <div className='resfilter-row5'>
                    <h4>Property Type</h4>
                    <div className='resfilter-inner-row5'>
                        {state.value.villa.map((e, i) => {
                            return e.flatboolean ? <div key={i} className="resfilter-flat-villa">
                                <div className='resfilter-flat-card' style={{ backgroundColor: "#b2dfd8" }}>

                                    <p className='resfilter-true-icon'><TiTick /></p>
                                    {e.id === 1 ? <i className='resfilter-flat-icon'><MdOutlineMapsHomeWork /></i> :
                                        <i className='resfilter-flat-icon'><MdOutlineHouse /></i>}
                                    <p onClick={() => flatcolorchange(e.id)} >{e.value}</p>

                                </div>

                            </div> :
                                <div key={i} className="resfilter-flat-villa">
                                    <div className='resfilter-flat-card'>
                                        {e.id === 1 ? <i className='resfilter-flat-icon'><MdOutlineMapsHomeWork /></i> :
                                            <i className='resfilter-flat-icon'><MdOutlineHouse /></i>}
                                        <p onClick={() => flatcolorchange(e.id)} >{e.value}</p>
                                    </div>
                                </div>
                        })}
                    </div>
                </div>
                <div className='resfilter-row6'>
                    <h4>BHK</h4>
                    <div className='resfilter-inner-row6'>
                        {state.value.flat.map((e, i) => {
                            return e.bhkboolean ? <div key={i} className='resfilter-row6-flat-bhk'>
                                <div style={{ backgroundColor: "#b2dfd8" }}>
                                    <i style={{ color: "#009681" }}><TiTick /></i>
                                    <p onClick={() => bhkcolorchange(e.id)}>{e.value} BHK</p>
                                </div>
                            </div> : <div key={i} className='resfilter-row6-flat-bhk'>
                                <div>
                                    <i style={{ color: "gray", fontWeight: "bold" }}><GoPlus /></i>
                                    <p onClick={() => bhkcolorchange(e.id)} >{e.value} BHK</p>

                                </div>
                            </div>
                        })}
                    </div>
                </div>
                <div className='resfilter-row7'>
                    <div className='resfilter-row7-btn'>
                        <p onClick={gotofilter}>view detail</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Resfilter