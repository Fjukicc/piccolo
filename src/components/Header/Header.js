import React from 'react'
import styled from 'styled-components';
import {Container} from '../GlobalStyle';

const Header = () => {
    return (
        <>
            <HeaderContainer>
                <HeaderTextContainer>
                    <AdressText target="_newblank"
                    href="http://maps.google.com/?q=1200  1200  Piccolo, Palinovečka ulica, Zagreb">
                        KLIKNI ZA LOKACIJU
                    </AdressText>
                    <RadnoVrijemeText>
                        SVAKIM DANOM OD 8h do 22h
                    </RadnoVrijemeText>
                </HeaderTextContainer>
            </HeaderContainer>
        </>
    )
}

const HeaderContainer = styled(Container)`
    height: 40px;
    background-color: white;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 1100px) {
        height: 40px;
    }
${Container}
`

const HeaderTextContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 60%;
    height: 60%;
    font-size: 0.8rem;
    color: red;
    @media only screen and (max-width: 900px) {
        font-size: 0.5rem;
        width: 90%;
        margin-top: 10px;
    }
`

const AdressText = styled.a`
    font-weight: 300;
    color: red;
    text-decoration: none;
    padding: 0.3rem;
    cursor: pointer;
    transition: 0.6s ease-in-out;
`

const RadnoVrijemeText = styled.div`
    font-weight: 500;
    padding: 0.2rem;
`





export default Header;
