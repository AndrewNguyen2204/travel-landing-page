import React, {useState} from 'react'
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import HeroSection from '../../components/HeroSection';
import { HeroContent, ServicesContent,DestinationsContent,AboutContent, FeedbackContent,BookingContent } from './DATA';
import ServicesSection from '../../components/ServicesSection';
import DestinationsSection from '../../components/DestinationsSection';
import AboutSection from '../../components/AboutSection';
import FeedbackSection from '../../components/FeedbackSection';
import BookingSection from '../../components/BookingSection';




const Home = () => {
    
    const [isOpen,setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };


    
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection {...HeroContent}/>
            <ServicesSection {...ServicesContent}/>
            <DestinationsSection {...DestinationsContent}/>
            <AboutSection {...AboutContent}/>
            <FeedbackSection {...FeedbackContent}/>
            <BookingSection {...BookingContent}/>
        </>
    )
}

export default Home;
