import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-section'>
            <div>
                <div className='text-xl-center text-sm-center'>
                <h4 className='brand-name'>Power Gym</h4>
                <p className='brand-moto'>Make Your body Shape</p>
                </div>
            </div>
            <div>
                <h2 className='links-list'>Quick Links</h2>
                <Link to='./privacy'>About Us</Link> <br />
                <Link to='./privacy'>Contact Us</Link> <br />
                <Link to='./privacy'>Privacy</Link> <br />
                <Link to='./privacy'>Help & Support</Link>
            </div>
            <div>
                <h2 className='links-list'>Follow Us</h2>
                <i class="fab fa-facebook fa-2x social"></i>
                <i class="fab fa-twitter fa-2x social"></i>
                <i class="fab fa-instagram fa-2x social"></i>
            </div>
        </div>
    );
};

export default Footer;