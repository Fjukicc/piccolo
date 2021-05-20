import React from 'react'
import {NavbarContainer, NavbarElementsContainer, LogoText, NavbarButtonsContainer, NavbarButton} from './NavbarStyle';

const Navbar = ({howMuchScrolled}) => {
    //const [clickMobileMenu, setClickMobileMenu] = useState(false);
    //console.log(clickMobileMenu);


    return (
        <>
            <NavbarContainer>
                <NavbarElementsContainer>
                    <LogoText>Caffe bar Piccolo</LogoText>
                    <NavbarButtonsContainer>
                        <NavbarButton activeClass="active"  to="galerija" spy={true} smooth={true} offset={-50} >
                            Galerija
                        </NavbarButton>
                        <NavbarButton to="onama" spy={true} smooth={true} offset={-200}> 
                            O nama
                        </NavbarButton>
                        <NavbarButton to="kontakt" spy={true} smooth={true} offset={-200}>
                            Cjenik
                        </NavbarButton>
                        <NavbarButton to="kontakt" spy={true} smooth={true} offset={-100}>
                            Kontakt
                        </NavbarButton>
                        <NavbarButton to="dogadaji" spy={true} smooth={true} offset={-200}>
                            Događaji
                        </NavbarButton>
                    </NavbarButtonsContainer>
                </NavbarElementsContainer>
            </NavbarContainer>
        </>
    )
}

export default Navbar;
