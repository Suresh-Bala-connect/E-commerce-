import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { LuIndianRupee } from "react-icons/lu";
import Nav_bar from "./Nav_bar";
import './AddToCart.css';

function AddToCart() {

    const [tableCart, setTableCart] = useState(JSON.parse(localStorage.getItem("addToList")) || []);
   
    var inc_number;
    function handleIncrr(product) {
        inc_number = tableCart.map((data) => {
            if (product.id == data.id) {
                console.log(data.name)
                if (data.qty > 0) {
                    return { ...data, qty: data.qty + 1 }
                }
                console.log(data.name)
               
            }
            return (data)
        })
        setTableCart(inc_number)
        console.log(tableCart)
    }

 var dec_number;
    function handeleDecrr(product) {
         dec_number = tableCart.map((data) => {
            if (product.id == data.id) {
                console.log(data.name)
                if (data.qty > 1) {
                    return { ...data, qty: data.qty -1 }
                }
                console.log(data.name) 
            }
            return (data)
        })
        setTableCart(dec_number)
        console.log(tableCart)
        
    }

    useEffect(() => {
        var changedCartData = tableCart.map((item) => {
            return { ...item, qty: 1 }
        })

        setTableCart(changedCartData);
    }, [])

    const subTotal = tableCart.reduce((acc, item) => {
    return acc + (item.price * item.qty);
        }, 0);

   
    return (
        <div>
            {/* <Nav_bar/> */}
            <div className="add_list">
                 <div className="nav_bar">
                    <Nav_bar/>
                </div>
                {
                    tableCart.map((item) => {
                        return (
                            <div className="">
                                <div className="list" key={item.id}>
                                    <img src={item.img}></img>
                                    <p>{item.name}</p>
                                    <p><LuIndianRupee />{item.price} /per kg</p>
                                    <p>Total Price : <LuIndianRupee />{item.price*item.qty}</p>
                                </div>
                                <div className="qty">
                                    <button onClick={() => handleIncrr(item)}><FaPlus /></button>
                                    <p>{item.qty}</p>
                                    <button onClick={() => handeleDecrr(item)}><FaMinus /></button>
                                </div>
                               


                            </div>
                        )
                    })
                }
            </div>
             <div className="cart-summary">
                <h3>Sub Total: <LuIndianRupee />{subTotal}</h3>
            </div>
        </div>
    )
}
export default AddToCart