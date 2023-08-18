import './App.css';
import NavBar from "./components/navBar"
import TitleSection from './components/titleSection';
import AboutourFood from './components/aboutOurFood';
import MenuSection from './components/menuSection';
import SpecialMenu from './components/sepcialMenu';
import DesertsSection from './components/desertsSection';
import AboutPage from './components/aboutPage';
import ContactSection from './components/contactSection';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <TitleSection />
      <AboutourFood />
      <MenuSection />
      <SpecialMenu />
      <DesertsSection />
      <AboutPage />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
