import React from 'react'
import Logo from './Logo/Logo'
import './Skills.css'

const Skills = () => {
  
  let skills = [
    {
        name:'REACT',
        img:'https://res.cloudinary.com/tuko/image/upload/v1664329713/portfolio/ReactLogo_affauk.png'
    },{
        name:'JAVASCRIPT',
        img:'https://res.cloudinary.com/tuko/image/upload/v1664329726/portfolio/jsLogo_vpsmr7.png'
    },{
        name:'SQL',
        img:'https://res.cloudinary.com/tuko/image/upload/v1678625735/portfolio/sql_zza9pu.png'
    },{
        name:'NODE',
        img:'https://res.cloudinary.com/tuko/image/upload/v1678624712/portfolio/nodelogo_dniipg.jpg'
    },{
        name:'EXPRESS',
        img:'https://res.cloudinary.com/tuko/image/upload/v1678625970/portfolio/expresslogo_zx57en.png'
    },{
        name:'HTML',
        img:'https://res.cloudinary.com/tuko/image/upload/v1664329687/portfolio/CssLogo_uktvny.png'
    },{
        name:'CSS',
        img:'https://res.cloudinary.com/tuko/image/upload/v1664329687/portfolio/CssLogo_uktvny.png'
    },
    {
        name:'GIT',
        img:'https://res.cloudinary.com/tuko/image/upload/v1664329749/portfolio/GitLogo_zeacmq.png'
    },
    {
        name:'GITHUB',
        img:'https://res.cloudinary.com/tuko/image/upload/v1664329739/portfolio/GitHubLogo_fbmpb7.png'
    },

  ] 

  return (
    <section id='skills'>
        <h2 className='titles' data-aos="fade-left">Skills</h2>
        <div className='skills__container' data-aos="fade-left">
            <div className='skills__container__logo'>
                {skills.map((skill,key) => {
                    return(
                        <Logo img={skill.img} name={skill.name} key={key}/>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Skills