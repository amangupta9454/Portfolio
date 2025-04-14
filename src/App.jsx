
import About from "./Components/About";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Project from "./Components/Project";
import Qualification from "./Components/Qualification";
import Skill from "./Components/Skill";
function App() {
 

  return (
    <>
     <NavBar></NavBar>
     <main>
     <Home/>
     <About/>
     <Skill/>
     
     <Project/>
     <Experience/>
     <Qualification/>
     <Contact/>
     <Footer/>
     </main>
    </>
  )
}

export default App;