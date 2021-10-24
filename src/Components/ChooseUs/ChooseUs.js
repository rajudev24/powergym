import React from 'react';
import './ChooseUs.css'

const ChooseUs = () => {
    return (
        <div className='choose-section'>
            <div className='choose-img'>
                <img src="https://i.ibb.co/Tvf8twv/pexels-wagner-robson-9073247.jpg" alt="" />
            </div>
            <div  >
                <h2 className='choose-text ps-0 pt-5'>Why Choose us?</h2>
                <div className='choose-us'>
                    <div className='choose-single'>
                        <img src="https://i.ibb.co/fvt8y8G/image.png" alt="" />
                        <h3 className='choose-text'>PROGRESSION</h3>
                        <p></p>
                    </div>
                    <div className='choose-single'>
                        <img src="https://i.ibb.co/D5hGp50/image.png" alt="" />
                        <h3 className='choose-text'>WORKOUT</h3>
                    </div>
                    <div className='choose-single'>
                        <img src="https://i.ibb.co/4Z9BTHC/image.png" alt="" />
                        <h3 className='choose-text'>NUTRITION</h3>
                    </div>
                    <div className='choose-single'>
                        <img src="https://i.ibb.co/xhZ5HhY/image.png" alt="" />
                        <h3 className='choose-text'>SELF DEFENCE</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;