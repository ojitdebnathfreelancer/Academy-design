import React from 'react';
import banner from '../../../Assets/our-course.jpg';
import './OurCourseBanner.css';
import course1 from '../../../Assets/our-course1.svg';
import course2 from '../../../Assets/our-course2.svg';
import course3 from '../../../Assets/our-course3.svg';

const OurCourseBanner = () => {
    return (
        <div className='bg-[#3434ff] lg:py-24 py-12 px-5 relative z-[1] overflow-hidden' data-aos="fade-up" data-aos-duration="800">
            <div className='max-w-7xl mx-auto lg:flex justify-between'>
                <div className='our-course-text lg:w-[50%] text-white' data-aos="zoom-in" data-aos-duration="1000">
                    <h2 className='font-bold lg:text-[40px] text-[26px]'>Academy helped me to learn the skills to land my dream job.</h2>
                    <p className='text-[18px] text-[#f8f8f8] my-5 lg:pr-[85px]'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio quisque integer elementum egestas aliquet tincidunt. Nunc mauris enim tortor libero viverra aenean. Portitor semper facilisi velit.”</p>
                    <p className='text-[21px] my-10'><span className='font-bold'>Daniel Carter</span> - Developer at Webflow</p>
                    <div className='course-btn'>
                        <button className='lg:w-[150px] w-full bg-white text-[#3434ff] duration-500 uppercase font-semibold lg:mb-0 mb-10'>Our Courses</button>
                    </div>
                </div>
                <div className='our-course-photo lg:w-[44%]' data-aos="zoom-in" data-aos-duration="1000">
                    <img className='lg:h-[385px] h-[250px] rounded-2xl' src={banner} alt="" />
                </div>
            </div>
            <img className='absolute top-[30%] left-[-10%] z-[-1] lg:block hidden' src={course1} alt="course1" />
            <img className='absolute top-[55%] left-[50%] z-[-1] lg:block hidden' src={course2} alt="course1" />
            <img className='absolute top-[-3%] left-[80%] z-[-1] lg:block hidden' src={course3} alt="course1" />
            <img className='absolute top-[75%] left-[82%] z-[-1] lg:block hidden' src={course3} alt="course1" />
        </div>
    );
};

export default OurCourseBanner;