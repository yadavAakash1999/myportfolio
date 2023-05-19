import React from 'react'

import {GitHub, Link} from '@material-ui/icons'
import { ProjectList } from '../helper/ProjectList'

function ProjectItem({id, name}) {
  const project = ProjectList[id];
  return (
    <div className='projectItem' >
      <h1>{name}</h1>
      <span className='git' ><a  href={`${project.git}`} target="_blank"><GitHub/></a></span>
      <span className='hostedLink'><a href={`${project.host}`} target="_blank"><Link/></a></span>
    </div>

  )
}

export default ProjectItem
