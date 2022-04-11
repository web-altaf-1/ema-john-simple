import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();

    const [signInWithEmailAndPassword ,
        user,
        loading ,
        error] = useSignInWithEmailAndPassword(auth);


    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event =>{
        setPassword(event.target.value);
    }

    if(user){
        navigate('/orders');
    }

    const handleUserSignIn   = event =>{
        event.preventDefault();
        signInWithEmailAndPassword(email,password);
    }


    


    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Please login </h2>
                <form onSubmit={handleUserSignIn}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required/>
                    </div>
                    <p style={{color:'red'}}>{error?.message}</p>
                    {
                        loading && <p>Loading...</p>
                    }
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