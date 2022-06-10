import NavBar from "./Components/NavBar/NavBar";
import './App.css'
import Intro from "./Components/Intro/Intro";
import Education from "./Components/Education/Education";
import Achievement from "./Components/Achievement/Achievement";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Foooter from "./Components/Foooter/Foooter";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Intro/>
      <Education/>
      <Achievement/>
      <Skills/>
      <Projects/>
     <Contact/>
     <Foooter/>
    </div>
  );
}

export default App;
