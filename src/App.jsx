import { useEffect, useState } from 'react';
import Home from './components/Home';

function App() {
  const [navActive, setNavActive] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', function() {
      if (window.innerWidth > 768 && navActive) {
        closeNav();
      }
    })
  })

  function toggleNav() {
    setNavActive(!navActive);
  }

  function closeNav() {
    setNavActive(false);
  }

  return (
    <main>
      <Home navActive={navActive} toggleNav={toggleNav}/>
    </main>
  )
}

export default App;
