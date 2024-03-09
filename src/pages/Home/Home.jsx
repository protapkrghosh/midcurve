import About from '@/components/Sections/About/About';
import Banner from '@/components/Sections/Banner/Banner';
import Fundamentals from '@/components/Sections/Fundamentals/Fundamentals';
import Tokenomics from '@/components/Sections/Tokenomics/Tokenomics';
import React from 'react';

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Fundamentals />
      <Tokenomics />
    </div>
  );
};

export default Home;
