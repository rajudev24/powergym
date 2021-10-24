import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Programs.css'


const Programs = () => {
    const { programdetails } = useParams()
    const [programs, setPrograms] = useState([]);

    useEffect(() => {
        fetch('/trainingProgram.json')
            .then(res => res.json())
            .then(data => setPrograms(data))
    }, [])
    // console.log(programs) 
    const findProgram = programs.find(program => program?.id == programdetails);

    return (

        <div>
            <div className='section-img '>
                <img src="https://i.ibb.co/DKjCLJN/pexels-cesar-gale-o-3253501.jpg" alt="" />
            </div>
            <div className='program-body'>
                {/* <h4 className='section-title'> This is Course Details</h4> */}
                <p className='section-title'>Course Details</p>
                <div className='program-section'>
                    <img src={findProgram?.img} alt="" />
                    <h4>{findProgram?.courseName} </h4>
                    <h3>Fee: ${findProgram?.fee} </h3>
                    <p>{findProgram?.courseTitle} </p>

                </div>
            </div>
        </div>
    );
};

export default Programs;