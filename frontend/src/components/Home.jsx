
import './Home.css';

const Home = () => {
    return (
        <section id="home" className="home-container">
            <div className="hero-content">
                <h1 className="hero-title">Demo for CI/CD test</h1>
                <p className="hero-description">
                    Revolutionizing seismic imaging with advanced superresolution and denoising
                    techniques for clearer geological insights and better decision-making.
                </p>
                <a href="#features">
                    <button className="cta-button">Learn More</button>
                </a>
            </div>
        </section>
    );
};

export default Home;
