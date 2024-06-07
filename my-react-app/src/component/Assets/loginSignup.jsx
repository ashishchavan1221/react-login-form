import React, { useState } from 'react'
import './LoginSignup.css'
const LoginSignup = () => {

    const [action, setAction] = useState("Sign up");

    return (
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action==="Login"?<div></div>:<div className="input">
                    <i class="itp">Username</i><br></br>
                    <input type="text" placeholder="Type Your Username" name="uname" required></input>
                </div>}
                

                <div className="input">
                    <i class="itp">Email</i>
                    <input type="text" placeholder="Type Your Email" name="uname" required></input>
                </div>

                <div className="input">
                    <i class="itp">Password</i>
                    <input type="password" placeholder="Type Your Password" name="uname" required></input>
                </div>


            </div>
            {action==="Sign up"?<div></div>:<div className="forgot-password">Forgot Password?<span>Click hear !</span></div>}

            <div className="submit-container">
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign up")}}>Sign up</div>
                <div className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>

            </div>
        </div> 

    )
}

export default LoginSignup
