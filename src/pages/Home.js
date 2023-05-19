import React from 'react'
import LinkedIn from "@material-ui/icons/LinkedIn";
import Email from "@material-ui/icons/Email";
import Github from "@material-ui/icons/GitHub";
import "../styles/Home.css"

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, My Name is Aakash Yadav</h2>
        <div className='prompt'>
          <p> A software developer with a passion for learning</p>
          <a href='https://www.linkedin.com/in/yadav-aakash-' target="_blank"><LinkedIn /></a>
          <a href='mailto:aakash0511999@gmail.com' target="_blank"><Email /></a>
          <a href='https://github.com/yadavAakash1999' target="_blank"><Github /></a>
          
          
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>ReactJs, HTML, CSS,  BootStrap</span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span>NodeJs, ExpressJs</span>
          </li>
          <li className='item'>
            <h2> Languages</h2>
            <span>Java, JavaScript</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home
