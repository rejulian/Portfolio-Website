import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header>
        <section id='hero' data-aos="fade-up">
            <div className='hero__text'>
                <h5>Hi! I'm</h5>
                <h1>Julian Re</h1>
                <p><span>Fullstack Developer</span></p>
                <a target='_blank' rel="noreferrer" href="Resume Julian Re Frontend Developer.pdf">Resume</a>
                <a target='_blank' rel="noreferrer" href="https://api.whatsapp.com/send?phone=3364631393">Contact Me</a>
            </div>
            <div>
                <img className='hero__img' src="https://res.cloudinary.com/tuko/image/upload/v1678546698/portfolio/FotoCV_mwz4gz.jpg" alt="Should show my profile img" />
            </div>
        </section>
        <div className='arrow'>
            <a href="#about-me">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </a>
        </div>

    </header>
  )
}

export default Header