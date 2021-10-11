import React from "react";
import '../style.css';
import HeaderBtn from "./HeaderBtn";
// import HeaderBtnGreen from "./HeaderBtnGreen";
import Caption from './Caption';
import SearchBar from './SearchBar';
import HeaderBtnGreen from "./HeaderBtnGreen";

function Navbar(){
    return (
        <div className="nav">
           <div className="nav-left">
                <Caption send="send" freight="FREIGHT" />
                <SearchBar/>
            </div>
            

            <div className="nav-right">
                <HeaderBtn  text="Request Quote"/>
                <HeaderBtnGreen text="Book Shipment" />
            </div>
        </div>
    )
}

export default Navbar;