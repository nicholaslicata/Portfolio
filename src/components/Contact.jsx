
function Contact() {
    return (
        <section className='contact' id='contact'>
            <div className='contact-title-container'>
                <h4 className='contact-title'>Contact Me</h4>
            </div>
            <form className='contact-form' name='contact-form' method='POST' data-netlify='true'>
                <label type='text' htmlFor='name' className='contact-label'>Name</label>
                <input id='name' name='name' className='contact-input' autoComplete="off"></input>
                <label type='email' htmlFor='email' className='contact-label'>Email</label>
                <input id='email' name='email' className='contact-input' autoComplete="off"></input>
                <label htmlFor='message' className="contact-label">Message</label>
                <textarea id='message' name='message' className='contact-message'></textarea>
                <button type='submit' className='contact-btn'>Send</button>
            </form>
        </section>
    )
}

export default Contact;