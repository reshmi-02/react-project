import React, { useState, useEffect } from 'react'
import { IoIosArrowDown, IoIosArrowUp, IoIosSearch } from "react-icons/io";
import { TbCoinRupeeFilled } from "react-icons/tb";
import { IoMdHome } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import './search.scss';
import { useDispatch, useSelector } from 'react-redux';
import { handleflatcolor, handlebhkcolor, handlemin, handlemax, handleminvalue, handlemaxvalue } from '../../slice.js';
import { useNavigate } from 'react-router-dom';



const Search = () => {

    const [name, setname] = useState("Property")
    const [price, setprice] = useState("Budget")
    const [flat, setflat] = useState(false)
    const [isprice, setisprice] = useState(false)
    const [maxprice, setmaxprice] = useState("max")
    const [minprice, setminprice] = useState("min")

    const flatchange = () => {
        setflat(!flat)
        setisprice(false)
    }
    const pricechange = () => {
        setflat(false)
        setisprice(!isprice)
    }
    const handlechange = (e) => {
        if (e.target.name === "name") {
            setname(e.target.value)
        }
        else if (e.target.name === "price") {
            setprice(e.target.value)
        }
        else if (e.target.name === "maxprice") {
            setmaxprice(e.target.value)
        }
        else if (e.target.name === "minprice") {
            setminprice(e.target.value)
        }

    }


    // flat
    const state = useSelector((samp) => samp)
    const [isflat, setisflat] = useState(true)
    const dispatch = useDispatch()
    const isflatchange = () => {
        setisflat(!isflat)
    }

    const flatcolorchange = (val) => {
        let x = state.value.villa.map((e) => {

            return e.id === val ? { ...e, flatboolean: !e.flatboolean } : e
            // return e.id === val ? e.flatboolean===false?{...e,flatboolean:e.flatboolean=true && setname(e.value)}:{...e,flatboolean:false && setname("Property")} : e
        })
        dispatch(handleflatcolor(x))

        let y = state.value.villa.find((e) => {
            return e.id === val ? e.flatboolean === false ? setname(e.value) : setname("property") : ""
        })
        // setname(y.value)
    }

    const bhkcolorchange = (id) => {
        let x = state.value.flat.map((e) => {
            return e.id === id ? { ...e, bhkboolean: !e.bhkboolean } : e
        })
        dispatch(handlebhkcolor(x))
    }



    // price
    const [min, setmin] = useState(true)
    const [max, setmax] = useState(false)
    // const [tempmax,settempmax]=useState()
    // const [tempmin,settempmin]=useState()
    const [minboo, setminboo] = useState(false)
    const [maxboo, setmaxboo] = useState(false)
    const maxchange = () => {
        setmin(false)
        setmax(true)

    }
    const minchange = () => {
        setmin(true)
        setmax(false)
        console.log(min);
        console.log(max);
    }

    const maxpricechange = (id) => {
        let x = state.value.max.map((e) => {
            return e.id === id ? { ...e, maxboolean: !e.maxboolean && setmaxboo(!maxboo) } : e
        })

        console.log(x);

        dispatch(handlemax(x))

        let z = state.value.max.find((e) => {
            return e.id === id
        })

        setmaxprice(z.amount)
        setprice(`upto ${z.val}`)
        setisprice(false)
    }

    const minpricechange = (val) => {
        let x = state.value.min.map((e) => {
            return e.id === val ? { ...e, minboolean: !e.minboolean && setminboo(!minboo) } : e
        })

        dispatch(handlemin(x))

        let y = state.value.min.find((e) => {
            return e.id === val
        })

        setminprice(y.amount)
        setprice(`Greater than ${y.val}`)
        setmin(false)
        setmax(true)
    }

    useEffect(() => {

        if (minboo === true && maxboo === true) {

            setprice(`${minprice} - ${maxprice}`)
            setminboo(false)
            setmaxboo(false)

        }

        dispatch(handleminvalue(minprice))
        dispatch(handlemaxvalue(maxprice))

    }, [minboo, maxboo,dispatch,minprice,maxprice])


    // filter
    const nav = useNavigate()
    const gotofilter = () => {
        nav("/filter")
    }


    // responsive filter
    const res=useNavigate()
    const gotoresfilter=()=>{
        res("/resfilter")
    }
    return (
        <div>
            <div className="search-section">
                <div className='search-container'>
                    <div className='search-row'>
                        <p className='search-head'>Welcome back, Let’s continue your search</p>
                        <div className='search-content'>
                            <p className='search-content-buy'>Buy</p>
                            <p>Rent</p>
                            <p>PG</p>
                            <p>Plot</p>
                            <p>Commercial</p>
                            <p>Post Free Property Ad</p>
                        </div>
                        <div className='search-search'>
                            <div className='inner-search'>
                                <div className='search-location'>
                                    <IoLocationSharp className='search-location-icon' />
                                    <p className='search-chennai'>Chennai</p>
                                    <p className='search-more'>Add more...</p>
                                </div>
                                <div className="search-flat" >
                                    <div className='search-flat-content' >
                                        <IoMdHome className='search-flat-content-icon' />
                                        {/* <p>House/Villa</p> */}
                                        <input disabled value={name} name="name" type="text" onChange={handlechange} />
                                    </div>
                                    <div className='search-flat-icon'>
                                        <IoIosArrowDown onClick={flatchange} className='search-flat-inner-icon' />
                                    </div>
                                </div>
                                <div className='search-price'>
                                    <div className='search-price-content'>
                                        <TbCoinRupeeFilled className='search-price-content-icon' />
                                        {/* <p>Budget</p> */}
                                        <input disabled value={price} name="price" onChange={handlechange} />
                                    </div>
                                    <div className='search-price-icon'>
                                        <IoIosArrowDown onClick={pricechange} className='search-price-inner-icon' />
                                    </div>
                                </div>
                                <div className='search-searchname'>
                                    <button onClick={gotofilter}><IoIosSearch /> Search</button>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* flat */}
                    {flat ? <div className='flat-section'>
                        <div className='flat-container'>
                            {isflat ? <div className='flat-residential'>
                                <p onClick={isflatchange}>Residential <IoIosArrowUp /></p>
                                <div className='flat-residential-content'>
                                    {state.value.villa.map((e, i) => {
                                        return e.flatboolean ? <div key={i} className="flat-villa">
                                            <p style={{ backgroundColor: "#e8cece", color: "black" }} onClick={() => flatcolorchange(e.id)} >{e.value}</p>


                                        </div> :
                                            <div key={i} className="flat-villa">
                                                <p onClick={() => flatcolorchange(e.id)} >{e.value}</p>
                                            </div>
                                    })}
                                </div>


                                <div className="flat-residential-bhk">
                                    {state.value.flat.map((e, i) => {
                                        return e.bhkboolean ? <div key={i} className='flat-bhk'>

                                            <p style={{ backgroundColor: "#e8cece", color: "black" }} onClick={() => bhkcolorchange(e.id)}>{e.value} BHK</p>
                                        </div> : <div key={i} className='flat-bhk'>

                                            <p onClick={() => bhkcolorchange(e.id)} >{e.value} BHK</p>
                                        </div>
                                    })}
                                </div>




                            </div> : <div className='flat-residential'>
                                <p onClick={isflatchange}>Residential <IoIosArrowDown /></p>
                            </div>}
                            <div className='flat-commercial'>
                                <p>Commercial <IoIosArrowDown /></p>
                            </div>
                            <div className='flat-other-property'>
                                <p>Other Property Types <IoIosArrowDown /></p>
                            </div>
                        </div>
                    </div> : ""}



                    {/* price */}
                    {isprice ? <div className='price-section'>
                        <div className='price-container'>
                            <div className="min-max-price">
                                <div className='min-price'>
                                    {/* <p  >min</p> */}
                                    <input for="min-select" onClick={minchange} value={minprice} name="minprice" onChange={handlechange} />
                                    {min ? <div>
                                        {
                                            state.value.min.map((e, i) => {
                                                return (
                                                    // <option value={e.val} key={i}></option>
                                                    <div key={i}>

                                                        <p onClick={() => minpricechange(e.id)} >{e.val}</p>
                                                    </div>

                                                )
                                            })
                                        }
                                    </div> : ""}
                                </div>
                                <div className='max-price'>

                                    <input onClick={maxchange} value={maxprice} name="maxprice" onChange={handlechange} />
                                    {max ? <div>
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
                    </div> : ""}
                </div>
            </div>
            {/* responsive */}
            <div className='responsive-search-section'>
                <div className='responsive-search-container'>
                    <p className='responsive-search-head'>Welcome back!<br></br> Let’s continue your search</p>
                    <div className='responsive-search-content'>
                        <p className='responsive-search-content-buy'>Buy</p>
                        <p>Rent</p>
                        <p>PG</p>
                        <p>Commercial</p>
                        <p>Post Ad</p>
                    </div>
                    <div className='responsive-search-search'>
                        <div className='responsive-inner-search'>
                            <div className='responsive-inner-search-content'>
                                <IoLocationSharp className='responsive-search-location-icon' />
                                <p onClick={gotoresfilter}>Search By City, Locality, Project</p>
                            </div>
                            <div className='responsive-inner-search-search'>
                                 <IoIosSearch onClick={gotoresfilter} className='responsive-search-icon'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search