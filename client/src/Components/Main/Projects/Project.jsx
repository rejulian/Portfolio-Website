import React from 'react'

const Project = ({img,desc,link}) => {
  return (
    <div className='project'>
        <a href={link} target='_blank' rel="noreferrer"><img src={img} alt="Project"/></a>
        <p>{desc}</p>
    </div>
  )
}

export default Project