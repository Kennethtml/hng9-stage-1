import React from 'react'
import Slack from '../assets/slack.svg'
import github from '../assets/github.svg'

function Socials() {
  return (
    <section className='social-links'>
      <img src={Slack} alt="" />
      <img src={github} alt="" />
    </section>
  );
}

export default Socials