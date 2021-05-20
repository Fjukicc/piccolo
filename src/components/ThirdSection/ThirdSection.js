import React from 'react';
import MenuPdf from '../../Slike/menu.pdf'
import styled from 'styled-components';
import {Container} from '../GlobalStyle';
import {FiPhoneCall} from 'react-icons/fi';
import {HiDownload} from 'react-icons/hi'
import Slika from '../../Slike/et.png'

const ThirdSection = () => {
  const openPdf = () =>{
    window.open(MenuPdf, "_blank");
  }
  return (
    <>
      <ThirdSectionContainer>
        <ThirdSectionContentContainer>
          <KontaktContainer>
              <KontaktHeader>
                  Kontaktiraj nas!
              </KontaktHeader>
              <KontaktTextContainer>
                   <KontaktBodyText>
                            Za sve <b>informacije</b> nazovite nas na<br/> <b>Broj</b> ili kliknite na <b>Tipku</b> <br/> 
                   </KontaktBodyText>
                   <KontaktButton href='tel:+3850995062435'><Icon/><b>099 406 2435</b></KontaktButton>
              </KontaktTextContainer>
              <KontaktFooter>
                  Caffe bar PICCOLO
              </KontaktFooter>
          </KontaktContainer>
          <CjenikContainer>
              <SlikaOnama src={Slika} alt="slika"/>
              <ButtonNaSlici onClick={openPdf}>
                  <b>Cjenik</b>
                  <IconDownload/>
              </ButtonNaSlici>
          </CjenikContainer>
        </ThirdSectionContentContainer>
      </ThirdSectionContainer>
    </>
  );
};

const Icon = styled(FiPhoneCall)`
    margin-right: 10px;
    color: black;
`

const ThirdSectionContainer = styled(Container)`
  padding: 10px 0px;
  flex: 1;
  justify-content: center;
  align-items: center;
    height: auto;
  ${Container}
`;

const ThirdSectionContentContainer = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  width: 97%;
  height: 100%;
  @media only screen and (max-width: 1100px) {
    flex-direction: column-reverse;
    align-items: center;
    width: 100%;
    margin: 5px 0px;
  }
`;

const KontaktContainer = styled.div`
  width: 53%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  justify-content: flex-start;

  @media only screen and (max-width: 1100px) {
    width: 100%;
    height: auto;
  }
`;

const KontaktFooter = styled.div`
    font-size: 2.6rem;
    font-weight: 500;
    margin-bottom: 40px;
    @media only screen and (max-width: 1100px) {
    margin: 0;
    font-size: 2rem;
  }
`

const KontaktHeader = styled.div`
  font-size: 3rem;
  font-weight: 700;
  margin-top: 10px;
  text-align: center;
`;

const KontaktTextContainer = styled.div`
    margin: 20px 10px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`

const KontaktBodyText = styled.div`
    font-size: 2rem;
    text-align: center;
`
const KontaktButton = styled.a`
    margin-top: 30px;
    border-radius: 90px;
    color: black;
    text-decoration: none;
    display: flex;
    padding: 20px;
    font-size: 1.5rem;
    border: 4px solid #5cdb5c;
    text-align: center;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    &:hover{
        background-color: #5cdb5c;
        border: 4px solid transparent;
    }
`


const CjenikContainer = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 1100px) {
    width: 100%;
    height: auto;
  }
`;

const ButtonNaSlici = styled.div`
    position: absolute;
    font-size: 1.6rem;
    font-weight: 200;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid transparent;
    background-color: black;
    color: white;
    opacity: 0.85;
    padding: 10px 20px;
    cursor: pointer;
    z-index: 110;
    transition: 0.5s ease-in-out;
    &:hover{
        color: red;
    }
    @media only screen and (max-width: 1100px) {
        font-size: 1.2rem;
    }
`

const IconDownload = styled(HiDownload)`
  font-size: 2rem;
  margin-left: 5px;
  @media only screen and (max-width: 1100px) {
        font-size: 1.6rem;
    }
`

const SlikaOnama = styled.img`
    background-color: black;
    z-index: 1;
    max-width: 100%;
    max-height:100%;
    object-fit: contain; 
`

export default ThirdSection;
