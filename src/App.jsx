import './App.css'
import Navbar from "./components/Navbar"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Home from './components/Home'

function App() {
  return (
    <main className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}

export default App
