import React from 'react';
import '../../App.css';

import HeroSection from '../HeroSection';
import Footer from '../Footer';
import CourseCard from '../../controller/CourseCard';

function Home() {
  return (
    <>
      <HeroSection />
      <CourseCard/>
      <Footer />
    </>
  );
}

export default Home;