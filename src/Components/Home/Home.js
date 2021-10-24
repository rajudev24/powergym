import React from 'react';
import ChooseUs from '../ChooseUs/ChooseUs';
import Trainers from '../Trainers/Trainers';
import Trainings from '../Trainings/Trainings';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='hero-section'>
                <h3 className='hero-title'>MAKE YOUR BODY SHAPE</h3>
            </div>
            <ChooseUs></ChooseUs>
            <Trainings></Trainings>
            <Trainers></Trainers>
        </div>
    );
};

export default Home;