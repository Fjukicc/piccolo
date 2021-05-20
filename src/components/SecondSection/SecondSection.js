import React from 'react'
import styled from 'styled-components';
import {Container} from '../GlobalStyle';
import Menuizbor from '../../Slike/Menuizbor.jpg'

const SecondSection = () => {
    return (
        <>
            <SectionContainer>
                <SectionItemsContainer>
                    <PosebnaPonudaContainer>
                        <SlikaOnama src={Menuizbor} alt="slika"/>
                    </PosebnaPonudaContainer>
                    <OnamaContainer>
                        <OnamaNaslov>
                        <b>Tko smo mi?</b>
                        </OnamaNaslov>
                            <OnamaText>
                                <b>Piccolo</b> je mali kafic u sredistu <b>Vrbana III</b>, sa tradicijom od vec 
                                <b> 10 godina.</b> <br/>Nudimo ekskluzivne <b>craft pive</b> i odlicnu <b>kavu!</b><br/>
                                <b> Posjeti nas i uzivaj!!!  :)</b> <br/><br/>
                                <b>Radno vrijeme: od 8:00h do 22:00h.</b>
                            </OnamaText>
                            <KakoDoNas target="_newblank"
                    href="http://maps.google.com/?q=1200  1200  Piccolo, Palinovečka ulica, Zagreb">
                                <b>Saznaj Kako Do Nas?</b>
                            </KakoDoNas>
                    </OnamaContainer>
                </SectionItemsContainer>
            </SectionContainer>
        </>
    )
}

const SectionContainer = styled(Container)`
    padding: 20px 0px;
    height: 600px;
    background-color: black;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 1100px) {
        height: auto;
        padding: 0px;
    }
    ${Container}
`
const SectionItemsContainer = styled.div`
    margin-top: 15px;
    margin-bottom: 15px;
    display: flex;
    width: 97%;
    height: 100%;
    @media only screen and (max-width: 1100px) {
        flex-direction: column-reverse;
        align-items: center;
        width: 100%;
        margin: 5px 0px;
    }
`;


const OnamaContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 72%;
    border-radius: 25px;
    color: white;
    padding: 20px;
    height: auto;
    @media only screen and (max-width: 1100px) {
        padding: 0px;
        width: 90%;
        margin-top: 20px;
        margin-bottom: 20px;
        height: auto;
    }
`

const OnamaNaslov = styled.p`
    font-weight: 500;
    font-size: 3rem;
    width: auto;
    color: #FBF5F3;
    height: auto;
    margin-top: 0px;
    @media only screen and (max-width: 1100px) {
        margin-top: 20px;
        border-bottom: 2px solid black;
        font-size: 2.6rem;
    }
`

const OnamaText = styled.div`
    padding: 10px;
    margin-top: 10px;
    margin-left: 20px;
    display: block;
    font-size: 2rem;
    font-weight: 400;
    width: 100%;
    height: auto;
    @media only screen and (max-width: 1100px) {
        font-size: 1.8rem;
    }
`

const KakoDoNas = styled.a`
    font-size: 1.6rem;
    font-weight: 200;
    align-self: flex-start;
    margin-top: 15px;
    margin-left: 20px;
    text-decoration: none;
    border: 2px solid transparent;
    padding: 15px;
    cursor: pointer;
    background: white;
    color: black;
    opacity: 0.85;
    transition: 0.5s ease-in-out;
    &:hover{
        color: red;
    }
    @media only screen and (max-width: 1100px) {
        align-self: center;
        margin-left: 0px;
        margin-top: 10px;
        margin-bottom: 30px;
    }

`

const PosebnaPonudaContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    border: 2px solid transparent;
    width: 28%;
    background-color: transparent;
    height: auto;
    margin-right: 5vh;
    @media only screen and (max-width: 1100px) {
       display: none;
    }
`

const SlikaOnama = styled.img`
    background-color: black;
    z-index: 1;
    max-width: 100%;
    max-height:100%;
    object-fit: contain; 
`


export default SecondSection;
