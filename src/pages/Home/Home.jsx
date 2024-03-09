import About from '@/components/Sections/About/About';
import Banner from '@/components/Sections/Banner/Banner';
import Buy from '@/components/Sections/Buy/Buy';
import Curve from '@/components/Sections/Curve/Curve';
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
      <Buy />
      <Curve />
    </div>
  );
};

export default Home;
