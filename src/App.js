import './App.css';

import Landing from "./components/landing/Landing.jsx"
import AboutUs from "./components/AboutUs/AboutUs.jsx"
import Services from "./components/services/Services.jsx"
import Skills   from "./components/Skills/Skills.jsx"
import Portfolio from "./components/Portfolio/Portfolio.jsx"
import Contact from "./components/Contact/Contact.jsx"
import Footer  from "./components/Footer/Footer.jsx"


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
