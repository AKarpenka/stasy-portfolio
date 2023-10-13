import './App.scss';
import { useState, useEffect } from 'react';
import Header from '../components/header/header';
import About from '../components/about/about';
import Technologies from '../components/technologies/technologies';
import Portfolio from '../components/portfolio/portfolio';
import Experience from '../components/experience/experience';
import Education from '../components/education/education';
import EducationCertificates from '../components/educationCertificates/educationCertificates';
import Contacts from '../components/contacts/contacts';
import ScrollUpBtn from '../components/scrollUpBtn/scrollUpBtn';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  return (
    <div className="App">
      <Header />
      <About />
      <Technologies />
      <Portfolio />
      <Experience />
      <Education />
      <EducationCertificates />
      <Contacts />
      {/* hobby */}
      <footer>Developed by Anastasiya Karpenka ©</footer>

      {scrollPosition > 150 && <ScrollUpBtn />}
    </div>
  );
}

export default App;
