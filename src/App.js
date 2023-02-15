import './App.css';
import Landing from "./components/Landing/Landing"
import AboutUs from "./components/AboutUs/AboutUs"
import Services from "./components/Services/Services"
import Skills   from "./components/Skills/Skills"
import Portfolio from "./components/Portfolio/Portfolio"
import Contact from "./components/Contact/Contact"
import Footer  from "./components/Footer/Footer"


function App() {
  return (
    <div>
        <Landing></Landing>
        <AboutUs></AboutUs>
        <Services></Services>
        <Skills></Skills>
        <Portfolio></Portfolio>
        <Contact></Contact>
        <Footer></Footer>
    </div>
  );
}

export default App;
