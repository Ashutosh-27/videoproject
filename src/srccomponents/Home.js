import React from 'react'
import { Link } from 'react-router-dom';
import VideoMain from './VideoMain'
import HomeCarousel from './HomeCarousel'
import '../css/HomeHeader.css'
import '../css/Footer.css'
import '../css/Main.css'
import HomeVideo from '../images/VegetavsBroly.mp4'
import Founder1 from '../images/founder1.jpg'
import Founder2 from '../images/founder2.jpg'
import Founder3 from '../images/founder3.jpg'
import AngelBooking from '../images/angelbooking.jpg'
import Zerodha from '../images/zerodha.jpg'


function Home() {



    return (
        <div style={{ width: '100vw', height: 'auto' }}>
            <header style={{ position: 'relative' }}>
                <div>
                    <video className='Header_video_holder' loop muted autoPlay>
                        <source src={HomeVideo} type='video/mp4' />
                    </video>
                </div>
                <div className='header_body'>
                    <div className='nav_container'>
                        <div className='header_logo'>LOGO</div>
                        <button className='header_btn'><Link className="link" style={{color:'white'}} to='/form'>Start Your Free Trial</Link></button>
                    </div>
                    <div className='header_content'>
                        <ul className='header_social'>
                            <li> <i class='bx bxl-twitter'></i></li>
                            <li><i class='bx bxl-linkedin'></i></li>
                            <li> <i class='bx bxl-youtube'></i></li>
                        </ul>
                        <div className='header_title'>
                            <h3>WE RAISE BY LIFTING YOU UP</h3>
                        </div>
                    </div>
                </div>
                <div class="custom-shape-divider-bottom-1639797914">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                    </svg>
                </div>

            </header>

            <main>
                <section className="video_points">
                    <div className='video_container'>
                        <div className='Info'>
                            <h3>EXPERIENCED WE ARE!</h3>
                            <p> We are experienced ,last 15 years last 15 years we led to best stock marketing training,If you need any training services we are eagerly waiting for you.</p>
                        </div>


                        <div className='Video'>
                            <VideoMain />
                        </div>

                    </div>
                    <div className='points_container'>
                        <ul>
                            <li>
                                <div className='circle' />
                                <div className='points_body'>
                                    <h6>Unique Point 1</h6>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur culpa</p>
                                </div>
                            </li>

                            <li>
                                <div className='circle' />
                                <div className='points_body'>
                                    <h6>Unique Point 2</h6>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur culpa .</p>
                                </div>
                            </li>

                            <li>
                                <div className='circle' />
                                <div className='points_body'>
                                    <h6>Unique Point 3</h6>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur culpa </p>
                                </div>
                            </li>


                            <li>
                                <div className='circle' />
                                <div className='points_body'>
                                    <h6>Unique Point 4</h6>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur culpa .</p>
                                </div>
                            </li>


                            <li>
                                <div className='circle' />
                                <div className='points_body'>
                                    <h6>Unique Point 5</h6>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur culpa </p>
                                </div>
                            </li>

                        </ul>
                    </div>
                </section>


                <section className='carousel_parent'>
                    <div className='carousel_body'>
                        <div className='carousel_title'>
                            <h2>Our Free Sessions</h2>
                        </div>
                        <div className='carousel_container'>
                            <HomeCarousel />
                        </div>
                    </div>
                </section>


                <section className='courses'>
                    <div className='courses_Info'>
                        <h4>Our Courses</h4>
                        <span>Access hundreds of stock market sessions in the form of short<br />videos around the world</span>
                        <button >Start Your 1-day Free trial</button>
                    </div>
                    <div className='courses_cards'>
                        <div className='card'>
                            <div className='card_info'>
                                <h4>Beginners Courses</h4>
                                <span>For :Equity Traders</span>
                            </div>
                            <div className='card_container'>
                                <ul>
                                    <li>Session 1: Lorem ipsum dolor sit amet</li>
                                    <li>Session 2: Lorem ipsum dolor sit amet</li>
                                    <li>Session 3: Lorem ipsum dolor sit amet</li>
                                    <li>Session 4: Lorem ipsum dolor sit amet</li>
                                    <li>Session 5: Lorem ipsum dolor sit amet</li>
                                    <li>Session 6: Lorem ipsum dolor sit amet</li>
                                    <li>Supply and Demand Zone </li>
                                    <li>Volume in Market/Trading</li>
                                    <li>Session 7: Lorem ipsum dolor sit amet</li>
                                    <li>Session 8: Lorem ipsum dolor sit</li>
                                    <li>Countinous Chart Patterns</li>
                                    <li>& Many More</li>
                                </ul>

                                <button >Free of Cost</button>
                            </div>
                        </div>


                        <div className='card'>
                            <div className='card_info'>
                                <h4>Pro Trade Batch</h4>
                                <span>For :Option Traders</span>
                            </div>
                            <div className='card_container'>
                                <ul>
                                    <li>Basic of options</li>
                                    <li>Option Geeks</li>
                                    <li>Analysis of Option Chain</li>
                                    <li>Impact on global Market</li>
                                    <li>Selection of Strike Price</li>
                                    <li>Bull call</li>
                                    <li>Basic of Option Trading</li>
                                    <li>Option Geeks</li>
                                    <li>Analysis of option chain</li>
                                    <li>Impact of Global Market</li>
                                    <li>Selection of strike Price</li>
                                    <li>Bull call</li>
                                    <li>& many more</li>
                                </ul>

                                <button >99999/- Enroll Now</button>
                            </div>
                        </div>
                    </div>
                </section>


                <section className='community'>
                    <div className='community_body'>
                        <div className='community_Info'>
                            <div>
                                <h4>Join Our Telegram Community</h4>
                                <span>lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur culpa</span>
                            </div>

                            <span className='join_now'>
                                <h5>Join Nown</h5>
                                <i class='bx bx-down-arrow-circle'></i>
                            </span>
                        </div>
                    </div>
                </section>


                <section className='founders'>
                    <h3>Founders</h3>
                    <div className='founders_card_container'>
                        <div className='founders_card_item' >
                            <img src={Founder1} alt='Fonder'></img>
                            <span className='card_info'>
                                <span className='founder_name'>Peter Parker</span>
                                <span className='founder_social'>
                                    <i class='bx bxl-twitter'></i>
                                    <i class='bx bxl-linkedin' ></i>
                                    <i class='bx bxl-stack-overflow'></i>
                                </span>
                            </span>
                        </div>


                        <div className='founders_card_item' >
                            <img src={Founder2} alt='Founder'></img>
                            <span className='card_info'>
                                <span className='founder_name'>Peter Parker</span>
                                <span className='founder_social'>
                                    <i class='bx bxl-twitter'></i>
                                    <i class='bx bxl-linkedin' ></i>
                                    <i class='bx bxl-stack-overflow'></i>
                                </span>
                            </span>
                        </div>

                        <div className='founders_card_item' >
                            <img src={Founder3} alt='Founder'></img>
                            <span className='card_info'>
                                <span className='founder_name'>Peter Parker</span>
                                <span className='founder_social'>
                                    <i class='bx bxl-twitter'></i>
                                    <i class='bx bxl-linkedin' ></i>
                                    <i class='bx bxl-stack-overflow'></i>
                                </span>
                            </span>
                        </div>
                    </div>
                </section>

                <section className='explore'>
                    <h3>Explore Global Market</h3>
                    <div className='explore_cards_container'>
                        <div className='explore_card'>
                            <h4>Commodity</h4>
                            <ul>
                                <li>What is Commodity training ?</li>
                                <li>History Commodity training ?</li>
                                <li>Types Commodity training ?</li>
                                <li>Future Commodity training ?</li>
                                <li>Fundamental Commodity training ?</li>
                                <li>Effect of Global cues</li>
                            </ul>
                        </div>

                        <div className='explore_card'>
                            <h4>Forex Trading</h4>
                            <ul>
                                <li>What is Commodity training ?</li>
                                <li>History Commodity training ?</li>
                                <li>Types Commodity training ?</li>
                                <li>Future Commodity training ?</li>
                                <li>Fundamental Commodity training ?</li>
                                <li>Effect of Global cues</li>
                            </ul>
                        </div>


                        <div className='explore_card'>
                            <h4>Index Trading</h4>
                            <ul>
                                <li>What is Commodity training ?</li>
                                <li>History Commodity training ?</li>
                                <li>Types Commodity training ?</li>
                                <li>Future Commodity training ?</li>
                                <li>Fundamental Commodity training ?</li>
                                <li>Effect of Global cues</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className='demat'>
                    <h3>Open Your Demat</h3>
                    <div className='demat_card_container'>
                        <div className='demat_card'>
                            <span className='demat_card_title'><img src={AngelBooking} alt='Angel'/>Angel Booking</span>
                            <span className='demat_card_info'>Angel Booking is low brokerage stock broker in India</span>
                            <span className='demat_card_btn'><button>Open Account Now</button></span>
                        </div>

                        <div className='demat_card'>
                            <span className='demat_card_title'>
                            <img src={Zerodha} alt='Zerodha'/>Zerodha</span>
                            <span className='demat_card_info'>With highclass technology , unique trading tools , three way trading platform</span>
                            <span className='demat_card_btn'><button>Open Account Now</button></span>
                        </div>
                    </div>
                </section>
            </main>

            <footer>
                <div className='footer_body'>
                    <div className='footer-Item_container'>
                        <span className='footer-Item_title'>Contact Us</span>
                        <ul className='footer-Item_components'>
                            <li>Address</li>
                            <li>abc@gmail.com</li>
                            <li>+19 334-577-8907</li>
                            <li>
                                <ul className='footer-Item_sub-components'>
                                    <li><i class='bx bxl-facebook-circle'></i></li>
                                    <li><i class='bx bxl-twitter' ></i></li>
                                    <li><i class='bx bxl-gmail' ></i></li>
                                    <li><i class='bx bxl-pinterest' ></i></li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div className='footer-Item_container'>
                        <span className='footer-Item_title'>Usefull Links</span>
                        <ul className='footer-Item_components'>
                            <li>Address</li>
                            <li>abc@gmail.com</li>
                            <li>+19 334-577-8907</li>
                            <li>Careers</li>
                        </ul>
                    </div>


                    <div className='footer-Item_container'>
                        <span className='footer-Item_title'>Open Hours</span>
                        <ul className='footer-Item_components'>
                            <li>Monday&nbsp;&nbsp;<i class='bx bx-chevron-right'></i>&nbsp;&nbsp;11am - 11pm</li>
                            <li>Tuesday&nbsp;&nbsp;<i class='bx bx-chevron-right'></i>&nbsp;&nbsp;11am - 11pm</li>
                            <li>Wednesday&nbsp;&nbsp;<i class='bx bx-chevron-right'></i>&nbsp;&nbsp;11am - 11pm</li>
                            <li>Thursday&nbsp;&nbsp;<i class='bx bx-chevron-right'></i>&nbsp;&nbsp;11am - 11pm</li>
                            <li>Friday&nbsp;&nbsp;<i class='bx bx-chevron-right'></i>&nbsp;&nbsp;11am - 11pm</li>
                            <li>Saturday&nbsp;&nbsp;<i class='bx bx-chevron-right'></i>&nbsp;&nbsp;11am - 11pm</li>
                            <li>Sunday&nbsp;&nbsp;<i class='bx bx-chevron-right'></i>&nbsp;&nbsp;closed</li>
                        </ul>
                    </div>

                    <div className='footer-Item_container'>
                        <span className='footer-Item_title'>Our Location</span>
                        <div className='footer-Item_map'></div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Home
