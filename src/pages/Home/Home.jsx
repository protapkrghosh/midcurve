import About from '@/components/Sections/About/About';
import Banner from '@/components/Sections/Banner/Banner';
import Fundamentals from '@/components/Sections/Fundamentals/Fundamentals';
import React from 'react';

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Fundamentals />
    </div>
  );
};

export default Home;
