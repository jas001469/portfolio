import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Skill from "./components/Skill";
import Contact from "./components/contact";
import Footer from "./components/Footer";



function App() {
  return (
    <>
  <Header/> 
  <main>
    <Hero/>
    <About/>
    <Experience/>
    <Work/>
    <Skill/>
    <Contact/>
  </main>
  <Footer/>

 </>
  );
}

export default App;
