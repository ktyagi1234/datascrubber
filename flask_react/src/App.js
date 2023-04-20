import React, { Component } from 'react'
import { useState } from 'react'
import axios from "axios";
import logo from './logo.svg';
import './App.css';
//import React, { useState } from 'react'
import "./table.scss"

export default function Table() {
    let [array,setArray]=useState([])
    let [inputdata,setInputdata]=useState({name:"",number:"",dateOfBirth:"",email:""})
    let [index,setIndex]=useState()
    let [bolin,setBolin]=useState(false)
    let {name,number,dateOfBirth,email}=inputdata;
    
    componentDidMount() {
        console.log("hey, I just opened this react page on my browser");
    }

    /*
    CONTINUING TASK 1:
        Trigger backend endpoint, "/members" and read the data: first print it, and then set it to setArray(data).
        Refer to "function getData()" that already exist to trigger the endpoint.
        Read on: componentDidMount() {}
        Read on lifecycle methods
    */
    

    function data(e){
        setInputdata({...inputdata,[e.target.name]:e.target.value})
    }

 
    function addinputdata(){

        if(name==="" && number==="" &&dateOfBirth==="" &&email===""){
            alert("Enter your values ")
        }
        else{
        /*
        CONTINUING TASK 2:
            Trigger the backend endpoint, "/addUser" and send the new user data.
            So instead of doing setArray only, also update the backend ndjson db.
            - Update frontend via setArray
            - Update backend via the endpoint
        */
        setArray([...array,{name,number,dateOfBirth,email}])
        // console.log(inputdata)
        setInputdata({name:"",number:""})
    }
    }



// deleting row 
function deletedata(i){
    console.log(i,"this index row want to be delete")
    let total=[...array]
    total.splice(i,1)
    setArray(total)

}

// updatedata
function updatedata(i){

    let {name,number,dateOfBirth,email}=array[i]//this perticular index no row data shoud be update so we get this index no row data in name or number 
    setInputdata({name,number,dateOfBirth,email})
    setBolin(true)
    setIndex(i)

}

//know add data at perticular index means update it on that index
function updateinfo(){
    let total=[...array]
    total.splice(index,1,{name,number})
    setArray(total)
     setBolin(false)
     setInputdata({name:"",number:""})
}
  return (
    <div>
          
            <input type="text" value={inputdata.name || ""} name='name' autoComplete='off' placeholder='Enter Name' onChange={data}  />
            <input type="number" value={inputdata.number || ""} name="number" placeholder='Enter Number' onChange={data} />
            <input type="text" value={inputdata.dateOfBirth || ""} name='dateOfBirth' autoComplete='off' placeholder='Enter date of birth' onChange={data}  />
            <input type="text" value={inputdata.email || ""} name='email' autoComplete='off' placeholder='Enter email' onChange={data}  />
            <button onClick={!bolin?addinputdata:updateinfo}>{!bolin?`Add data`:`Update data`}</button>

            <br />

            <table border="1" >
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Number</th>
                        <th>Date of Birth</th>
                        <th>Email</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                {

array && array.map(
(item,i)=>{
    return(
        <tr key={i}>
            <td>{item.name}</td>
            <td>{item.number}</td>
            <td>{item.dateOfBirth}</td>
            <td>{item.email}</td>
            <td><button onClick={()=>updatedata(i)}>update</button></td>
            <td><button onClick={()=>deletedata(i)}>Delete</button></td>
        </tr>
    )
}
)

                }







                </tbody>
            </table>

    </div>
  )
}

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

//export default App;
