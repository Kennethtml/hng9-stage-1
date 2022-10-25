import React from 'react'
import ProfileImg from '../assets/profile.jpg'

function Profile() {
  return (
    <section className='profile'>
        <img className='profile-image'id='profile__img' src={ProfileImg} alt="profile" />
        <p className="profile-name" id='twitter'>ken</p>
        <p className="slack" id='slack'>Ehiomhen Kenneth</p>

    </section>
  )
}

export default Profile