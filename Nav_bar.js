import React from "react";
import { useState } from "react";

import {Link,BrowserRouter , Routes,Route } from "react-router-dom";
import './Home.css';
import Product_Details from "./Product_Details";
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




function Nav_bar(){
     const [getInput, setInput] = useState();  // Search items
     const [getCart, setCart] = useState([])
    
        //  console.log(getInput)
        var search = "";
        var filtered_product = [];
    
        function handleSearchbar(e) {
            search = e.target.value
            setInput(search)
            console.log(search)
    
            if (search.length != 0) {
                filtered_product = Product_Details.filter((item) => {
                    return (
                        item.name.toLowerCase().includes(search.toLowerCase())
                    )
                })
    
                setCart(filtered_product)
            }
            else {
                setCart([])
            }
            console.log(filtered_product);
        }

        function handleOnclick(add){
            var addCart=Product_Details.find((item)=>{
                return(
                    item.name==add.name
                )
            })
            console.log(addCart)
            var cre_table=JSON.parse(localStorage.getItem("addToList")) || []
            cre_table.push(addCart)
            localStorage.setItem("addToList",JSON.stringify(cre_table))
        }
        
    return(
        <div>
            <div className="nav_bar">
                    <div className="logo">
                        <h2>Orgarnic Foods</h2>
                    </div>
                    <div className="menus">
                       <div className="home"><Link to="/">Home</Link></div>
                       <div className="home"><Link to="/Fruits">Fruits</Link></div>
                        <div className="home"><Link to="/Vegtable">Vegtable</Link></div>
                        <div className="home"><Link to="/Meat">Meat</Link></div>
                        <div className="home"><Link to="/Customer_review">About Us</Link></div>
                        <div className="home"><Link to="/Contact">Contact</Link></div>
                    </div>
                    <div className="icons">
                        <div className="search_bar">
                            <input type="text" placeholder="What U Want"
                                value={getInput} onChange={handleSearchbar}>
                            </input>
                            <MdContentPasteSearch />
                        </div>
                        <IoMdContact />
                        <FaHeartCircleCheck />
                        <LiaOpencart />

                    </div>
                </div>
            <div className="product_show">
                {
                    getCart.length > 0 ? (
                        getCart.map((item) => {
                            return (
                                <div className="cart_details">
                                    <div className="cart_img_name">
                                        <div className="cart_img">
                                            <img src={item.img}></img>
                                        </div>
                                        <div className="cart_name">
                                            <p>{item.name}</p>
                                        </div>
                                        <div className="price">
                                            <span className="new-price">
                                                <FaIndianRupeeSign /> {item.price}
                                            </span>
                                            <span className="old-price">
                                                <FaIndianRupeeSign /> {item.old_price}
                                            </span>
                                        </div>
                                        <div className="stars">
                                            {Array(5).fill().map((_, i) => (
                                                i < item.star
                                                ? <FaStar key={i} />     
                                                : <FaRegStar key={i} /> 
                                                ))}
                                        </div>
                                        <div className="button">
                                            <div className="addtocard">
                                                <button onClick={()=>handleOnclick(item)}>Add To Card</button>
                                            </div>
                                            <div className="buynow">
                                                <button>Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                            )
                                        })
                                    ) : (
                                        <p></p>
                                    )
                                }
            </div>
        </div>
    )
}
export default Nav_bar