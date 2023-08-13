import './App.css';
import NavBar from "./components/navBar"
import TitleSection from './components/titleSection';
import AboutourFood from './components/aboutOurFood';
import MenuSection from './components/menuSection';
import SpecialMenu from './components/sepcialMenu';

function App() {
  return (
    <div className="App">
      <NavBar />
      <TitleSection />
      <AboutourFood />
      <MenuSection />
      <SpecialMenu />
    </div>
  );
}

export default App;
