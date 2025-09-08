import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { LuIndianRupee } from "react-icons/lu";
// import Nav_bar from "./Nav_bar";
import './AddToCart.css';

function AddToCart() {

    const [tableCart, setTableCart] = useState(JSON.parse(localStorage.getItem("addToList")) || []);
    // console.log(tableCart);

    const [getCount,setCount]=useState(1)
    // var tableCart;
    var inc_number;
    function handleIncrr(name){
        setCount(getCount+1)
        // console.log(e.target.value)

         inc_number=tableCart.find((pro_name)=>{
            return(
                pro_name.name==name
            )
            // if(pro_name.name==name){
            //     setCount(getCount+1)
            // }
        })
        console.log(inc_number)
        inc_number.qty=Number(getCount)
        localStorage.setItem("addToList",JSON.stringify(tableCart));
        console.log(getCount)
         setTableCart(tableCart)
         console.log(tableCart)
    }
     function handeleDecrr(name){
        setCount(getCount-1)
         var dec_number=tableCart.find((pro_name)=>{
            return(
                pro_name.name==name
            )
        })
        console.log(dec_number)
    }

    return (
        <div>
             {/* <Nav_bar/> */}
            <div className="add_list">
                
                {
                    tableCart.map((item) => {
                        return (
                            
                            <div className="">
                                <div className="list">
                                     <img src={item.img}></img>
                                    {/* <img src={item.img}  alt="img" width={200}/> */}
                                    <p>{item.name}</p>
                                    <p><LuIndianRupee />{item.price} /per kg</p>
                                </div>
                                <div className="qty">
                                    <h4>Qty</h4>
                                    <button onClick={()=>handleIncrr(item.name)}><FaPlus /></button>
                                    <p>{getCount}</p>
                                    <button onClick={()=>handeleDecrr(item.name)}><FaMinus /></button>
                                </div>
                                
                            </div> 
                        )
                    })
                }
            </div>
        </div>
    )
}
export default AddToCart