import Container from '@/components/Sections/Container/Container';
import Footer from '@/shared/Footer/Footer';
import NavBar from '@/shared/NavBar/NavBar';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <Container>
        <NavBar />
        <Outlet />
        <Footer />
      </Container>
    </div>
  );
};

export default Main;