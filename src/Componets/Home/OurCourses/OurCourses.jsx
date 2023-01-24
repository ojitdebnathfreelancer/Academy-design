import React from 'react';
import './OurCourses.css';
import course1 from '../../../Assets/course1.png';
import course2 from '../../../Assets/course2.png';
import course3 from '../../../Assets/course3.png';
import network1 from '../../../Assets/network1.svg';
import network2 from '../../../Assets/network2.svg';
import network3 from '../../../Assets/network3.svg';

const OurCourses = () => {
    return (
        <div className='max-w-7xl mx-auto py-24 px-5 our-courses'>
            <div className='course-header lg:flex items-center justify-between'>
                <div data-aos="zoom-in-up" data-aos-duration="1000">
                    <h1 className='text-4xl font-bold lg:text-start text-center'>Our Courses</h1>
                    <p className='text-[18px] lg:pr-[625px] lg:text-start text-center lg:my-0 my-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat feugiat congue viverra facilisis.</p>
                </div>
                <div className='academy-btn mt-5' data-aos="zoom-in-up" data-aos-duration="1000">
                    <button className='lg:w-[200px] w-full hover:bg-[#3434ff] hover:text-[#fff] duration-500'>all courses</button>
                </div>
            </div>
            <div className='course-items lg:grid gap-6 grid-cols-3 mt-10'>
                <div className='course-item lg:mt-0 mt-5' data-aos="zoom-in-down" data-aos-duration="1000">
                    <img src={course1} alt="" />
                    <div className='px-4'>
                        <div className='py-10 text'>
                            <h2 className='text-3xl font-semibold mb-5'>Brand & Identity Design for Marketers</h2>
                            <p className='text-[18px] text-[#69697b]'>Lorem ipsum dolor sit amet, consectere adipiscing elit. Feugiat feugiat congue viverra facilisis.</p>
                        </div>
                        <div className='flex justify-between py-5'>
                            <div className='flex'>
                                <img className='mr-3' src={network1} alt="" />
                                <button className='font-semibold text-[18px]'>Beginner</button>
                            </div>
                            <div>
                                <span className='font-semibold text-[18px]'>$ 399.00 USD</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='course-item lg:mt-0 mt-5' data-aos="zoom-in-down" data-aos-duration="1000">
                    <img src={course2} alt="" />
                    <div className='px-4'>
                        <div className='py-10 text'>
                            <h2 className='text-3xl font-semibold mb-5'>Advanced Funnels with Google Analytics</h2>
                            <p className='text-[18px] text-[#69697b]'>Lorem ipsum dolor sit amet, consectere adipiscing elit. Feugiat feugiat congue viverra facilisis.</p>
                        </div>
                        <div className='flex justify-between py-5'>
                            <div className='flex'>
                                <img className='mr-3' src={network2} alt="" />
                                <button className='font-semibold text-[18px]'>Advanced</button>
                            </div>
                            <div>
                                <span className='font-semibold text-[18px]'>$ 399.00 USD</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='course-item lg:mt-0 mt-5' data-aos="zoom-in-down" data-aos-duration="1000">
                    <img src={course3} alt="" />
                    <div className='px-4'>
                        <div className='py-10 text'>
                            <h2 className='text-3xl font-semibold mb-5'>Landing Page A/B Testing & Conversion Optimization</h2>
                            <p className='text-[18px] text-[#69697b]'>Lorem ipsum dolor sit amet, consectere adipiscing elit. Feugiat feugiat congue viverra facilisis.</p>
                        </div>
                        <div className='flex justify-between py-5'>
                            <div className='flex'>
                                <img className='mr-3' src={network3} alt="" />
                                <button className='font-semibold text-[18px]'>Advanced</button>
                            </div>
                            <div>
                                <span className='font-semibold text-[18px]'>$ 399.00 USD</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurCourses;