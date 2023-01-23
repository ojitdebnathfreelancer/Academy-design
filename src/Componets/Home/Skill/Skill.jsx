import React from 'react';
import './Skill.css';
import photo1 from '../../../Assets/photo1.jpeg';
import bg1 from '../../../Assets/bg1.svg';
import bg2 from '../../../Assets/bg2.svg';
import bg3 from '../../../Assets/bg3.svg';
import bg4 from '../../../Assets/bg4.svg';
import bg5 from '../../../Assets/bg-5.svg';

const Skill = () => {
    return (
        <div className='lg:flex justify-between lg:mt-32 mt-10 skill max-w-7xl mx-auto px-5 relative'>
            <div className='lg:w-[60%] flex items-center'>
                <div className='text'>
                    <p className='text-title lg:text-7xl md:text-7xl text-[37px] lg:text-start text-center  font-bold'><span className='text-black'>Grow your skills,</span><br className='lg:block hidden' /> <span className='text-[#0058e4]'>define your future</span><span className='text-black'>.</span></p>
                    <p className='main-text my-10 lg:text-start text-center lg:pr-[160px] pr-0'>Presenting Academy, the tech school of the future. We teach you the right skills to be prepared for tomorrow.</p>
                    <div className='skill-btn'>
                        <button className='bg-[#3434ff] text-white lg:w-[200px] w-full'>Our Courses</button>
                        <button className='text-[#3434ff] lg:w-[200px] w-full  hover:bg-[#3434ff] hover:text-[#fff] duration-500 lg:mt-0 mt-5'>About Us</button>
                    </div>
                </div>
            </div>
            <div className='photo lg:w-[30%] lg:mt-0 mt-12'>
                <img className='lg:h-[550px] h-[400px]' src={photo1} alt="" />
            </div>

            <img className='bg1 absolute top-[-22%] left-[-20%]' src={bg1} alt="bg1" />
            <img className='bg3 absolute top-[-22%] right-[22%]' src={bg3} alt="bg3" />
            {/* <img className='bg4 absolute top-[-25%] left-[70%]' src={bg4} alt="bg4"/> */}
            <img className='bg5 absolute bottom-[-40%] right-[10%]' src={bg5} alt="bg5" />
            <img className='bg2 absolute bottom-[-300px] left-[-5%]' src={bg2} alt="bg2" />
        </div>
    );
};

export default Skill;