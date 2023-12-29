import React from 'react'
import { useSelector } from 'react-redux'
import { FaArrowRight } from "react-icons/fa6";
import './chennai.scss'

const Chennai=()=>{
    const state=useSelector((samp)=>samp)
    console.log(state.value.property);
    return(
        <div className='chennai-section'>
           <div className='chennai-container'>
           <div className='chennai-head'>
                    <div className='chennai-head-content'>
                        <p className='chennai-head-para'>Because you searched Chennai</p>
                    </div>
                    <div className='chennai-line'>

                    </div>
                </div>
                <div className='chennai-row'>
                    {
                        state.value.property.map((e,i)=>{
                            return(
                                <div className='chennai-col' key={i}>
                                    <div className='chennai-card'>
                                        <p className="chennai-para"><span>{e.count}</span> {e.para}</p>
                                        <p>{e.search}<i className="chennai-icon"> <FaArrowRight /></i></p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
           </div>
          
        </div>
    )
}

export default Chennai