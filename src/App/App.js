import './App.scss';
import Header from '../components/header/header';
import About from '../components/about/about';
import Technologies from '../components/technologies/technologies';
import Portfolio from '../components/portfolio/portfolio';
import Experience from '../components/experience/experience';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Technologies />
      <Portfolio />
      <Experience />
    </div>
  );
}

export default App;
