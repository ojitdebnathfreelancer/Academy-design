import React from 'react';
import './LearningWithUs.css';
import learn1 from '../../../Assets/learn1.svg';
import learn2 from '../../../Assets/learn2.svg';
import learn3 from '../../../Assets/learn3.svg';
import learn4 from '../../../Assets/learn4.svg';

const LearingWithUs = () => {
    return (
        <div className='max-w-7xl mx-auto py-24 px-5'>
            <div className='lg:flex justify-between' data-aos="zoom-in" data-aos-duration="1000">
                <h1 className='lg:text-4xl text-[30px] font-bold lg:text-start text-center'>Why Learning With us?</h1>
                <div className='flex justify-center'>
                    <button className='bg-[#3434ff] py-3 rounded-md text-xl text-white lg:w-[200px] w-full'>Our Courses</button>
                </div>
            </div>
            <div className='learning-items lg:flex justify-between lg:py-24 py-10'>
                <div className='learing-items-left lg:w-[40%] w-full'>
                    <div className='items lg:flex lg:mt-0 mt-12' data-aos="zoom-out-left" data-aos-duration="1000">
                        <div className='lg:w-[20%] mr-[20px] flex justify-center'>
                            <img className='' src={learn1} alt="learn1" />
                        </div>
                        <div className='lg:w-[80%]'>
                            <h2 className='lg:text-3xl text-[24px] lg:text-start text-center font-semibold mb-4'>World-Class Teachers</h2>
                            <p className='text-[18px] text-[#5e5e5e] lg:text-start text-center lg:pr-[35px]'>Lorem ipsum dolor sit amet, consecteturirem adipiscing elit. Volutpat quis molestie tortorerm, gravida a aenean neque. Placerat</p>
                        </div>
                    </div>
                    <div className='items lg:flex lg:mt-16 mt-12' data-aos="zoom-out-left" data-aos-duration="1000">
                        <div className='lg:w-[20%] mr-[20px] flex justify-center'>
                            <img className='' src={learn2} alt="learn2" />
                        </div>
                        <div className='lg:w-[80%]'>
                            <h2 className='lg:text-3xl text-[24px] lg:text-start text-center font-semibold mb-4'>World-Class Teachers</h2>
                            <p className='text-[18px] text-[#5e5e5e] lg:text-start text-center lg:pr-[35px]'>Lorem ipsum dolor sit amet, consecteturirem adipiscing elit. Volutpat quis molestie tortorerm, gravida a aenean neque. Placerat</p>
                        </div>
                    </div>
                </div>
                <div className='learing-items-right lg:w-[40%] w-full'>
                    <div className='items lg:flex lg:mt-0 mt-12' data-aos="zoom-out-left" data-aos-duration="1000">
                        <div className='lg:w-[20%] mr-[20px] flex justify-center'>
                            <img className='' src={learn3} alt="learn3" />
                        </div>
                        <div className='lg:w-[80%]'>
                            <h2 className='lg:text-3xl text-[24px] lg:text-start text-center font-semibold mb-4'>World-Class Teachers</h2>
                            <p className='text-[18px] text-[#5e5e5e] lg:text-start text-center lg:pr-[35px]'>Lorem ipsum dolor sit amet, consecteturirem adipiscing elit. Volutpat quis molestie tortorerm, gravida a aenean neque. Placerat</p>
                        </div>
                    </div>
                    <div className='items lg:flex lg:mt-16 mt-12' data-aos="zoom-out-left" data-aos-duration="1000">
                        <div className='lg:w-[20%] mr-[20px] flex justify-center'>
                            <img className='' src={learn4} alt="learn4" />
                        </div>
                        <div className='lg:w-[80%]'>
                            <h2 className='lg:text-3xl text-[24px] lg:text-start text-center font-semibold mb-4'>World-Class Teachers</h2>
                            <p className='text-[18px] text-[#5e5e5e] lg:text-start text-center lg:pr-[35px]'>Lorem ipsum dolor sit amet, consecteturirem adipiscing elit. Volutpat quis molestie tortorerm, gravida a aenean neque. Placerat</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LearingWithUs;