import React from 'react';
import Academy from '../Academy/Academy';
import Company from '../Company/Company';
import LearingWithUs from '../LearingWithUs/LearingWithUs';
import Navbar from '../Navbar/Navbar';
import OurCourseBanner from '../OurCourseBanner/OurCourseBanner';
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
            <OurCourseBanner></OurCourseBanner>
            <LearingWithUs></LearingWithUs>
        </div>
    );
};

export default Home;