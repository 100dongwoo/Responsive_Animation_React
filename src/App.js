import React, { useState } from 'react';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyle';
import Hero from './components/Hero';
import { SliderData } from './data/SliderData';
import Dropdown from './components/Dropdown';
import InforSection from './components/InforSection';
import { InfoData } from './data/InfoData';

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <GlobalStyle />
            <Navbar toggle={toggle} />
            <Dropdown isOpen={isOpen} toggle={toggle} />
            <Hero slides={SliderData} />
            <InforSection {...InfoData} />
        </>
    );
}

export default App;
