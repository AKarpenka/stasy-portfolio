import './App.scss';
import Header from '../components/header/header';
import About from '../components/about/about';
import Technologies from '../components/technologies/technologies';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Technologies />
    </div>
  );
}

export default App;
