import React from "react";
import './Customer.css';
import { MdStarRate } from "react-icons/md";
import { PiSmileyMeltingLight } from "react-icons/pi";

function Customer_review(){
    return(
       
        <div className="">
            <h1 className="head">Customer reviews</h1>
             <div className="customer-container">
            
            <div className="customer">
                <MdStarRate /><MdStarRate /><MdStarRate /><MdStarRate />
                <h3>For customer support</h3>
                <p>The theme is very clean. I want to say that the support is extremely
                     responsive and has been very patient with me.
                     thank you so much for your help!</p>
                     <PiSmileyMeltingLight />
                     <h2>By tokenfaith</h2>
            </div>
            <div className="customer">
                <MdStarRate /><MdStarRate /><MdStarRate /><MdStarRate />
                <h3>For customer support</h3>
                <p>We needed a number of adjustments and changes before sending the site from draft/staging to a live site.
                     support, was quick to make the necessary adjustments and changes.</p>
                     <PiSmileyMeltingLight />
                     <h2>By refine_digital</h2>
            </div>
            <div className="customer">
                <MdStarRate /><MdStarRate /><MdStarRate /><MdStarRate />
                <h3>For other</h3>
                <p>The developer is awesome at jumping on and fixing things or making changes for me. The design is great and can be adjusted easily.
                     I will definitely stick to them when comes time for an upgrade.</p>
                     <PiSmileyMeltingLight />
                     <h2>By tokenfaith</h2>
            </div>
            <div className="customer">
                <MdStarRate /><MdStarRate /><MdStarRate /><MdStarRate />
                <h3>For customer support</h3>
                <p>Excellent customer support! I highly recommend this. I have been having many troubles making the product page look exactly as I want. the customer support was very responsive and efficient in solving my problems.
                     thank you very much!</p>
                     <PiSmileyMeltingLight />
                     <h2>By clin1</h2>
            </div>
            <div className="customer">
                <MdStarRate /><MdStarRate /><MdStarRate />
                <h3>Friendly support</h3>
                <p>Excellent support. we wanted to make certain changes in theme. few points are out of the scope of theme too. the team was prompt top response and helped us to customise the theme as per our requirement.
                     highly recommended their support service.</p>
                     <PiSmileyMeltingLight />
                     <h2>By haricharans</h2>
            </div>
            <div className="customer">
                <MdStarRate /><MdStarRate /><MdStarRate /><MdStarRate />
                <h3>For customer support</h3>
                <p>I am pretty happy with the theme. I downloaded and saw documentation is a bit outdated, after spending a couple of days on self; I messaged the support. Boom, received a email reply within 30 days; 
                    having mentioned that issue will get resolved by tomorrow.</p>
                     <PiSmileyMeltingLight />
                     <h2>By logicalguru1111</h2>
            </div>
            
            
        </div>
        </div>
        
       
    )
}
export default Customer_review