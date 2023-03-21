import React, { Component } from 'react'
import { useState } from 'react'
import axios from "axios";
import logo from './logo.svg';
import './App.css';

function App() {

   // new line start
  const [profileData, setProfileData] = useState(null)

  function getData() {
    axios({
      method: "GET",
      url:"http://127.0.0.1:5000/profile",
    })
    .then((response) => {
      const res =response.data
      //alert(res)
      setProfileData(({
       profile_name: res.name,
        about_me: res.about}))
    }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.headers)
        }
    })}
    //end of new line  <img src={logo} className="App-logo" alt="logo" /> 
    //Edit <code>src/App.js</code> and save to reload.
    /*<a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */
  return (
    <div className="App">
      <header className="App-header">
         
        <h2>Open Avenues Internship - Data Scrubber Application</h2>
        <p>
          Created by Kshitij Tyagi under guidance of Rishabh Gupta.
          
        </p>
        

        {/* new line start*/}
        <p>To get your profile details: </p><button onClick={getData}>Click me</button>
        {profileData && <div>
              <small>User ID    First Name    Last Name    Data    Age    Email </small>
              <p>Profile name: {profileData.profile_name}</p>
              <p>About me: {profileData.about_me}</p>
            </div>
        }
         {/* end of new line */}
      </header>
    </div>
  );
}

export default App;