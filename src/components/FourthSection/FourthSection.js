import React from 'react';
import styled from 'styled-components';
import {Container} from '../GlobalStyle';
import SlikaDogadaj from '../../Slike/dogadaji.png'

const FourthSection = () => {
  return (
    <>
      <SectionContainer>
        <SectionItemsContainer>
          <DogadajiContainer>
            <NaslovText>Dogadaji :)</NaslovText>
            <DogadajiTextContainer>
                -Trenutno nema <br/> događaja
            </DogadajiTextContainer>
          </DogadajiContainer>
          <SlikaContainer>
              <SlikaDogadaji src={SlikaDogadaj} alt="slika"/>
          </SlikaContainer>
        </SectionItemsContainer>
      </SectionContainer>
    </>
  );
};

const SectionContainer = styled(Container)`
  background-color: black;
  display: flex;
  justify-content: center;
  color: white;
  height: 500px;
  @media only screen and (max-width: 1100px) {
      height: auto;
      padding: 20px 0px;
      background-color: #FBF5F3;
  }
  ${Container}
`;



const SectionItemsContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
  align-items: center;
  width: 97%;
  padding: 20px 0px;
  height: 100%;
  @media only screen and (max-width: 1100px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0px 0px;
    margin-top: 0px;
  }
`;

const DogadajiContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  border: 6px solid white;
  height: 80%;
  @media only screen and (max-width: 1100px) {
    width: 100%;
    margin: 0;
    border: none;
    margin-top: 50px;
    height: auto;
  }
`;

const SlikaContainer = styled.div`
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

const NaslovText = styled.div`
  width: 100%;
  font-weight: 700;
  font-size: 3.2rem;
  color: #FBF5F3;
  display: flex;
  margin-bottom: 40px;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 1100px) {
    font-size: 2.5rem;
    color: black;
  }
`;

const DogadajiTextContainer = styled.div`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
    flex-direction: row;
    font-size: 2rem;
     @media only screen and (max-width: 1100px) {
       margin-top: 20px;
       font-size: 1.9rem;
       color: black;
       margin-bottom: 30px;
  }
`;

const SlikaDogadaji = styled.img`
    background-color: black;
    z-index: 1;
    max-width: 100%;
    max-height:100%;
    object-fit: contain; 
`

export default FourthSection;
