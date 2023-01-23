import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../../Assets/logo.svg';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    console.log(openMenu)
    return (
        <div className='main-navbar flex justify-between items-center lg:px-0 px-5 lg:mt-5 mt-0 max-w-7xl mx-auto'>
            <div className='flex items-center'>
                <div className='lg:mr-10 mr-5'>
                    <a href='/'>
                        <img src={logo} alt="" />
                    </a>
                </div>
                <ul className={`lg:flex menu-ul ${openMenu ? 'md:block block absolute top-12 right-0 bg-gray-800 text-white' : 'md:hidden hidden'}`}>
                    <li><a className='active'>Home</a></li>
                    <li><a className='flex items-center'>Pages <span><MdOutlineKeyboardArrowDown size={25} /></span></a></li>
                    <li><a>Courses</a></li>
                    <li><a>About</a></li>
                </ul>
            </div>
            <div className='flex items-center'>
                <div className='flex items-center lg:mr-10 mr-5'>
                    <div>
                        <button>
                            <AiOutlineShoppingCart size={25} />
                        </button>
                    </div>
                    <div className='lg:ml-5 ml-2'>
                        <button>
                            <FaUserCircle size={25} />
                        </button>
                    </div>
                </div>
                <div className='course-btn-container lg:block md:hidden hidden'>
                    <button className='btn'>Courses</button>
                </div>
                <div className='lg:hidden block'>
                    <GiHamburgerMenu size={25} onClick={() => setOpenMenu(!openMenu)} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;