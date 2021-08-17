import React from 'react'
import { FaSearch } from "react-icons/fa";
import './search.css'

const Search = () => {
    return (
        <div>
            <FaSearch className="search-icon-big" />
            <input type="text" placeholder="Find a user" className="find-user" />
        </div>
    )
}

export default Search
