import React from "react";
import './Contact.css';
import { FaWhatsapp } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
import { CiTwitter } from "react-icons/ci";
import { BsInstagram } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { CiPhone } from "react-icons/ci";
import Nav_bar from "./Nav_bar";
function Contact(){
    return(
        <div>
            <div className="contact">
                 {/* <div className="nav_bar">
                    <Nav_bar/>
                </div> */}
                <div className="con_container">
                    <div className="con_logo">
                        <h2>Orgarnic Foods</h2>
                    </div>
                    <p>Tortor neque egestas augue, eu vulputate magna eros eu erat.</p>
                    <div className="con_icon">
                        <FaWhatsapp /><SiFacebook /><CiTwitter /><BsInstagram />
                    </div>
                </div>
                <div className="service">
                    <h2>Service</h2>
                    <p>About</p>
                    <p>faq's</p>
                    <p>Contact Us</p>
                    <p>News</p>
                </div>
                <div className="policy">
                    <h2>Privacy & Tearm</h2>
                    <p>Payment policy</p>
                    <p>Private policy</p>
                    <p>Return policy</p>
                    <p>Shipping policy</p>
                </div>
                <div className="policy">
                    <h2>My Account</h2>
                    <p>My account</p>
                    <p>My Cart</p>
                    <p>Order history</p>
                    <p>My wishlist</p>
                </div>
                <div className="contact">
                    <h2>Contact Vegist</h2>
                    <p><IoLocationOutline />
                    Wooster parck chowk bazzar
                        new york</p>
                    <p><CiPhone />+014-33333-8888-6868
                    support@spacingtech.com</p>
                </div>
            </div>
        </div>
    )
}
export default Contact;