import React from 'react';
import './Path.css';
import path1 from '../../../Assets/path1.svg';
import path2 from '../../../Assets/path2.svg';
import path3 from '../../../Assets/path2.svg';

const Path = () => {
    return (
        <div className='max-w-7xl mx-auto my-24 px-5'>
            <div className='path-header' data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1000">
                <h1 className='text-center text-5xl font-semibold mb-5'>Choose Your Path</h1>
                <p className='text-[18px] text-[#69697b] text-center lg:px-[320px]'>Choose how would you like to learn on Academy. You can study full or part-time in our local programs, or remotely with our online courses.</p>
            </div>
            <div className='path-items lg:grid gap-6 grid-cols-3'>
                <div className='path-item' data-aos="fade-right" data-aos-duration="800">
                    <div className='flex justify-center'>
                        <img src={path1} alt="" />
                    </div>
                    <h1 className='text-center text-3xl font-semibold'>Full-Time</h1>
                    <p className='text-center text-[18px] text-[#69697b] px-[20px] my-5'>Lorem ipsum dolor sit amet, consectere adipiscing elit. Feugiat feugiat congue viverra facilisis lorem ipsum.</p>
                    <div className='academy-btn mt-5 text-center'>
                        <button className='lg:w-[150px] w-full hover:bg-[#3434ff] hover:text-[#fff] duration-500'>learn more</button>
                    </div>
                </div>
                <div className='path-item' data-aos="fade-right" data-aos-duration="900">
                    <div className='flex justify-center'>
                        <img src={path2} alt="" />
                    </div>
                    <h1 className='text-center text-3xl font-semibold'>Part-Time</h1>
                    <p className='text-center text-[18px] text-[#69697b] px-[20px] my-5'>Lorem ipsum dolor sit amet, consectere adipiscing elit. Feugiat feugiat congue viverra facilisis lorem ipsum.</p>
                    <div className='academy-btn mt-5 text-center'>
                        <button className='lg:w-[150px] w-full hover:bg-[#3434ff] hover:text-[#fff] duration-500'>learn more</button>
                    </div>
                </div>
                <div className='path-item' data-aos="fade-right" data-aos-duration="1000">
                    <div className='flex justify-center'>
                        <img src={path3} alt="" />
                    </div>
                    <h1 className='text-center text-3xl font-semibold'>Online</h1>
                    <p className='text-center text-[18px] text-[#69697b] px-[20px] my-5'>Lorem ipsum dolor sit amet, consectere adipiscing elit. Feugiat feugiat congue viverra facilisis lorem ipsum.</p>
                    <div className='academy-btn mt-5 text-center'>
                        <button className='lg:w-[150px] w-full hover:bg-[#3434ff] hover:text-[#fff] duration-500'>learn more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Path;