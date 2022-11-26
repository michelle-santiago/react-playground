import { useEffect, useState } from 'react';
import './App.css';

function App() {
       const [ header, setHeader ] = useState(null)
        const url = 'http://206.189.91.54/api/v1'
      
        useEffect(()=>{
          /******************************************************************************/
          //USER REGISTRATION 
          /*****************************************************************************/
          
         /*fetch(`${url}/auth/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: "mishil_@example.com",
                password: "12345678",
                password_confirmation: "12345678"
          
            }),
          })
            .then((res) => {
              console.log(res)
              return res.json()
            })
            .then((data) => {
              console.log(data)
            })*/

           /******************************************************************************/
          //SIGN IN
          /*****************************************************************************/
          fetch(`${url}/auth/sign_in`, {
          
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: "michelle@email.com",
              password: "12345678"
            }),
          })
            .then((res) => {
            console.log(res)
             setHeader({
                ...header,
                'access-token': res.headers.get('access-token'),
                'client': res.headers.get('client'),
                'expiry': res.headers.get('expiry'),
                'uid': res.headers.get('uid'),
              })
              console.log("test header",header)
              return res.json()
            })
            .then((data) => {
              console.log(data)
            })
        },[])
     useEffect(()=>{
      if(header!==null){
        //console.log("Check header: ",header.uid)
      /******************************************************************************/
      //GET ALL USERS
      /*****************************************************************************/
      fetch(`${url}/users`, {
        method: 'GET',
        headers: header,
      })
        .then((res) => {
          console.log("users res",res)
          return res.json()
        })
        .then((data) => {
          console.log("users data",data)
        })
      /******************************************************************************/
      //DIRECT MESSAGE 
      /*****************************************************************************/
       fetch(`${url}/messages`, {
          method: 'POST',
          headers:{
            'Content-Type': 'application/json',
            ...header
          },
          body: JSON.stringify({
              receiver_id: "2966",
              receiver_class: "User",
              body: "(⁠◍⁠•⁠ᴗ⁠•⁠◍⁠)"
          }),
        })
          .then((res) => {
            console.log("message res",res)
            return res.json()
          })
          .then((data) => {
            console.log("message data",data)
          })  
      /******************************************************************************/
      //RETRIEVE DIRECT MESSAGE 
      /*****************************************************************************/
       /* fetch(`${url}/messages?receiver_id=2919&receiver_class=User`, {
          method: 'GET',
          headers: header,
        })
          .then((res) => {
            console.log("message res",res)
            return res.json()
          })
          .then((data) => {
            console.log("message data",data)
          })  
         */
      /******************************************************************************/
      //GET CHANNELS 
      /*****************************************************************************/
     /* fetch(`${url}/channels`, {
        method: 'GET',
        headers: header,
      })
        .then((res) => {
          console.log("channel res",res)
          return res.json()
        })
        .then((data) => {
          console.log("channel data",data)
        })*/

      /******************************************************************************/
      //MESSAGE TO CHANNEL
      /*****************************************************************************/
      /*fetch(`${url}/messages`, {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
          ...header
        },
        body: JSON.stringify({
            receiver_id: 4046,
            receiver_class: "Channel",
            body: "(⁠◍⁠•⁠ᴗ⁠•⁠◍⁠)"
        }),
      })
        .then((res) => {
          console.log("message channel res",res)
          return res.json()
        })
        .then((data) => {
          console.log("message channel data",data)
        })  */
      }
     },[header])
  
  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
