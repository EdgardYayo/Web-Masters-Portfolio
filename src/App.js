import './App.css';
import Landing from "./components/Landing/Landing"
import AboutUs from "./components/AboutUs/AboutUs"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Landing></Landing>
        <AboutUs></AboutUs>
      </header>
    </div>
  );
}

export default App;
