import './App.scss';
import Header from '../components/header/header';
import About from '../components/about/about';
import Technologies from '../components/technologies/technologies';
import Portfolio from '../components/portfolio/portfolio';
import Experience from '../components/experience/experience';
import Education from '../components/education/education';
import EducationCertificates from '../components/educationCertificates/educationCertificates';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Technologies />
      <Portfolio />
      <Experience />
      <Education />
      <EducationCertificates />
      {/* contacts */}
      {/* download cv */}
      {/* hobby */}
    </div>
  );
}

export default App;
