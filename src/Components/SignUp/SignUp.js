import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Share/useAuth';
import './SignUp.css'

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const { error, createNewUser} = useAuth();
    //handle Input Form
    const handleInputForm = (event)=>{
        event.preventDefault();
        createNewUser(email, password);
    }
    
    //handle User Name
    const handleName = (event)=>{
        const nameValue = event.target.value;
        setName(nameValue);
    }

    //handle User Email
    const handleEmail = event =>{
        const emailValue = event.target.value;
        setEmail(emailValue);
    }

    //Handle Password value
    const handlePassword = event =>{
        const passwordvalue = event.target.value;
        setPassword(passwordvalue)
    }
    // console.log(name)
    // console.log(email)
    // console.log(password)
    return (
        <div className='signUp'>
            <Form onSubmit={handleInputForm} className='signUpForm' >
                <h3 className='text-xl-center text-sm-center mb-3'>Welcome to Power Gym</h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label >Full Name</Form.Label>
                    <Form.Control onBlur={handleName} type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label >Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
                </Form.Group>
                {error} <br />
                <Link to='/login'>Already Registred?</Link>
                <br />
                <Button className='mt-4' variant="primary" type="submit">
                    Sign Up
                </Button>
            </Form>
        </div>
    );
};

export default SignUp;