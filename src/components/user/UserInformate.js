import React from 'react';
import { FaSearch, FaSortDown, FaToggleOn} from "react-icons/fa";

const UserInformate = () => {
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
                
                <div>
                    
                </div>
                    
      </div>
        </div>
    )
}

export default UserInformate
