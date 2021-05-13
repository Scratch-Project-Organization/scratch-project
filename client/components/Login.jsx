import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'

const Login = ({ setRegisteringState }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory()

    const handleUsername = (e) => {
      return setUsername(e.target.value)
    }

    const handlePassword = (e) => {
      return setPassword(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const user = {
            username: username,
            password: password
        }
        console.log("user", user)
      fetch('/user/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .then(history.push('/'))
        .catch(err => console.log(err))
    }
    
    return (
        <div>
        <div>
        </div>
        <form onSubmit={onSubmit}>
            <div >
                <input id="username" type="text" value={username} onChange={handleUsername}/>
                <label>Username</label>
            </div>
            <div >
                <input id="password" type="password" value={password} onChange={handlePassword}/>
                <label>Password</label>
            </div>
            <div>
                <button type="submit" >Login</button>
            </div>
            <div>
            <p>Don't have an account?</p>
            <button onClick={() => setRegisteringState(true)}>Register Here</button>
        </div>
        </form>
        
    </div>
    )

};

export default Login