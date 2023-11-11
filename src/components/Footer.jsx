import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-content-container'>
                <a className='footer-email' href='mailto:nicholas.licata730@gmail.com'>nicholas.licata730@gmail.com</a>
                <div className='footer-icons-container'>
                  <a href='https://github.com/nicholaslicata' target='_blank'><FaGithub className='footer-icon' /></a>
                  <a href='https://linkedin.com/in/nicholaslicata' target='_blank'><FaLinkedin className='footer-icon' /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;