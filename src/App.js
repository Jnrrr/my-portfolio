// import About from "./components/About";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      {/* <About /> */}
      <SocialLinks />
      <Projects />
      <Experience />
    </div>
  );
}

export default App;
