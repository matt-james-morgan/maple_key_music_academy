import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Programs from "./components/Programs";
import About from "./components/About";
import Instructors from "./components/Instructors";
import Contact from "./components/Contact";

function App() {
  return (
    <div style={{ width: "100%" }}>
      <Header />
      <Hero />
      <Programs />
      <About />
      <Instructors />
      <Contact />
    </div>
  );
}

export default App;
