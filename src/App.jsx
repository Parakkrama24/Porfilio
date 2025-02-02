import styles from "./App.module.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { PlayList } from "./components/youtubeList/PlayList";

function App() {
  return (
    <Router>
      

      
      <div className={styles.App}>
      <div className={styles.container}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <PlayList/>
      <Contact />
      </div>
      </div>
     
    </Router>
  );
}

export default App;
