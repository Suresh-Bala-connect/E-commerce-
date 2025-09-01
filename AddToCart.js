import React, { useEffect, useState } from "react";


function AddToCart(){
    var cre_table;
    cre_table=JSON.parse(localStorage.getItem("addToList")) || []
    const [getTable,setTable]=useState(cre_table)
   setTable(cre_table)
    useEffect(()=>{cre_table=JSON.parse(localStorage.getItem("addToList"))},[getTable])
    // setTable(cre_table)
    console.log(getTable);
    return(
        <div>
            <div className="add_list">
                   
                   {
                    getTable.map((item)=>{
                        return(
                            <div className="list">
                                <p>{item.img}</p>
                                <p>{item.name}</p>
                            </div>
                        )
                    })
                   }
            </div>
        </div>
    )
}
export default AddToCart