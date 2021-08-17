import React from 'react'
import './home.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { FaSearch, FaSortDown, FaToggleOn, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { IoIosCloudDownload } from "react-icons/io";
import MainDash from './MainDash';
import SubDash from './SubDash';
const dashboard = () => {
    return (
        <div>
            <MainDash />
            
        </div>
    )
}

export default dashboard
