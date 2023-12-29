import React from 'react'
import Chennai from './home/chennai/chennai.js'
import Property from './home/property/property.js'
import Postprop from './home/postprop/postprop.js'
import Search from './home/search/search.js'
import Navbar from './home/navabar/navbar.js'
import Footer from './home/footer/footer.js'
const Storefile=()=>{
    return(
        <div>
            <Navbar/>
            <Search/>
            <Chennai />
            <Property />
            <Postprop />
            <Footer/>
        </div>
    )
}

export default Storefile