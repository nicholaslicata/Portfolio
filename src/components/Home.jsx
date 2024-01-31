import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Resume from '../assets/NicholasLicataResume2.pdf';

function Home() {

    return (
        <section className='home' id='home'>
            <div className='home-intro-container'>
              <div className='home-text-container'>
                <p className='home-intro-text'>Greetings! My name is...</p>
                <h1 className='home-intro-name'>Nicholas Licata</h1>
                <span className='home-intro-subtext'>Front End Developer</span>
                <p className='home-intro-p'>A front end web developer who focuses on creating functional
                    and effective web experiences. Here's a little bit more <a className='home-intro-about-link' href='#about'>about me..</a>
                </p>
                <div className='home-intro-buttons'>
                <button className='home-intro-resume' onClick={() => {window.open(Resume)}}>View Resume</button>
                <a href='https://github.com/nicholaslicata' target='_blank' aria-label="Visit my Github"><FaGithub className='home-intro-icon' /></a>
                <a href='https://linkedin.com/in/nicholaslicata' target='_blank' aria-label="Visit my LinkedIn"><FaLinkedin className='home-intro-icon' /></a>
              </div>
              </div>
            </div>
        </section>
    )
}

export default Home;