import React, { useState } from "react";
import Product_details from "./Product_Details";
import Contact from "./Contact";
import Recent from "./Recent";
import img54 from './img/img54.png'
import Customer_review from "./Customer_review";
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


var fruit_items;

function flitered_fruit(){
    fruit_items=Product_details.filter((item)=>{
        return(
            item.catagery==="Fruit"
        )   
    })
     console.log(fruit_items)
}   
    flitered_fruit();
 function handleOnclick(add){
            var addCart=fruit_items.find((item)=>{
                return(
                    item.name==add.name
                )
            })
            console.log(addCart)
            var cre_table=JSON.parse(localStorage.getItem("addToList")) || []
            cre_table.push(addCart)
            localStorage.setItem("addToList",JSON.stringify(cre_table))
        }


function Fruits(){

    return(
        <div className="">
            <div className="nav_bar">
                 <Nav_bar/>
             </div>
             <div className="product_show">
                {
                    fruit_items.map((item)=>{
                        return(
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
                }

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
    )
}
export default Fruits