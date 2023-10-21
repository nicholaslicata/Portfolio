
function Navbar({ navActive, toggleNav, closeNav }) {

    return (
      <header className='navbar-container'>
          <a href='#home' className='navbar-logo'>NL</a>
          <nav className={navActive ? 'nav-active' : 'nav'}>
            <a onClick={closeNav} className='nav-link' href='#home'>Home</a>
            <a onClick={closeNav} className='nav-link' href='#about'>About</a>
            <a onClick={closeNav} className='nav-link' href='#projects'>Projects</a>
            <a onClick={closeNav} className='nav-link' href='#contact'>Contact</a>
          </nav>
          <div onClick={toggleNav} className='hamburger-btn'>
            <span className={!navActive ? 'hamburger-line' : 'nav-close-line-1'}></span>
            <span className={!navActive ? 'hamburger-line' : 'nav-close-line-2'}></span>
            <span className={!navActive ? 'hamburger-line' : 'nav-close-line-3'}></span>
          </div>
      </header>
    )
}

export default Navbar;