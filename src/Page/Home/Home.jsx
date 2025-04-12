import React from 'react';
import Hero from './HomeComponents/Hero';
import Skills from '../Skills/Skills';
import ProjectsCard from '../My Projects/ProjectsCard';
import Client from '../Client/Client';
import Pricing from '../Pricing/Pricing';
import ContactMe from '../Contact Me/ContactMe';
// ✅ import the image

const Home = () => {
    return (
        <div>
            <div className='my-7'><Hero /></div>
            <Skills />
            <ProjectsCard />
            <Client />
            <Pricing />
            <ContactMe />
        </div>
    );
};

export default Home;
