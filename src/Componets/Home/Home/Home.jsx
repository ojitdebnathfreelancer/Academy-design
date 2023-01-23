import React from 'react';
import Academy from '../Academy/Academy';
import Company from '../Company/Company';
import Navbar from '../Navbar/Navbar';
import OurCourses from '../OurCourses/OurCourses';
import Path from '../Path/Path';
import Skill from '../Skill/Skill';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Skill></Skill>
            <Company></Company>
            <Academy></Academy>
            <OurCourses></OurCourses>
            <Path></Path>
        </div>
    );
};

export default Home;