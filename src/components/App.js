import React from 'react';
import GlobalStyle from './GlobalStyle';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import ScrollToTop from 'react-scroll-to-top';
import {MdArrowUpward} from 'react-icons/md';
import SectionOne from './FirstSection/SectionOne';
import SecondSection from './SecondSection/SecondSection';
import ThirdSection from './ThirdSection/ThirdSection';
import FourthSection from './FourthSection/FourthSection';
import Footer from './Footer/Footer';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Navbar />
      <div id="galerija">
        <SectionOne />
      </div>
      <div id="onama">
        <SecondSection />
      </div>
      <div id="kontakt">
        <ThirdSection />
      </div>
      <div id="dogadaji">
        <FourthSection />
      </div>
      <Footer/>

      <ScrollToTop smooth component={<MdArrowUpward />} />
    </>
  );
};

export default App;
