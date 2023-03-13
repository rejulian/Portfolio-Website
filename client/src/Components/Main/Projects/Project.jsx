import React from 'react'

const Project = ({img,desc,link}) => {
  return (
    <div className='project' data-aos="zoom-in">
        <a href={link} target='_blank' rel="noreferrer"><img src={img} alt="Project"/></a>
        <p>{desc}</p>
    </div>
  )
}

export default Project