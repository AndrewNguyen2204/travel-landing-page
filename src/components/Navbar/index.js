import React, {useState, useEffect} from 'react';
import { FaBars } from 'react-icons/fa';
import Logo from '../Logo';
import { MobileIcon, Nav, NavbarContainer, NavItem, NavMenu, NavLinks, NavBtn, NavBtnLink } from './NavBarElements';





const Navbar = ({ toggle }) => {

    const [scrollMode, setScrollMode] = useState(false);

    const changeMode = () => {
        if(window.scrollY >= 80) {
            setScrollMode(true);
        }else {
            setScrollMode(false);
        }
    };


    useEffect(() =>{
        window.addEventListener('scroll', changeMode);
    },[]);



    return (
        <>
            <Nav scrollMode={scrollMode}>
                <NavbarContainer>
                    <Logo to="/" primary/>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks 
                            to="about"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            >
                                About
                            </NavLinks>
                        </NavItem>
                        
                        <NavItem>
                            <NavLinks 
                            to="services"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            >
                                Services
                            </NavLinks>
                        </NavItem>
                       <NavItem>
                            <NavLinks 
                            to="contact"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            >
                                Contact
                            </NavLinks>
                        </NavItem>

                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/signup'>Sign Up</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;
