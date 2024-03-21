import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Menu from "./components/Menu";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Experience from "./components/Experience"
import "./index.css";
import Contact from "./components/Contact";
import SlideBar from "./components/SlideBar";

function App() {
  return (
    <div>
      <NavBar/>
      <SlideBar/>
      <Home />
      <About/>
      <Projects/>
      <Experience/>
      <Contact/>
    </div>
  );
}

export default App;
