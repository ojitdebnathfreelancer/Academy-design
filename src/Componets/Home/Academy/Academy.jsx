import React from 'react';
import './Academy.css';
import photo2 from '../../../Assets/photo2.jpg';

const Academy = () => {
    return (
        <div className='flex lg:flex-row lg:justify-between flex-col-reverse max-w-7xl mx-auto lg:py-28 py-12 px-5 academy'>
            <div className='lg:w-[60%] w-full academy-img-container lg:mt-0 mt-10'>
                <img src={photo2} alt="photo2" />
            </div>
            <div className='lg:w-[35%] w-full lg:flex items-center'>
                <div>
                    <h2 className='font-semibold lg:text-5xl text-3xl'>About Academy</h2>
                    <p className='text-[18px] my-10 text-[#69697b]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat feugiat congue viverra facilisis. Mauris, volutpat mi libero tellus donec amet netus.</p>
                    <p className='text-[18px] text-[#69697b]'>Sapien magna purus, maecenas arcu, enim pretium. Tempor sit amet nunc sit amet in ac.</p>
                    <div className='academy-btn mt-5'>
                        <button className='lg:w-[150px] w-full  hover:bg-[#3434ff] hover:text-[#fff] duration-500'>learn more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Academy;