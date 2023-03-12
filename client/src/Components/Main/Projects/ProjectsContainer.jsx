import React, { useState } from 'react'
import axios from 'axios'
import Project from './Project'
import './Project.css'

const ProjectsContainer = () => {

  const [project, setProject] = useState([])

  axios.get('http://localhost:4000/').then(data=>setProject(data.data))

  return (
    <section id='projects'>
        <h2 className='titles'>Projects</h2>
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