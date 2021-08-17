import React from 'react'
import './home.css'
import { FaSearch, FaSortDown, FaToggleOn, FaAngleLeft, FaAngleRight, FaArrowLeft } from "react-icons/fa";
import { IoIosCloudDownload } from "react-icons/io";


const url = `https://randomuser.me/api/?results=4`;

const SubDash = () => {
    return (
        <div>
              <div>
        <h1 className='dash-h1'>All Users</h1>
        <h6 className='dash-h6'>Filter by</h6>
        <FaSearch className="search-icon-small" />
        <input type="text" placeholder="Find in list" className="find-in-list" />

        <select defaultValue='sort' onChange={''} className='sort'>
                <option disabled value='sort'>Sort</option>
                <option  value='Country'>Country</option>
                <option value='Age'>Age</option>
            </select>
                <FaSortDown className='angle-down' />

                <FaToggleOn className='toggle' />

                <p className='toggle-text'>Show Country</p>
              
                    
            <FaArrowLeft className='arrow-left-icon' />

      </div>
        </div>
    )
}

export default SubDash
