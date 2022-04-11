import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Please login </h2>
                <form >
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" required/>
                    </div>
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p>New to Ema-John ? <Link className='form-link' to='/signup'>Create an Account</Link> </p>
                <div className='or-menu'>
                    <div className='hr-line'></div>
                    <span style={{margin:"0 10px"}}>or</span>
                    <div className='hr-line'></div>
                </div>
                <button className='continue-with-google-button'> Continue with Google</button>
            </div>
        </div>
    );
};

export default Login;