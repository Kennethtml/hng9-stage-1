import React from 'react'
import ProfileImg from '../assets/profile.jpg'

function Profile() {
  return (
    <section className='profile'>
        <img className='profile-image' src={ProfileImg} alt="profile" />
        <p className="profile-name">Ehiomhen Kenneth</p>

    </section>
  )
}

export default Profile