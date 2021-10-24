import React from 'react';
import './Trainers.css'

const Trainers = () => {
    return (
        <div className='trainers-section'>
            <h4 className='text-danger home-text'>MEET OUR TEAM</h4>
            <h2 className='home-text'>EXPERT TRAINERS</h2>
            <div className='trainers'>
                <div>
                    <img src="https://i.ibb.co/f0BSxz0/pexels-anush-gorak-1431283.jpg" alt="" />
                    <div className='trainer-details'>
                        <h4>RICHARD STEELE</h4>
                        <p>Senior Trainer</p>
                    </div>
                </div>
                <div>
                    <img src="https://i.ibb.co/2jYBMNd/pexels-sabel-blanco-1738629.jpg" alt="" />
                    <div className='trainer-details'>
                        <h4>JANEE LOFFER</h4>
                        <p>Senior Trainer</p>
                    </div>
                </div>
                <div>
                    <img src="https://i.ibb.co/dcVG1rS/pexels-kuldeep-singhania-2105493.jpg" alt="" />
                    <div className='trainer-details'>
                        <h4>MICHAEL JAMES</h4>
                        <p>Senior Trainer</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trainers;