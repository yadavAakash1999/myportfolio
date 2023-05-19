import React from 'react'
import LinkedIn from "@material-ui/icons/LinkedIn";
import Email from "@material-ui/icons/Email";
import Github from "@material-ui/icons/GitHub";
import Contact from "@material-ui/icons/Call";
import '../styles/Footer.css';
function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
      <a href='https://www.linkedin.com/in/yadav-aakash-' target="_blank"><LinkedIn /></a>
          <a href='mailto:aakash0511999@gmail.com' target="_blank"><Email /></a>
          <a href='https://github.com/yadavAakash1999' target="_blank"><Github /></a>
      
      </div>
    </div>
  )
}

export default Footer
