import './App.scss';
import Header from '../components/header/header';
import About from '../components/about/about';
import Technologies from '../components/technologies/technologies';
import Portfolio from '../components/portfolio/portfolio';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Technologies />
      <Portfolio />
    </div>
  );
}

export default App;
