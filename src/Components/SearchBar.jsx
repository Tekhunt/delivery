import React from "react";
import '../style.css';

function SearchBar(){
    return (
        <div>
            <div className="search-btn">
                <input placeholder="Search"/>
                <i class="fa fa-search" aria-hidden="true"></i>
            </div>
        </div>
    )
}

export default SearchBar;