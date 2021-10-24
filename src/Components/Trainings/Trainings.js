
import React, { useEffect, useState } from 'react';
import Training from '../Training/Training';
import './Trainings.css'

const Trainings = () => {
    const [trainings, setTrainings] = useState([]);
    // console.log(trainings)
    useEffect(() => {
        fetch('./trainingProgram.json')
            .then(res => res.json())
            .then(data => setTrainings(data))
    }, [])
    return (
        <div className='trainings-section'>
            <h5 className='text-sm-center text-xl-center services-text'>OUR SERVICES </h5>
            <h1 className='text-sm-center text-xl-center program-text'>TRAINGING PROGRAMS</h1>
            <div className='trainings' >

                {
                    trainings.map(training => <Training
                        key={training.id}
                        training={training}

                    ></Training>)
                }
            </div>
        </div>
    );
};

export default Trainings;