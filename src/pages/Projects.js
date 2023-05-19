import React from 'react'
import ProjectItem from '../components/ProjectItem'
import "../styles/projects.css"
import { ProjectList } from '../helper/ProjectList'

function Projects() {
  return (
    <div className='projects'>
      <h1>My Projects</h1>
      <div className='projectList'>
      {
        ProjectList.map((project , idx)=>
          <ProjectItem name={project.name} id={idx}/>
        )
      }

      </div>
    </div>
  )
}

export default Projects
