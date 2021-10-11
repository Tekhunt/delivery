import React from "react";
import '../style.css';

function HeaderBtn({text}){
    return (
        <div>
            <button className="top-btn">{text}</button>
        </div>
    )
}

export default HeaderBtn;