import React, { useState } from 'react'
import './footer.scss'
// import img1 from "../images/image1.png"
// import img2 from "../images/image2.png"

const Footer = () => {

    const [readmore1, setreadmore1] = useState(true)
    const [readmore2, setreadmore2] = useState(true)

    const change1 = () => {
        setreadmore1(false)
    }
    const change2 = () => {
        setreadmore2(!readmore2)
    }
    return (
        <footer>
            <div className='footer-container'>
                <div className='footer-row'>
                    <div className='footer-col1'>
                        <div className='footer-col1-card1'>
                            <h4>Buy Our Services</h4>
                            {readmore2 ? <p className='footer-card1-readpara'>Magicbricks is a full stack service provider for all real estate needs...<span onClick={change2}>Read More</span></p> :
                                <p className='footer-card1-readpara'>Magicbricks is a full stack service provider for all real estate needs, with 15+ services including home loans, pay rent, packers and movers, legal assistance, property valuation, and expert advice. As the largest platform for buyers and sellers of property to connect in a transparent manner, Magicbricks has an active base of over 15 lakh property listings...<span onClick={change2}>Read Less</span></p>
                            }
                            <h4>More from our Network</h4>
                            <div className='footer-col1-content'>
                                <div className='footer-col1-content-para'>
                                    <p>Times of India</p>
                                </div>
                                <div className='footer-col1-content-para'>
                                    <p>Economic Times</p>
                                </div>
                                <div className='footer-col1-content-para'>
                                    <p>Navbharat times</p>
                                </div>
                                <div className='footer-col1-content-para'>
                                    <p>India Times</p>
                                </div>
                                <div className='footer-col1-content-para'>
                                    <p>Filmfare</p>
                                </div>
                                <div className='footer-col1-content-para'>
                                    <p>MensXp</p>
                                </div>
                                <div className='footer-col1-content-para'>
                                    <p>iDiva</p>
                                </div>
                                <div className='footer-col1-content-para'>
                                    <p>TimesJobs</p>
                                </div>
                                <div className='footer-col1-content-para'>
                                    <p>Gadgets Now</p>
                                </div>
                            </div>
                            <div className='footer-col1-links'>
                                {/* <div className='footer-col1-image'>
                                    <img src={img1} alt=""></img>
                                </div>
                                <div className='footer-col1-image'>
                                <img src={img2} alt=""></img>
                                </div> */}
                            </div>
                        </div>
                        <div className='footer-col1-card2'>
                            <h4>Properties in India</h4>
                            <div className='footer-col2-content'>
                                <div className='footer-col2-content-para'>
                                    <p>Property in New Delhi |</p>
                                </div>
                                <div className='footer-col2-content-para'>
                                    <p>Property in New Mumbai |</p>
                                </div>
                                <div className='footer-col2-content-para'>
                                    <p> Property in Chennai |</p>
                                </div>
                                <div className='footer-col2-content-para'>
                                    <p> Property in Pune |</p>
                                </div>
                                <div className='footer-col2-content-para'>
                                    <p>Property in New Noida |</p>
                                </div>
                                <div className='footer-col2-content-para'>
                                    <p> Property in Gurgaon |</p>
                                </div>
                                <div className='footer-col2-content-para'>
                                    <p> Property in Bangalore |</p>
                                </div>
                                <div className='footer-col2-content-para'>
                                    <p>Property in Ahmedabad |</p>
                                </div>
                            </div>
                            <h4>New Projects in India</h4>
                            <div className='footer-col2-content2'>
                                <div className='footer-col2-content2-para'>
                                    <p>New Projects in New Delhi</p>
                                </div>
                                <div className='footer-col2-content2-para'>
                                    <p>New Projects in Mumbai</p>
                                </div>
                                <div className='footer-col2-content2-para'>
                                    <p>New Projects in Chennai</p>
                                </div>
                                <div className='footer-col2-content2-para'>
                                    <p>New Projects in Pune</p>
                                </div>
                                <div className='footer-col2-content2-para'>
                                    <p> New Projects in Noida</p>
                                </div>
                                <div className='footer-col2-content2-para'>
                                    <p>New Projects in Gurgaon</p>
                                </div>
                                <div className='footer-col2-content2-para'>
                                    <p>New Projects in Bangalore</p>
                                </div>
                                <div className='footer-col2-content2-para'>
                                    <p> New Projects in Ahmedabad</p>
                                </div>

                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
            <div className='footer-col2'>
                        <div className='footer-col2-head'>
                            <p>Sitemap</p>
                            <p>Terms & Conditions</p>
                            <p>Privacy Policy</p>
                            <p>Blog</p>
                            <p>Careers</p>
                            <p>Testimonials</p>
                            <p>Feedback</p>
                            <p>Unsubscribe</p>
                            <p>Help Center</p>
                            <p>Sales Enquiry</p>
                            <p>Buy Our Services</p>
                        </div>
                        
                    </div>
                    <div className='footer-col3'>
                            {readmore1 ? <p>Disclaimer: Magicbricks Realty Services Limited is only an intermediary offering its platform to advertise properties of Seller for a Customer/Buyer/User coming on its Website and is not and cannot be a party to or privy to or control in any manner any transactions between the Seller and the Customer/Buyer/User. All the offers and discounts on this Website have been extended by various <span onClick={change1}>Read more</span></p> :
                                <p>Disclaimer: Magicbricks Realty Services Limited is only an intermediary offering its platform to advertise properties of Seller for a Customer/Buyer/User coming on its Website and is not and cannot be a party to or privy to or control in any manner any transactions between the Seller and the Customer/Buyer/User. All the offers and discounts on this Website have been extended by various Builder(s)/Developer(s) who have advertised their products. Magicbricks is only communicating the offers and not selling or rendering any of those products or services. It neither warrants nor is it making any representations with respect to offer(s) made on the site. Magicbricks Realty Services Limited shall neither be responsible nor liable to mediate or resolve any disputes or disagreements between the Customer/Buyer/User and the Seller and both Seller and Customer/Buyer/User shall settle all such disputes without involving Magicbricks Realty Services Limited in any manner.</p>
                            }
                        </div>
                    <div className='footer-col4'>
                        <p>All trademarks, logos and names are properties of their respective owners. All Rights Reserved. © Copyright 2023 Magicbricks Realty Services Limited.</p>
                    </div>
        </footer>
    )
}

export default Footer