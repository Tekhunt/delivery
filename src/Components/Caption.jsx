import React from "react";
import '../style.css';

function Caption({send, freight}){
    return (
        <h3>
        <span className="send">{send}</span> <span className="freight">{freight}</span>
        </h3>
    )
}

export default Caption;