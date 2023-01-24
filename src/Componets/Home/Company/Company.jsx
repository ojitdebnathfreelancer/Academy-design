import React from 'react';
import './Company.css';
import company1 from '../../../Assets/company1.svg';
import company2 from '../../../Assets/company2.svg';
import company3 from '../../../Assets/company3.svg';
import company4 from '../../../Assets/company4.svg';
import company5 from '../../../Assets/company5.svg';

const Company = () => {
    return (
        <div className='company lg:mt-24 mt-12 relative'>
            <div className='max-w-7xl mx-auto'>
                <h3 className='text-center' data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1000">OUR STUDENTS WORK IN COMPANIES SUCH AS</h3>
                <div className='lg:grid grid-cols-5 mt-12'>
                    <div className='flex justify-center lg:mt-0 mt-5' data-aos="fade-right" data-aos-duration="600">
                        <img src={company1} alt="" />
                    </div>
                    <div className='flex justify-center lg:mt-0 mt-5' data-aos="fade-right" data-aos-duration="700">
                        <img src={company2} alt="" />
                    </div>
                    <div className='flex justify-center lg:mt-0 mt-5' data-aos="fade-right" data-aos-duration="800">
                        <img src={company3} alt="" />
                    </div>
                    <div className='flex justify-center lg:mt-0 mt-5' data-aos="fade-right" data-aos-duration="900">
                        <img src={company4} alt="" />
                    </div>
                    <div className='flex justify-center lg:mt-0 mt-5' data-aos="fade-right" data-aos-duration="1000">
                        <img src={company5} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Company;