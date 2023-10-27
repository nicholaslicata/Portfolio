import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from'./components/About';
import Projects from './components/Projects';

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
    } else if (!navActive) {
      document.body.style.overflowY = 'visible';
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
    </main>
  )
}

export default App;
