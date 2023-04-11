import React from 'react';
import './Home.css';

// components
import FeaturedJobs from './components/FeaturedJobs';

// images
import Background from '../../img/home/WoodBG.jpg';
import Logo from '../../img/logo/safescrowLogo.png';
import Footer from '../../components/footer/Footer';

function Home() {
    return (
        <div id='Home'>
            <div className='Home-Container' >
                
                <div className='HomeTopBtnsWrapper'>
                    <div className='HomeTopBtnsContent'>
                        <button className='HomeTopBtns HomeTopBtnsBlue'>LOGIN</button>
                        <button className='HomeTopBtns HomeTopBtnsRed'>JOIN NOW</button>
                    </div>
                </div>

                <div className='Home-LogoDiv'>
                    <img className='Home-LogoImg' src={Logo} alt='logo' />
                </div>

                <div className='Home-PageTxtWrapper'>
                    <p className='Home-PageTxt'>Afterpay for <br/> construction</p>
                </div>
                
                <div>
                    <FeaturedJobs />
                </div>

                <div className='HomeBtmBtnsWrapper'>
                    <div className='HomeBtmBtnsContent'>
                        <button className='HomeBtmBtns HomeYellow'>FIND MATERIALS</button>
                        <button className='HomeBtmBtns HomeRed'>POST A JOB</button>
                        <button className='HomeBtmBtns HomeBlue'> FIND WORK</button>
                    </div>
                </div>

                <div className='Home-Footer'>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Home