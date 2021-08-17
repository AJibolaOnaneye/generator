// import React, {useEffect, useState} from 'react'
// import './user.css'
// import { FaRegEnvelope, FaPhoneVolume, FaArrowRight } from "react-icons/fa";
// import { Card } from 'react-bootstrap';

// const url = ' https://randomuser.me/api/'
// const UserCard = ({name:{ first, last}}) => {
//     const [users, setUsers] = useState([])


//     useEffect(() => {
//         const getUsers = async () => {
//             const res = await fetch(url)
//             const users = await res.json()
//             setUsers(users.results)
//             console.log(users);
//         }
//         getUsers()
//     }, [])

//     return (

        
//         <div >
//              {users.map((user)=>{
            
//         const {gender, name: {title, first, last}, phone, email, login: {uuid}} = user;

//             <div className='user-card' >
//                 <img src={''} className='user-img'  alt='user Image' />
//                 <h4 className='user-name'>{first}</h4>
//                 <p className='user-address'>9278 new road, kilcoole, waterford</p>
//                 <FaRegEnvelope className='mail-icon' />
//                 <p className='user-email'> {email}</p>
//                 <FaPhoneVolume className='phone-icon' />
//                 <p className='user-tele'> 011-962-7516</p>
//                 <button className='user-info'><FaArrowRight className='arrow-icon'/>  </button>
//             </div>

//         })}



//             <div className='user-card2'>
//                 <img src={''} className='user-img'  alt='user Image' />
//                 <h4 className='user-name'>{first}</h4>
//                 <p className='user-address'>9278 new road, kilcoole, waterford</p>
//                 <FaRegEnvelope className='mail-icon' />
//                 <p className='user-email'> brad.gibson@example.com </p>
//                 <FaPhoneVolume className='phone-icon' />
//                 <p className='user-tele'> 011-962-7516</p>
//                 <button className='user-info'><FaArrowRight className='arrow-icon'/>  </button>
//             </div>
//             <div className='user-card3'>
//                 <img src={''} className='user-img'  alt='user Image' />
//                 <h4 className='user-name'>Shalom Chioma</h4>
//                 <p className='user-address'>9278 new road, kilcoole, waterford</p>
//                 <FaRegEnvelope className='mail-icon' />
//                 <p className='user-email'> brad.gibson@example.com </p>
//                 <FaPhoneVolume className='phone-icon' />
//                 <p className='user-tele'> 011-962-7516</p>
//                 <button className='user-info'><FaArrowRight className='arrow-icon'/>  </button>
//             </div>
//         </div>
//     )
// }

// export default UserCard


import { Button } from "bootstrap";
import React, { useState, useEffect } from "react";
import {
  FaRegEnvelope,
  FaPhoneVolume,
  FaArrowRight,
  FaMobileAlt,
  FaArrowLeft
} from "react-icons/fa";
import { BrowserRouter as Link } from "react-router-dom";
import './user.css'
const url = `https://randomuser.me/api/?results=2`;

const UserCard = (props) => {
  const [userData, setUserData] = useState([]);
  const [activeUser, setActiveUser] = useState(false);


  const detailInfo = (index) => {
    setActiveUser(true);
    console.log(index);
  };

  const fetchUserData = async () => {
    const resp = await fetch(url);
    const userData = await resp.json();
    setUserData(userData.results);
    console.log(userData);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      {userData.map((user, index) => {
        const {
          name: { title, first, last },
          location: {
            street: { number, name },
            city,
            state,
            country,
            postcode,
            coordinates: { latitude, longitude },
            timezone: { offset, description },
          },
          email,
          login: { uuid, username },
          //   dob: { date, age },
          phone,
          cell,
          picture: { large },
          registered: { date, age },
        } = user;

        if (!activeUser) {
        //   return (
        //     <div className="card-row">
        //       <div key={index} className="user-card">
        //         <img
        //           src={large}
        //           alt={first}
        //           className="block mx-auto rounded-full user-img"
        //         />
        //         <h4 className="user-name">
        //           {" "}
        //           {first} {last}
        //         </h4>
        //         <p className="user-address">
        //           {number}, {name} {city}{" "}
        //         </p>
        //         <FaRegEnvelope className="mail-icon" />
        //         <p className="user-email">{email}</p>
        //         <FaPhoneVolume className="phone-icon" />
        //         <p className="user-tele"> {phone}</p>

        //         <button
        //           key={index}
        //           className="user-info"
        //           onClick={() => detailInfo(user)}
        //         >
        //           <FaArrowRight className="arrow-icon" />
        //         </button>
        //       </div>
        //     </div>
        //   );
        } else if (activeUser && index) {
          return (
              <div key={index} className="user-detailed-Info">
                <button className='history-btn'>
                <FaArrowLeft className='arrow-left-icon' />

                </button>
              <img
                src={large}
                alt={first}
                className="block mx-auto rounded-full user-img-big"
              />
              <h4 className="user-name-big">
                {" "}
                {title} {first} {last}
              </h4>
              <p className="user-address-big">
                {number}, {name} {city}{" "}
              </p>
              <div className="mail-overlay">
                {/* <FaRegEnvelope className='mail-icon' /> */}
                <p className="user-email-big">
                  {" "}
                  <FaRegEnvelope className="mail-icon-big" /> <span></span>{" "}
                  {email}
                </p>
              </div>
              <p className="reg-date">JOINED: {date}</p>
              {/* <FaPhoneVolume className='phone-icon' /> */}
              <p className="user-tele-big">
                <FaPhoneVolume className="" /> {phone}
              </p>
              {/* <FaPhoneVolume className='phone-icon' /> */}
              <p className="user-phone-big">
                <FaMobileAlt className="" /> {cell}
              </p>
            </div>
          );
        }
      })}
    </>
  );
};

export default UserCard;
