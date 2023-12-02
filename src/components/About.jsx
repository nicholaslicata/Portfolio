import ProfileImg from '../assets/me.jpg';
import HTMLImg from '../assets/HTML1.svg';
import CSSImg from '../assets/CSS1.svg';
import JSImg from '../assets/JS1.svg';
import TSImg from '../assets/TS1.svg';
import ReactImg from '../assets/React1.svg';
import TWImg from '../assets/TW1.svg';
import FBImg from '../assets/FB1.svg';
import GitImg from '../assets/Git1.svg';

function About() {
    return (
        <section className='about' id='about'>
            <div className='about-container'>
            <div className='about-title-container'>
               <h2 className='about-title'>About Me</h2>
            </div>
            <div className='about-content-container'>
                <div className='about-text-container'>
                  <p className='about-p'>
                  My journey into the world of web development has been nothing short of arduous, while simultaneously being
                  one of the most rewarding decisions I've ever made. From the very the first project I made with HTML and CSS, 
                  to the first time I added some functionality with Javascript. I learned to embrace the challenge, and to love 
                  the fleeting rush from solving a problem after being stuck for hours. I was hooked. My passion for web development
                  has instilled in me a strong commitment to continuous learning, and the reinforcment of this knowledge through building
                  personal projects.
                  </p>
                </div>
                <div className='about-img-container'>
                  <img className='about-profile-img' alt='Photo of Nicholas Licata' src={ProfileImg}></img>
                </div>
            </div>
            <div className='about-skills-container'>
                <ul className='about-skill-list'>
                    <li className='about-skill'>
                       HTML
                       <img className='about-skill-icon' alt='Skill Icon' src={HTMLImg}></img>
                    </li>
                    <li className='about-skill'>
                        CSS
                       <img className='about-skill-icon' alt='Skill Icon' src={CSSImg} ></img>
                    </li>
                    <li className='about-skill'>
                        Javascript
                        <img className='about-skill-icon' alt='Skill Icon' src={JSImg} ></img>
                    </li>
                       <li className='about-skill'>
                        Typescript
                        <img className='about-skill-icon' alt='Skill Icon' src={TSImg} ></img>
                    </li>
                    <li className='about-skill'>
                        React
                        <img className='about-skill-icon' alt='Skill Icon' src={ReactImg} ></img>
                    </li>
                    <li className='about-skill'>
                        Tailwind
                        <img className='about-skill-icon' alt='Skill Icon' src={TWImg} ></img>
                    </li>
                    <li className='about-skill'>
                        Firebase
                        <img className='about-skill-icon' alt='Skill Icon' src={FBImg} ></img>
                    </li>
                    <li className='about-skill'>
                        Git
                        <img className='about-skill-icon' alt='Skill Icon' src={GitImg} height='20px'></img>
                    </li>
                </ul>
                </div>
            </div>
        </section>
    )
}

export default About;