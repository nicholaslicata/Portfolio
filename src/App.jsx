import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';

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
      <Navbar navActive={navActive} toggleNav={toggleNav} />
      <Home navActive={navActive} toggleNav={toggleNav}/>
    </main>
  )
}

export default App;
