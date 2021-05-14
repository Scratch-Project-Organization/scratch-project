import React, { useState } from 'react';
import Login from '../components/Login.jsx'
import Register from '../components/Register.jsx'

const LandingPage = () => {
    const [isRegistering, setRegisteringState] = useState(false);
    return (
        <div>
            <div> Welcome to 'ProjectName' 2.0</div>
            <br/>
            <br/>
            <div >
                {!isRegistering
                  ? <Login setRegisteringState={setRegisteringState}/>
                  : <Register/>
                }
            </div>
        </div>
       

    )
}

export default LandingPage