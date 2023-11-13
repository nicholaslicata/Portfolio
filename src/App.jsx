import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from'./components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [navActive, setNavActive] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', function() {
      if (window.innerWidth > 768 && navActive) {
        closeNav();
      }
    })

    if (navActive && window.innerWidth < 768) {
      document.body.style.overflowY = 'hidden';
      document.body.style.position = 'fixed';
    } else if (!navActive) {
      document.body.style.overflowY = 'visible';
      document.body.style.position = 'relative';
    }
  })

  function toggleNav() {
    setNavActive(!navActive);
  }

  function closeNav() {
    setNavActive(false);
  }

  return (
    <main className='main'>
      <Navbar navActive={navActive} toggleNav={toggleNav} closeNav={closeNav} />
      <Home navActive={navActive} toggleNav={toggleNav}/>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

export default App;
