import React from 'react'
import { Link } from 'react-router-dom'
import './sign.css'

const SignIn = () => {
    return (
        <div className='singContainer'>
            <div className="singWrapper">
                <h3>Sing in</h3>
                <h4>to continue to Youtube</h4>
                <input type="text" placeholder='username'/>
                <input type="password" placeholder='password'/>
                <button>Sign in</button>
                <h3>or</h3>
                <input type="text" placeholder='username'/>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <button>Sign up</button>
            </div>
            <div className="more">
                English (USA)
                <Link>Help</Link>
                <Link>Privacy</Link>
                <Link>Terms</Link>
            </div>
        </div>
    )
}

export default SignIn
