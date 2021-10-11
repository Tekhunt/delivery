import React from "react";
import '../style.css';

function Services({header, description}){
    return (
        <div className="service-contents">
             <div> <i class="fa fa-toggle-off"></i></div>
             <div className="contents">
             <h5> {header}</h5>
             <p id="describe">{description}</p>
             </div>
        </div>
    )
}

export default Services;