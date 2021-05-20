import React from 'react';
import styled from 'styled-components';
import {Container} from '../GlobalStyle';
import {FaFacebookSquare} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';

const Footer = () => {
  return (
    <>
      <SectionContainer>
        <ItemsSectionContainer>
          <LogoContainer>
            <LogoTextFooter>Caffe bar Piccolo</LogoTextFooter>
            <CopyrightsText>
              Copyrights @ 2020 All rights reserved. Caffe bar PICCOLO
            </CopyrightsText>
          </LogoContainer>
          <SredinaContainer>
            <IkoneContainer>
              <IkonaInstagramContainer>
                <IkonaInstagram />
              </IkonaInstagramContainer>
              <IkonaFacebookContainer target="_newblank" href="https://www.facebook.com/PiccoloVrbani">
                <IkonaFacebook />
              </IkonaFacebookContainer>
            </IkoneContainer>
            <KontaktContainer>
                <p><b>Mobitel: </b> 099 406 2435</p>
                <p><b>Mail: </b> piccolo@gmail.com</p>
            </KontaktContainer>
          </SredinaContainer>
          <RadnoVrijemeContainer>
              <RadnoVrijemeText>
                  <b>Radno Vrijeme:</b> <br/>
                  Svaki dan od 8:00 do 22:00 
              </RadnoVrijemeText>
          </RadnoVrijemeContainer>
        </ItemsSectionContainer>
      </SectionContainer>
    </>
  );
};

const SectionContainer = styled(Container)`
  background-color: black;
  border-top: 7px solid white;
  padding-top: 10px;
  height: 270px;
  @media only screen and (max-width: 1100px) {
    height: auto;
  }
  ${Container}
`;

const ItemsSectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  @media only screen and (max-width: 1100px) {
    flex-direction: column-reverse;
  }
`;
//Prvi dio
const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  justify-content: center;
  width: 33%;
  @media only screen and (max-width: 1100px) {
    height: auto;
    width: 100%;
    margin: 20px 0px;
  }
`;

const LogoTextFooter = styled.div`
  font-size: 2.4rem;
  margin-bottom: 10px;
  font-weight: 600;
`;
const CopyrightsText = styled.div`
  font-size: 10px;
`;

//Drugi dio
const SredinaContainer = styled.div`
  display: flex;
  width: 34%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 1100px) {
    height: auto;
    width: 100%;
    margin: 20px 0px;
  }
`;

const IkoneContainer = styled.div`
  width: 100%;
  color: white;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  @media only screen and (max-width: 1100px) {
    justify-content: center;
  }
`;

const KontaktContainer = styled.div`
    font-size: 1rem;
    display:flex;
    color: white;
    font-size: 300;
    flex-direction: column;
    justify-content: center;
`;

const IkonaInstagramContainer = styled.a`
`;

const IkonaFacebookContainer = styled.a`
    color: white;
`;

const IkonaInstagram = styled(FiInstagram)`
  margin: 0px 15px;
  font-size: 3rem;
  @media only screen and (max-width: 1100px) {
    margin: 0px 20px;
  }
`;

const IkonaFacebook = styled(FaFacebookSquare)`
  margin: 0px 25px;
  font-size: 3rem;
  @media only screen and (max-width: 1100px) {
    margin: 0px 20px;
  }
`;

//Treci dio
const RadnoVrijemeContainer = styled.div`
  display: flex;
  width: 33%;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 1100px) {
    height: auto;
    width: 100%;
    margin: 20px 0px;
  }
`;

const RadnoVrijemeText = styled.div`
    font-size: 1.6rem;
    color: white;
    text-align: center;
    font-weight: 400;
    @media only screen and (max-width: 1100px) {
    font-size: 1.3rem;
  }
`

export default Footer;
