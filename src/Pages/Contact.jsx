import React from 'react'
import { useEffect } from 'react';
import './pages.scss'

function Contact() {

    const name='Ehiomhen Kenneth'

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

  return (
    <main className="contact">
      <h1>Contact Me</h1>
      <p>Hi there, contact me to ask me about anything you have in mind.</p>
      <form action="">
        <div className="name-input">
          <div className="first-name">
            <label htmlFor="first_name"> First name</label>
            <input
              type="text"
              id="first_name"
              placeholder="Enter your first name"
              required
            />
          </div>
          <div className="last-name">
            <label htmlFor="last_name">Last name</label>
            <input
              type="text"
              id="last_name"
              placeholder="Enter your last name"
              required
            />
          </div>
        </div>

        <div className="input">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="yourname@email.com"
            required
          />
        </div>
        <div className="input">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Send me a message and I'll reply you as soon as possible..."
          ></textarea>
        </div>

        <div className="input">
          <input type="checkbox" />
          <label htmlFor="">
            You agree to providing your data to {name} who may contact you.
          </label>
        </div>

        <button className="btn" id="btn__submit">
          {" "}
          Send message
        </button>
      </form>
    </main>
  );
}

export default Contact