import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ItemImg1 from '../images/carousel3.jpg'
import ItemImg2 from '../images/carousel1.jpg'

function HomeCarousel() {
    return (
        <div>
            <OwlCarousel className='owl-theme'
            loop   
            nav
            navSpeed={500}
            margin={40}  
            mouseDrag 
            touchDrag   
            autoWidth 
            autoplay
            autoplayTimeout={4000}
            autoplayHoverPause
            autoplaySpeed={1000}  
            center
            >
                <div className='carousel_item'>
                    <div className='carousel_item_img'>
                        <img src={ItemImg1}></img>
                    </div>
                    <div className='carousel_item_Info'>
                        <sapn className='item_Info_title'>Introduction to stock Market</sapn>
                        <ul className='item_Info_list'>
                            <li>
                            <i class='bx bx-time-five'></i>
                                <span>15min Short video</span>
                            </li>
                            <li>
                            <i class='bx bx-user' ></i>
                                <span>Teacher Name</span>
                            </li>
                            <li>
                            <i class='bx bx-trending-up' ></i>
                                <span>Beginner</span>
                            </li>
                        </ul>
                        <sapn className='item_Info_footer '>Short Intoduction of video</sapn>
                    </div>
                </div>

                <div className='carousel_item'>
                    <div className='carousel_item_img'>
                        <img src={ItemImg1} alt='carouselImg'></img>
                    </div>
                    <div className='carousel_item_Info'>
                        <sapn className='item_Info_title'>Introduction to stock Market</sapn>
                        <ul className='item_Info_list'>
                            <li>
                            <i class='bx bx-time-five'></i>
                                <span>15min Short video</span>
                            </li>
                            <li>
                            <i class='bx bx-user' ></i>
                                <span>Teacher Name</span>
                            </li>
                            <li>
                            <i class='bx bx-trending-up' ></i>
                                <span>Beginner</span>
                            </li>
                        </ul>
                        <sapn className='item_Info_footer '>Short Intoduction of video</sapn>
                    </div>
                </div>

                <div className='carousel_item'>
                    <div className='carousel_item_img'>
                        <img src={ItemImg2} alt='carouselImg'></img>
                    </div>
                    <div className='carousel_item_Info'>
                        <sapn className='item_Info_title'>Introduction to stock Market</sapn>
                        <ul className='item_Info_list'>
                            <li>
                            <i class='bx bx-time-five'></i>
                                <span>15min Short video</span>
                            </li>
                            <li>
                            <i class='bx bx-user' ></i>
                                <span>Teacher Name</span>
                            </li>
                            <li>
                            <i class='bx bx-trending-up' ></i>
                                <span>Beginner</span>
                            </li>
                        </ul>
                        <sapn className='item_Info_footer '>Short Intoduction of video</sapn>
                    </div>
                </div>



               <div className='carousel_item'>
                    <div className='carousel_item_img'>
                        <img src={ItemImg1} alt='carouselImg'></img>
                    </div>
                    <div className='carousel_item_Info'>
                        <sapn className='item_Info_title'>Introduction to stock Market</sapn>
                        <ul className='item_Info_list'>
                            <li>
                            <i class='bx bx-time-five'></i>
                                <span>15min Short video</span>
                            </li>
                            <li>
                            <i class='bx bx-user' ></i>
                                <span>Teacher Name</span>
                            </li>
                            <li>
                            <i class='bx bx-trending-up' ></i>
                                <span>Beginner</span>
                            </li>
                        </ul>
                        <sapn className='item_Info_footer '>Short Intoduction of video</sapn>
                    </div>
                </div>


                <div className='carousel_item'>
                    <div className='carousel_item_img'>
                        <img src={ItemImg2} alt='carouselImg'></img>
                    </div>
                    <div className='carousel_item_Info'>
                        <sapn className='item_Info_title'>Introduction to stock Market</sapn>
                        <ul className='item_Info_list'>
                            <li>
                            <i class='bx bx-time-five'></i>
                                <span>15min Short video</span>
                            </li>
                            <li>
                            <i class='bx bx-user' ></i>
                                <span>Teacher Name</span>
                            </li>
                            <li>
                            <i class='bx bx-trending-up' ></i>
                                <span>Beginner</span>
                            </li>
                        </ul>
                        <sapn className='item_Info_footer '>Short Intoduction of video</sapn>
                    </div>
                </div>



               <div className='carousel_item'>
                    <div className='carousel_item_img'>
                        <img src={ItemImg1} alt='carouselImg'></img>
                    </div>
                    <div className='carousel_item_Info'>
                        <sapn className='item_Info_title'>Introduction to stock Market</sapn>
                        <ul className='item_Info_list'>
                            <li>
                            <i class='bx bx-time-five'></i>
                                <span>15min Short video</span>
                            </li>
                            <li>
                            <i class='bx bx-user' ></i>
                                <span>Teacher Name</span>
                            </li>
                            <li>
                            <i class='bx bx-trending-up' ></i>
                                <span>Beginner</span>
                            </li>
                        </ul>
                        <sapn className='item_Info_footer '>Short Intoduction of video</sapn>
                    </div>
                </div>


                <div className='carousel_item'>
                    <div className='carousel_item_img'>
                        <img src={ItemImg2} alt='carouselImg'></img>
                    </div>
                    <div className='carousel_item_Info'>
                        <sapn className='item_Info_title'>Introduction to stock Market</sapn>
                        <ul className='item_Info_list'>
                            <li>
                            <i class='bx bx-time-five'></i>
                                <span>15min Short video</span>
                            </li>
                            <li>
                            <i class='bx bx-user' ></i>
                                <span>Teacher Name</span>
                            </li>
                            <li>
                            <i class='bx bx-trending-up' ></i>
                                <span>Beginner</span>
                            </li>
                        </ul>
                        <sapn className='item_Info_footer '>Short Intoduction of video</sapn>
                    </div>
                </div>


                <div className='carousel_item'>
                    <div className='carousel_item_img'>
                        <img src={ItemImg1} alt='carouselImg'></img>
                    </div>
                    <div className='carousel_item_Info'>
                        <sapn className='item_Info_title'>Introduction to stock Market</sapn>
                        <ul className='item_Info_list'>
                            <li>
                            <i class='bx bx-time-five'></i>
                                <span>15min Short video</span>
                            </li>
                            <li>
                            <i class='bx bx-user' ></i>
                                <span>Teacher Name</span>
                            </li>
                            <li>
                            <i class='bx bx-trending-up' ></i>
                                <span>Beginner</span>
                            </li>
                        </ul>
                        <sapn className='item_Info_footer '>Short Intoduction of video</sapn>
                    </div>
                </div>


                
            </OwlCarousel>
        </div>
    )
}

export default HomeCarousel
