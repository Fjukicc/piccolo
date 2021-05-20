import React from 'react';
import styled from 'styled-components';
import {Container} from '../GlobalStyle';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import slikaLokal from '../../Slike/slikalokal.jpg';
import slikaMenu from '../../Slike/slikamenu.jpg';
import slikaSank from '../../Slike/slikasank.jpg';
import slikaSok from '../../Slike/slikasok.jpg';
import ponudaslika from '../../Slike/Ponuda.png';
import {Modal, useModal, ModalTransition} from 'react-simple-hook-modal';
import 'react-simple-hook-modal/dist/styles.css';

const SectionOne = () => {
  const images = [
    {src: slikaLokal},
    {src: slikaMenu},
    {src: slikaSank},
    {src: slikaSok},
  ];
  const {isModalOpen, openModal, closeModal} = useModal();

  return (
    <>
      <SectionContainer>
        <SectionItemsContainer>
          <GalleryContainer>
            <Carousel
              images={images}
              hasSizeButton={false}
              hasMediaButton={false}
              hasThumbnails={false}
              hasIndexBoard={false}
              isAutoPlaying={true}
              canAutoPlay={true}
              autoPlayInterval={3000}
              hasRightButton={false}
              hasLeftButton={false}
            />
          </GalleryContainer>
          <AkcijeContainer>
            <Img src={ponudaslika} alt="slika" />
            <PosebnaPonudaContainer>
              <br />
              Saznaj o našim <br />
              <b>akcijama</b>
              <PosebnaPonudaButton onClick={openModal}>
                Dostupne Akcije :)
              </PosebnaPonudaButton>
              <Modal
                isOpen={isModalOpen}
                transition={ModalTransition.BOTTOM_UP}
              >
                <ModalClose onClick={closeModal}>Close</ModalClose>
                <ModalTextContainer>
                <ModalHeader>
                    Akcije
                </ModalHeader>
                <ModalText>
                {
                    dataModal.map((podatak, id)=>{
                        const {akcija, novac} = podatak;
                        return (
                            <ModalRow key={id}>
                                {akcija}  <b>{novac}</b>
                            </ModalRow>
                        )
                    })
                }
                </ModalText>
                </ModalTextContainer>
              </Modal>
            </PosebnaPonudaContainer>
          </AkcijeContainer>
        </SectionItemsContainer>
      </SectionContainer>
    </>
  );
};

const dataModal = [{
    akcija: 'Kava + cedevita',
    novac: '18kn',
},
{
    akcija : 'Kave od 8h do 10h',
    novac: '9kn'
},
{
    akcija: 'Staropramen',
    novac: '13kn',
},
{
    akcija: 'Corona',
    novac: '15kn',
}]

const ModalRow = styled.div`
    display: flex;
    width: 100%;
    align-items: flex-start;
    justify-content: space-between;
    font-size: 1.4rem;
    margin: 15px 0px;
`

const ModalClose = styled.button`
    border: 1px solid black;
    background-color: transparent;
    padding: 5px 8px;
    font-size: 1.6rem;
    font-weight: 200;

`

const ModalTextContainer = styled.div`
    display: flex;
    margin-top: 10px;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    border-top: 1px solid black;
`

const ModalText = styled.div`
    font-size: 1.8rem;
    width: 100%;
    
`

const ModalHeader = styled.div`
    margin-top: 10px;
    font-size: 2.2rem;
    font-weight: 500;
`

const SectionContainer = styled(Container)`
  padding: 0px 0px;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #FBF5F3;
  @media only screen and (max-width: 1100px) {
    padding: 0;
  }
  ${Container}
`;

const SectionItemsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;
const GalleryContainer = styled.div`
  width: 73%;
  height: 100%;
  display: flex;
  padding: 0px;
  background-color: transparent;
  @media only screen and (max-width: 1100px) {
    padding: 0px 0px;
    background-color: #fbf5f3;
    border-radius: 0;
    height: 65vh;
    border: none;
    width: 100%;
  }
`;

const PosebnaPonudaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
  font-size: 2.2rem;
  @media only screen and (max-width: 1100px) {
    display: flex;
    font-size: 2.2rem;
    font-weight: 400;
    border-top: 1px solid black;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
  }
`;

const PosebnaPonudaButton = styled.div`
  display: block;
  border: 3px solid black;
  padding: 15px;
  cursor: pointer;
  margin-top: 40px;
  background-color: black;
  color: white;
  font-size: 1.5rem;
  transition: 0.5s ease-in-out;
  font-weight: 700;
  &:hover{
    color: red;
  }
  @media only screen and (max-width: 1100px) {
    margin-top: 40px;
    display: block;
    border: 3px solid black;
    background-color: transparent;
    color: black;
    padding: 15px;
    font-weight: 700;
    font-size: 1.4rem;
  }
`;

const AkcijeContainer = styled.div`
  width: 27%;
  border-radius: 25px;
  padding: 20px;
  background-color: transparent;
  border: 1px solid transparent;
  height: 100%;
  margin-left: 5vh;
  @media only screen and (max-width: 1100px) {
    margin-top: 10px;
    margin-left: 0px;
    height: auto;
    border-top: 2px solid transparent;
    background-color: transparent;
    width: 97%;
  }
`;

const Img = styled.img`
  display: none;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  @media only screen and (max-width: 1100px) {
    display: none;
  }
`;

export default SectionOne;
