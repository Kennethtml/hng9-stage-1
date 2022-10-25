import React from 'react'
import Slack from '../assets/slack.svg'
import github from '../assets/github.svg'

function Socials() {
  return (
    <div className='social-links'>
      <img src={Slack} alt="" />
      <img src={github} alt="" />
    </div>
  );
}

export default Socials