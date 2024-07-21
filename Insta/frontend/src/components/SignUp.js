import React from 'react'
import logo from '../img/logo.png'
import './Signup.css'
import { Link } from 'react-router-dom'
export default function SignUp() {
    return (
        <div className='signUp'>
            <div className='form-container'>
                <img className="signUpLogo" src={logo} alt="logo" />
                <p className='loginPara'>
                    SignUp to see photos and videos<br /> of your friends
                </p>
                <div>
                    <input type='email' name="email" id="email" placeholder='Email' />
                </div>
                <div>
                    <input type='text' name="name" id="name" placeholder='Full Name' />
                </div>
                <div>
                    <input type='text' name="username" id="username" placeholder='Username' />
                </div>
                <div>
                    <input type='password' name="password" id="password" placeholder='Password' />
                </div>
                <div className='loginPara' style={{ fontSize: "12px", margin: "auto", marginLeft: "38px" }}>
                    <p> By signing up, you agree to our<br />
                        Terms of Service and Privacy Policy</p>
                    <input type='submit' id="submit-btn" value="Sign Up" />
                </div>
            </div>
            <div className='form-2'>
                Already have an account?
                <Link to="/signin"><span style={{ color: "blue", cursor: "pointer" }}>Sign in</span></Link>
            </div>
        </div>
    )
}
