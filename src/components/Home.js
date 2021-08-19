import React from "react";
import "./home.css";
import Search from './search/Search'
import Dashboard from "./dashboard";
import UserCard from './user/UserCard';
import UserList from './user/UserList'

import { FaSearch, FaUsers, FaMale, FaFemale, FaSortDown, FaToggleOn } from "react-icons/fa";

const Home = (props) => {
  return (
    <>
      <h2 className="welcome-header">
        Hello, <span className="welcome-emerald">Emerald</span>{" "}
      </h2>
      <p className="welcome-sub-header">
        Welcome to your dashboard, kindly sort through the user base
      </p>

      <Search />
      <h4 className="show-users">Show Users</h4>


      <div className="big-card">
        <FaUsers className="Users-icon" />
      </div>
      <p className='all-users'>All Users</p>
    
      <div className='medium-card1'>
        <FaMale className="male-icon" />
      </div>
      <p className='male-users'>Male Users</p>

      <div className='medium-card2'>
        <FaFemale className="female-icon" />
      </div>
      <p className='female-users'>Female Users</p>

      <Dashboard />
      {/* <UserCard /> */}
      {/* <UserList /> */}
 
    </>
  );
};

export default Home;
