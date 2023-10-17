import './App.scss';
import Header from '../components/header/header';
import About from '../components/about/about';
import Technologies from '../components/technologies/technologies';
import Portfolio from '../components/portfolio/portfolio';
import Experience from '../components/experience/experience';
import Education from '../components/education/education';
import EducationCertificates from '../components/educationCertificates/educationCertificates';
import Contacts from '../components/contacts/contacts';
import ScrollUpBtn from '../components/scrollUpBtn/scrollUpBtn';
import MotionWrapper from '../components/motionWrapper/motionWrapper';


function App() {
  return (
    <div className="App">
      <Header />
      <MotionWrapper custom={2}>
        <About />
      </MotionWrapper>
      <MotionWrapper>
        <Technologies />
      </MotionWrapper>
      <MotionWrapper>
        <Portfolio custom={2} />
      </MotionWrapper>
      <MotionWrapper>
        <Experience />
      </MotionWrapper>
      <MotionWrapper>
        <Education />
      </MotionWrapper>
      <MotionWrapper>
        <EducationCertificates />
      </MotionWrapper>
      <MotionWrapper>
        <Contacts />
      </MotionWrapper>
      {/* hobby */}
      <footer>Developed by Anastasiya Karpenka ©</footer>

      <ScrollUpBtn />
    </div>
  );
}

export default App;
