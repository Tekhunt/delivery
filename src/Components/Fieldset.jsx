import React from "react";
import '../style.css';


function Fieldset({title, option}){
    return (
        <div>
            <fieldset>
            <legend>{title}</legend>
            <p>{option}</p>
            </fieldset>
        </div>
    )
}

export default Fieldset;