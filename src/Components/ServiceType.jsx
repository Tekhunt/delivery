import React from 'react';
import '../style.css';

function ServiceType({type, logo, below, classStyle}){
    return (
        <button className={`type ${classStyle ? classStyle : null} `}> 
            <span className="text">{type} <p>{below}</p></span>
            <span className="logo1">{logo}</span>
        </button>
    );
}

export default ServiceType;
