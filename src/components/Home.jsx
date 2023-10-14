import Navbar from '../components/Navbar';

function Home({ navActive, toggleNav }) {

    return (
        <section className='home'>
            <Navbar navActive={navActive} toggleNav={toggleNav} />
        </section>
    )
}

export default Home;