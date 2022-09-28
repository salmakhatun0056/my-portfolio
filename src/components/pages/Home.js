import React from 'react';
import Landing from './Landing';
import Project from './Project';
import Contact from './Contact';

const Home = () => {
    return (
        <div style={{ background: '#091214' }}>
            <Landing></Landing>
            <Project></Project>
            <Contact></Contact>
        </div>
    );
};

export default Home;