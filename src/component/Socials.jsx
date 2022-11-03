import React from 'react'
import Slack from '../assets/slack.svg'
import github from '../assets/github.svg'

function Socials() {
  return (
    <section className='social-links'>
      <img src={Slack} alt="slack" />
      <img src={github} alt='github' />
    </section>
  );
}

export default Socials