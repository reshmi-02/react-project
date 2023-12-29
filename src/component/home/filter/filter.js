import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
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
import './filter.scss'
const Filter = () => {
    const state = useSelector((samp) => samp)
    const min = Number(state.value.minvalue);
    const max = Number(state.value.maxvalue);
    console.log(min);
    console.log(max);
    const [villa, setvilla] = useState([])
    console.log(villa);
    console.log(villa[0])
    const [bhk, setbhk] = useState([])
    console.log(bhk);
    const [temp, settemp] = useState([])
    let len = temp.length
    let nav = useNavigate()
    const dispatch = useDispatch()
    const change = (val) => {
        nav(`/detail?key=${val}`)
    }
    const detail = (value) => {
        let x = state.value.aob.map((e) => {
            return e.id === value ? { ...e, isdetail: !e.isdetail } : e
        })
        dispatch(handleaob(x))
    }
    useEffect(() => {
        let villa = []
        let x = state.value.villa.filter((e) => {
            return e.flatboolean === true ? villa.push(e.value) : ""
        })
        console.log(x)
        console.log(villa);
        setvilla(villa)

        let bhk = []
        let y = state.value.flat.filter((e) => {
            return e.bhkboolean === true ? bhk.push(e.value) : ""
        })
        console.log(bhk);
        setbhk(bhk)

        let z = bhk.filter((e) => {
            return e
        })
        console.log(z);


    }, [])

    useEffect(() => {


        let arr = []
        // for(let i=0;i<=bhk.length;i++){

        let y = state.value.aob.map((e) => {

            // return ((e.bhk===bhk[i]) && ((e.newamount>=min && e.newamount<=max) || (e.newamount>=min && isNaN(max) )  || (e.newamount<=max && isNaN(min))) &&  ( villa[0]===e.type || villa[1]===e.type)) ?arr.push(e):""
            if ((e.bhk === bhk[0] || (e.bhk === bhk[1]) || (e.bhk === bhk[2]) || (e.bhk === bhk[3]) || (e.bhk === bhk[4])) && ((e.newamount >= min && e.newamount <= max) || (e.newamount >= min && isNaN(max)) || (e.newamount <= max && isNaN(min))) && (villa[0] === e.type || villa[1] === e.type)) {
                arr.push(e)
            }
            else if ((e.bhk === bhk[0] || (e.bhk === bhk[1]) || (e.bhk === bhk[2]) || (e.bhk === bhk[3]) || (e.bhk === bhk[4])) && ((isNaN(min)) && (isNaN(max))) && ((villa[0] === e.type) || (villa[1] === e.type))) {
                arr.push(e)
            }
            else if ((bhk[0] === undefined) && ((e.newamount >= min && e.newamount <= max) || (e.newamount >= min && isNaN(max)) || (e.newamount <= max && isNaN(min))) && ((villa[0] === e.type) || (villa[1] === e.type))) {
                arr.push(e)
            }
            else if ((bhk[0] === undefined) && ((isNaN(min)) && (isNaN(max))) && ((villa[0] === e.type) && (villa[1] === undefined))) {
                arr.push(e)
            }

            else if ((bhk[0] === undefined) && ((isNaN(min)) && (isNaN(max))) && ((villa[0] === undefined) && (villa[1] === e.type))) {
                arr.push(e)
            }
            else if ((bhk[0] === undefined) && (e.newamount >= min && isNaN(max)) && ((villa[0] === undefined) && (villa[1] === undefined))) {
                arr.push(e)
            }
            else if ((bhk[0] === undefined) && ((e.newamount <= max && isNaN(min))) && ((villa[0] === undefined) && (villa[1] === undefined))) {
                arr.push(e)
            }
            else if ((bhk[0] === undefined) && ((e.newamount >= min && e.newamount <= max)) && ((villa[0] === undefined) && (villa[1] === undefined))) {
                arr.push(e)
            }

        })


        console.log(arr)
        settemp(arr)
    }, [bhk, villa, min, max, state.value.aob])

    return (
        <div className="filter-section">
            <Navbar/>
            <div className='filter-container'>
                <div className='filter-prop'>
                    <div className='filter-property'>
                        <p>{len} Properties</p>
                    </div>
                    <div className='filter-agent'>
                        <p>Top Agents</p>
                    </div>
                </div>
                <div className='filter-row'>
                    <div className="filter-head">
                        <p>{len} results | Owner Residential Properties for Rent in Chennai</p>
                    </div>
                    {
                        temp?.map((e, i) => {
                            return <div key={i} className='filter-col'>
                                <div className="filter-inner-col">
                                    <div className='filter-card'>
                                        <div className='filter-card1'>
                                            <div className='filter-image'>
                                                <img src={e.image} alt="" />
                                            </div>
                                            <p>Agent : {e.owner}</p>
                                        </div>
                                        <div className='filter-card2'>
                                            <p className='filter-card2-head'>{e.innername}</p>
                                            <p>{e.sideheading}</p>
                                            <div className='filter-card2-content'>
                                                {e.isdetail ? <div className='filter-card2-contentdetail'>
                                                    <div className='filter-card2-detail'>
                                                        {e.furnishing ? <div className='filter-card2-area'>
                                                            <i><LiaBedSolid /></i>
                                                            <div className='filter-card2-area-detail'>
                                                                <p>FURNISHING</p>
                                                                <p>{e.furnishing}</p>
                                                            </div>
                                                        </div> : ""}
                                                        {e.tenant ? <div className='filter-card2-area'>
                                                            <i><GiDuality /></i>
                                                            <div className='filter-card2-area-detail'>
                                                                <p>TENANT PREFERRED</p>
                                                                <p>{e.tenant}</p>
                                                            </div>
                                                        </div> : ""}
                                                        {e.carpet ? <div className='filter-card2-area'>
                                                            <i><GiBandageRoll /></i>
                                                            <div className='filter-card2-area-detail'>
                                                                <p>CARPET</p>
                                                                <p>{e.carpet}</p>
                                                            </div>
                                                        </div> : ""}
                                                        {e.carparking ? <div className='filter-card2-area'>
                                                            <i><RiCarWashingLine /></i>
                                                            <div className='filter-card2-area-detail'>
                                                                <p>CAR PARKING</p>
                                                                <p>{e.carparking}</p>
                                                            </div>
                                                        </div> : ""}
                                                        {e.facing ? <div className='filter-card2-area'>
                                                            <i><LiaArrowAltCircleRightSolid /></i>
                                                            <div className='filter-card2-area-detail'>
                                                                <p>FACING</p>
                                                                <p>{e.facing}</p>
                                                            </div>
                                                        </div> : ""}
                                                        {e.floor ? <div className='filter-card2-area'>
                                                            <i><GrSteps /></i>
                                                            <div className='filter-card2-area-detail'>
                                                                <p>FLOOR</p>
                                                                <p>{e.floor}</p>
                                                            </div>
                                                        </div> : ""}
                                                    </div>
                                                    <div className='filter-card2-icon'>
                                                        <i onClick={() => detail(e.id)}><IoIosArrowUp /></i>
                                                    </div>
                                                </div> : <div className='filter-card2-contentdetail'>
                                                    <div className='filter-card2-detail'>
                                                        {e.furnishing ? <div className='filter-card2-area'>
                                                            <i><LiaBedSolid /></i>
                                                            <div className='filter-card2-area-detail'>
                                                                <p>FURNISHING</p>
                                                                <p>{e.furnishing}</p>
                                                            </div>
                                                        </div> : ""}
                                                        {e.tenant ? <div className='filter-card2-area'>
                                                            <i><GiDuality /></i>
                                                            <div className='filter-card2-area-detail'>
                                                                <p>TENANT PREFERRED</p>
                                                                <p>{e.tenant}</p>
                                                            </div>
                                                        </div> : ""}
                                                        {e.carpet ? <div className='filter-card2-area'>
                                                            <i><GiBandageRoll /></i>
                                                            <div className='filter-card2-area-detail'>
                                                                <p>CARPET</p>
                                                                <p>{e.carpet}</p>
                                                            </div>
                                                        </div> : ""}

                                                    </div>
                                                    <div className="filter-card2-icon">
                                                        <i onClick={() => detail(e.id)}><IoIosArrowDown /></i>
                                                    </div>
                                                </div>}
                                            </div>
                                            <p className="filter-card2-direction">{e.direction}</p>
                                        </div>

                                    </div>
                                    <div className='filter-card3'>
                                        <h4>{e.amount}</h4>
                                        {e.security ? <p>{e.security}</p> : <p>{e.charges}</p>}
                                        <div className='filter-card3-btn'>
                                            <button onClick={() => change(e.id)}>View Detail</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        })
                    }
                    
                </div>
            </div>
            <div className='responsive-prop-section'>
                <div className='responsive-prop-head'>
                    <div className='responsive-prop-inner-head'>
                        <p>{len} results |  Properties for Rent in Chennai</p>
                        <div className="responsive-prop-line">

                        </div>
                    </div>
                </div>
                <div className='responsive-prop-container'>
                    {
                        temp?.map((e, i) => {
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
                        <p onClick={() => change(e.id)}>View Detail</p>
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

export default Filter