import React from 'react';
import '../../App.css';

import HeroSection from '../HeroSection';
import Footer from '../Footer';
import CourseCard from '../../controller/CourseCard';
import CourseSearch from '../CourseSearch';
import CardFinal from '../../controller/CardFinal';
import { render } from '@testing-library/react';
import { Container } from '@material-ui/core';

// function Home() {
//   return (
//     <>

//       <HeroSection />
//       <CourseSearch/>
//       <CardFinal/>
//       <Footer />
//     </>
//   );
// }

// export default Home;

class Home extends React.Component {
  render() {
    return(
      <Container>
        <div>
            <HeroSection />
            </div>
            <div>
            <CourseSearch/>
            </div>
            <div>
            <CardFinal/>
            </div>
            <div>
            <Footer />
            </div>
      </Container>
    );
  }
}
export default Home;