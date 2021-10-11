import React from "react";
import '../style.css';
import Location from "./Location";

const Route = () => {
    return (
        <div className="route">
        <div className="">
            <p className="p-tag"><i class="fa fa-exclamation-circle"></i></p>

            <div className="div1">

                <div className="small-container">
                    <button className="btn-left">Import</button><button className="btn-right">Export</button>
                </div>
                <Location icon={[<i class="fa fa-map-marker"></i>]} where ="From City or port" />
                <Location icon={[<i class="fa fa-map-marker"></i>]} where ="To City or Port" />
                <Location icon={[<i class="fa fa-calendar"></i>]} where ="Ready Date" />
                <Location where ="From City or port" dropdown ={[<i class="fa fa-chevron-down"></i>]} />
                <Location where ="Total Cargo Value" />
            </div>
         </div>
         </div>
    );
}

export default Route;
