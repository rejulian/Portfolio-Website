import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Project from './Project'
import './Project.css'

const ProjectsContainer = () => {

  const [project, setProject] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:4000/').then(data=>setProject(data.data))
  },[])

  return (
    <section id='projects'>
        <h2 className='titles' data-aos="zoom-in">Projects</h2>
        <div>
            {project.map((p,key)=>{
              return(
                <Project img={p.img} desc={p.description} link={p.link} key={key}/>
              )
            })}
        </div>
    </section>
  )
}

export default ProjectsContainer