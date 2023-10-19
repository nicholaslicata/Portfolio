
function Navbar({ navActive, toggleNav }) {

    return (
      <header className='navbar-container'>
          <a href='#home' className='navbar-logo'>Nicholas Licata</a>
          <nav className={navActive ? 'nav-active' : 'nav'}>
            <a className='nav-link' href='#home'>Home</a>
            <a className='nav-link' href='#about'>About</a>
            <a className='nav-link' href='#projects'>Projects</a>
            <a className='nav-link' href='#contact'>Contact</a>
          </nav>
          <div onClick={toggleNav} className='hamburger-btn'>
            <span className='hamburger-line'></span>
            <span className='hamburger-line'></span>
            <span className='hamburger-line'></span>
          </div>
      </header>
    )
}

export default Navbar;