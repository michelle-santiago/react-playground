import { useEffect, useState } from 'react';
import './App.css';

function App() {
      const { header, setHeader } = useState([])
        const url = 'http://206.189.91.54/api/v1'
        /*USER REGISTRATION*/
        fetch(`${url}/auth/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              email: "mishil343@example.com",
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
          })
        /*SIGN IN */
        fetch(`${url}/auth/sign_in`, {
          
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: "meline@hotmail.com",
            password: "12345678"
          }),
        })
          .then((res) => {
            
            console.log(res)
            /*setHeader({
              ...header,
              {
                expiry: res.headers.get('expiry'),
                uid: res.headers.get('uid'),
                accessToken: res.headers.get('access-token'),
                client: res.headers.get('client'),
              },
            })*/
            console.log("test header",header)
            //console.log("test login",loginHeader)
            return res.json()
          })
          .then((data) => {
            console.log(data)
          })

    

  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
