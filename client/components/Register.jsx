import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const history = useHistory()

    const handleUsername = (e) => {
         setUsername(e.target.value)
    }

    const handlePassword = (e) => {
         setPassword(e.target.value)
    }

    const handlePassword2 = (e) => {
         setPassword2(e.target.value)
    }

    const submit = (e) => {
      
        e.preventDefault();
        const newUser = {
            username: username,
            password: password,
            password2: password2
        }
        console.log("from fetch", newUser)
        fetch('/user/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
          })
            .then(response => response.json())
            .then(data => console.log("hello", data))
            .then(history.push('/'))
            .catch(err => console.log(err))
            
    }

    return (
        
            <div>
                <div>
                    <input  id="username" type="text" value={username} onChange={handleUsername}></input>
                    <label htmlFor="username">Username</label>
                </div>
                <div>
                    <input  id="password" type="password" value={password} onChange={handlePassword}></input>
                    <label htmlFor="password">Password</label>
                </div>
                <div>
                    <input  id="password2" type="password" value={password2} onChange={handlePassword2}></input>
                    <label htmlFor="password2">Confirm Password</label>
                </div>
                <div>
                <button type="button" onClick={submit}>Register</button>
                </div>
            </div>
       
    )
}

export default Register