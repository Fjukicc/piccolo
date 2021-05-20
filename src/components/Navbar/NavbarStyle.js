import styled from 'styled-components';
import {Container} from '../GlobalStyle';
import {Link} from 'react-scroll'

export const NavbarContainer = styled(Container)`
    height: 70px;
    z-index: 10000;
    z-index: 9999;
    justify-content: center;
    position: sticky;
    top: 0;
    align-items: center;
    background-color: black;
    ${Container}
`

export const NavbarElementsContainer = styled.div`
    width: 97%;
    height: 85%;
    background-color: transparent;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media only screen and (max-width: 1100px) {
        justify-content: flex-start;
        align-items: center;
    }
`

export const LogoText = styled.div`
    font-weight: 600;
    font-size: 2.2rem;
    color: white;
    transition: 0.3s ease-in-out;
    border-radius: 25px;
    border: 2px solid transparent;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    @media only screen and (max-width: 1100px) {
        font-size: 1.7rem;
        width: 90%;
        margin-top: 10px;

    }
`
export const HamburgerMenu = styled.div`
    display: none;
    z-index: 9999;
    @media only screen and (max-width: 1100px) {
        display: flex;
        justify-content: center;
        color: ${({click})=> click ? 'black': 'white'};
        align-items: center;
        font-size: 2rem;
        position: absolute;
        top: 17px;
        right: 15px;
    }
`


export const NavbarButtonsContainer = styled.div`
    background-color: transparent;
    color: white;
    width: 60%;
    z-index: 9998;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    @media only screen and (max-width: 1100px) {
        display: none;
    }
`

export const NavbarButton = styled(Link)`
    font-weight: 200;
    font-size: 1.5rem;
    cursor: pointer;
    padding:0.2rem 20px;
    transition: 0.2s ease-in-out;
    &:hover{
        color: red;
    }
`

