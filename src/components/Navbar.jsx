
function Navbar() {
    return (
      <header className='navbar-container'>
          <h1 className='navbar-logo'>Nicholas Licata</h1>
          <nav>
            <a href='#home'>Home</a>
            <a href='#about'>About</a>
            <a href='#projects'>Projects</a>
            <a href='#contact'>Contact</a>
          </nav>
          <div className='hamburger-btn'>
            <span className='hamburger-line'></span>
            <span className='hamburger-line'></span>
            <span className='hamburger-line'></span>
          </div>
      </header>
    )
}

export default Navbar;