import bgImg1 from '../assets/Capture2.PNG'
import bgImg2 from '../assets/cv1.jpg'
import bgImg3 from '../assets/cv2.jpg'
import bgImg4 from '../assets/cv3.jpg'
import bgImg5 from '../assets/cv5.PNG'
import crown from '../assets/crown.webp'
import mainBg from '../assets/bg3.jpeg'
import triangle from '../assets/triangle-icon.webp'
import { Link } from 'react-router-dom';

const Home = () => {
    return ( 
        <main className="home">
            <div className='home-grid'>
                <div className="main-text">
                <img className='crown' loading='lazy' src={crown} alt="" data-aos='zoom-out'/>
                <img className='mainbg' loading='lazy' src={mainBg} alt="" data-aos='zoom-in'/>
                <img className='triangle' loading='lazy' src={triangle} alt="" data-aos='zoom-in' />

                <h2  data-aos='fade-up' data-aos-duration='500'> Create your Resume <span className='extra'> in 2 minutes, </span> <br />Get the Job of your Dreams</h2>

                <p data-aos='fade-up' data-aos-duration='700'> Just enter your details, and we'll do the rest! </p>

                <Link to='create' >
                    <button className="create-btn" data-aos='fade-up' data-aos-duration='900'> Create CV </button>
                </Link>
            </div >
            
            <div className="main-img" data-aos='zoom-in' data-aos-duration='1000'>
                <div className='img1' >
                    <img src={bgImg1} loading='lazy' alt="background" />
                </div>

                <div className='img2'>
                    <img src={bgImg2} loading='lazy' alt="background" />
                </div>

                <div className='img3'>
                    <img src={bgImg3} loading='lazy' alt="background" />
                </div>

                <div className='img4'>
                    <img src={bgImg4} loading='lazy' alt="background" />
                </div>

                <div className='img5'>
                    <img src={bgImg5} loading='lazy' alt="background" />
                </div>
            </div>

            </div>
        </main>
     );
}
 
export default Home;