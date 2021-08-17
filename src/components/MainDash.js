import React from 'react'
import './home.css'
import { FaSearch, FaSortDown, FaToggleOn, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { IoIosCloudDownload } from "react-icons/io";
import UserList from './user/UserList';

const url = `https://randomuser.me/api/?gender=female&?gender=male`;
const MainDash = () => {
    
    return (
        <div>
              <div className='dashboard'>
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
                <UserList />
                    
      </div>
                <div className='dashboard-footer'>
                    <button className='download-result'> <IoIosCloudDownload className='download-icon' /> <span className='download-name'> Download results</span>  </button>
                    <button className='page-button-left'> <FaAngleLeft className='angle-side-left' /> </button>
                    <button className='page-button-right'> <FaAngleRight className='angle-side-right' /> </button>
                </div>
        </div>
    )
}

export default MainDash
