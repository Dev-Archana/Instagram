import React from 'react'
import './Signin.css'
import logo from '../img/logo.png'
import { Link } from 'react-router-dom'
export default function SignIn() {
    return (
        <div className='signIn'>
            <div>
                <div className='loginForm'>
                    <img src={logo} alt='logo' />
                    <div>
                        <input type='email' name="email" id="email" placeholder='Email' />
                    </div>
                    <div>
                        <input type='password' name="password" id="password" placeholder='Password' />
                    </div>
                    <input type='submit' name='' id='login-btn' value="Sign In" />
                </div>
                <div className='loginForm-2'>
                    Don't have an account?
                    <Link to="/signup">
                        <span style={{ color: "blue", cursor: "pointer" }}>Sign Up</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
