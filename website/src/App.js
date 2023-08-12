import './App.css';
import NavBar from "./components/navBar"
import TitleSection from './components/titleSection';
import AboutourFood from './components/aboutOurFood';

function App() {
  return (
    <div className="App">
      <NavBar />
      <TitleSection />
      <AboutourFood />
    </div>
  );
}

export default App;
