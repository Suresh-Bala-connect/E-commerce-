import React, { use, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import './Home.css';
import './Customer_review';
// import'./Contact';
import Contact from "./Contact";
import Recent from "./Recent";
import Product_Details from "./Product_Details";
import Customer_review from "./Customer_review";
import Vegtable from"./Vegtable";
import Meat from"./Meat";
import Fruits from"./Fruits";
import Nav_bar from "./Nav_bar";
import { MdContentPasteSearch } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { FaHeartCircleCheck, FaStar } from "react-icons/fa6";
import { LiaOpencart } from "react-icons/lia";
import { HiOutlineHandThumbUp } from "react-icons/hi2";
import { GiFoodTruck } from "react-icons/gi";
import { GiMailbox } from "react-icons/gi";
import { GiReturnArrow } from "react-icons/gi";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import img1 from './img/img_01.jpg'
import img14 from './img/img14.jpg'
import img51 from './img/img51.jpg'
import img52 from './img/img52.jpg'
import img54 from './img/img54.png'
import img55 from './img/img55.jpg'

import Product_details from "./Product_Details";
import { BsRouter } from "react-icons/bs";
import { CiRoute } from "react-icons/ci";

function Home() {

    const navigate = useNavigate();


    return (
        
        <div>
         
            <div className="main_container">
                <div className="nav_bar">
                    <Nav_bar/>
                </div>
                <div className="">
                    <div className="banner">
                        <div className="banner_content">
                            <p className="fresh"> Fresh Foods </p><br />
                            <h2>
                                Orgarnic food &<br />health taste
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="product_cart">
                    <div className="product_items">
                        <div className="food_item">
                            <img src={img51}></img><br />
                            {/* <button>Fresh Fruits</button> */}
                            <button onClick={() => navigate("/Fruits")}>Fresh Fruit</button>
                        </div>
                        <div className="food_item">
                            <img src={img52}></img><br />
                            {/* <button>Fresh Meat</button> */}
                            <button onClick={() => navigate("/Meat")}>Fresh Meat</button>
                        </div>
                        <div className="food_item">
                            <img src={img14}></img><br />
                            {/* <button>Fresh Vegtable</button> */}
                            <button onClick={() => navigate("/Vegtable")}>Fresh Vegtable</button>
                        </div>
                    </div>
                </div>
                <div className="home_service">
                    <h2>Exquisite service</h2>
                    <div className="qua">
                        <div className="qua_img">
                            <HiOutlineHandThumbUp />
                            <p>Quality support
                                Alway online 24/7</p>
                            <GiFoodTruck />
                            <p>Free Delivary
                                Order from all item</p>
                        </div>
                        <div className="ser_img">
                            <img src={img54} />
                        </div>
                        <div className="qua_img">
                            <GiMailbox />
                            <p>Jion newslleter
                                20% off by subscribing</p>
                            <GiReturnArrow />
                            <p>Return & refund
                                Money back guarantee</p>
                        </div>
                    </div>
                </div>
                <div className="shop">
                    <div className="shop_banner">
                        <div className="shop_content">
                            <button>Shop Now</button>
                        </div>
                    </div>
                </div>
                <div className="">
                    <Recent />
                </div>
                <div className="">
                    <Customer_review />
                </div>
                <div className="">
                    <Contact />
                </div>
            </div>

        </div>

    )
}
export default Home;