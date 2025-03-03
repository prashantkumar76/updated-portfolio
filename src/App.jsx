import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/about'
import Project from './sections/Project'
import Clients from './sections/Clients'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Experience from './sections/Experience'



const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Experience />
      <Contact />
      <Footer />
      
    </main>
  )
}

export default App