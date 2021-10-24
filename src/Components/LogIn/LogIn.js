import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Share/useAuth';
import './LogIn.css'

const LogIn = () => {
    const { signWithGoogle, userLogIn } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory()
    const location = useLocation();
    const redirect = location.state?.from || '/';
 
    //Handle User Login
    const handleLogIn = (event) =>{
        event.preventDefault();
        userLogIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            history.push(redirect);
            
        })
    }
    //Handle Custom google Log in 
    const handleGooleLogin =()=>{
        signWithGoogle()
        .then(result => {
            history.push(redirect);
        })
    }

    //handle User Email
    const handleEmail = event =>{
        const emailValue = event.target.value;
        setEmail(emailValue)
    }
    const handlePassword = event =>{
        setPassword(event.target.value);
    }

    return (
        <div className='signUp'>
            <div className='signUpForm' >
                <Form onSubmit={handleLogIn} >
                    <h3 className='text-xl-center text-sm-center mb-3'>Welcome to Power Gym</h3>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label >Email address</Form.Label>
                        <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
                    </Form.Group>
                    <Link to='/signup'>New Member?</Link>
                    <br />
                    <Button className='mt-4 mb-2' variant="primary" type="submit">
                        Log In
                    </Button>

                </Form>
                <div>
                    <p > or login with Google</p>
                    <button onClick={handleGooleLogin} className='googleBtn'> <i className="fab fa-google"></i> Google</button>
                </div>
            </div>


        </div>
    );
};

export default LogIn;