import React from "react";
import './Recent.css';
import img56 from './img/img56.jpg'
import img57 from './img/img57.jpg'
import img58 from './img/img58.jpg'

function Recent(){
    return(
        <div>
            <div className="recent_con">
                <h1>Recent News</h1>
                <div className="three_div">
                    <div className="first_div">
                        <img src={img56}/>
                        <h2>Fresh organics brand and picnic</h2>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli.
                             Aenean commodo ligula eget dolor. Aenean massa. Cumtipsu sociis natoque penatibus et magnis dis parturient montesti, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eutu, pretiumem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justotuio, rhoncus ut loret, imperdiet a, venenatis vitae, justo. 
                            Nullam dictum felis eu pede mollis pretium. Intege</p>
                    </div>
                     <div className="first_div">
                        <img src={img57}/>
                        <h2>Green onion knife and salad placed</h2>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli.
                             Aenean commodo ligula eget dolor. Aenean massa. Cumtipsu sociis natoque penatibus et magnis dis parturient montesti, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eutu, pretiumem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justotuio, rhoncus ut loret, imperdiet a, venenatis vitae, justo. 
                            Nullam dictum felis eu pede mollis pretium. Intege</p>
                    </div>
                     <div className="first_div">
                        <img src={img58}/>
                        <h2>All time fresh every time healthy</h2>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli.
                             Aenean commodo ligula eget dolor. Aenean massa. Cumtipsu sociis natoque penatibus et magnis dis parturient montesti, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eutu, pretiumem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justotuio, rhoncus ut loret, imperdiet a, venenatis vitae, justo. 
                            Nullam dictum felis eu pede mollis pretium. Intege</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Recent