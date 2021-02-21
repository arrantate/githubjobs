import React, { useState } from "react";
import SearchBar from './SearchBar';


function Nav() {
    return (
        <div className="flex flex-col sm:flex-row sm:h-20 px-6 border-b border-black bg-gray-900 text-green-600 relative z-50">
            <div className="h-20 flex items-center justify-between sm:h-auto">

                <h1 className="text-3xl"><i className="fab fa-github mr-4"></i>Jobs</h1>
            </div>
            <SearchBar />
        </div>
    )
}

export default Nav