import React from 'react';
import { LogoLink } from './LogoElements';
import { animateScroll as scroll } from 'react-scroll';


const Logo = ({
    primary
}) => {


    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <LogoLink primary={primary? true : false} to='/' onClick={toggleHome}>
            Logo
        </LogoLink>
    )
}

export default Logo;

