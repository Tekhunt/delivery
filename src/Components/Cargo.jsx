import React from "react";
import '../style.css';
import Fieldset from "./Fieldset";
// import CargoHeader from "./CargoHeader";


function Cargo(){
    return(
        <div className="wrapper">
        <div className="cargo">
            <h5 className="services-caption">Cargo Details</h5>
            <div className="cargo-content">
                <div> <i class="fa fa-toggle-on"></i></div>
                <p id="desc">Dangerous Cargo (ex. Chemicals, Battery)</p>
            </div>
           
        </div>
        <div className="btn-container">
        <button className="parent-btn">
                <button className="inner-btn">Total Dimensions</button> <span className="package">Package Details</span>
        </button>
        </div>
        <div className="field">
        <Fieldset title="Total Volume" option="cbm" />
        <Fieldset title="Total Weight" option="kg" />
        </div>


        </div>
    )
}

export default Cargo;