import React from 'react';
import '../style.css';

function Location({icon, where, dropdown}) {
    return (
        <div className="location-container">
           
            <button className="location-btn"><span className="start"><a href="#google-map">{icon}</a> {where}</span> <span className="end">{dropdown}</span></button>
            
        </div>
    )
}

export default Location;
