import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Detail from './home/property/detail.js'
// import Footer from './home/footer/footer.js'
import Allprop from './home/property/allprop.js'
import Storefile from './storefile.js'
// import Navbar from './home/navabar/navbar.js'
import Filter from './home/filter/filter.js'
import Resfilter from './home/resfilter/resfilter.js'
const Routing=()=>{
    return(
        <BrowserRouter>
            {/* <Navbar/> */}
            <Routes>
                <Route path="/" element={<Storefile/>}></Route>
                <Route path="/allprop" element={<Allprop/>}></Route>
                <Route path="/detail" element={<Detail/>}></Route>
                <Route path="/filter" element={<Filter/>}></Route>
                <Route path="/resfilter" element={<Resfilter/>}></Route>
            </Routes>
            {/* <Footer/> */}
        </BrowserRouter>
    )
}


export default Routing