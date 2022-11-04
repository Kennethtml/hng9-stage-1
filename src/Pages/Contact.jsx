import { ErrorResponse } from "@remix-run/router";
import React from "react";
import { useEffect, useState } from "react";
import "./pages.scss";

function Contact() {

	//name variable
  const name = "Ehiomhen Kenneth";


  //default state for the form elements
  const formDefault = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  };

  //The differen states for this component
  const [form, setForm] = useState(formDefault);
  const [formErrors, setFormErrors] = useState({});
  const [submitMessage, setSubmitMessage] = useState("");


//function for handling change in form inputs
  function onChangeHandler(e) {
    setForm((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }


//form validator function
  function validateForm(form) {
    const errors = {};
    if (form.firstName === "") {
      errors.firstName = "please enter your first name";
    }
    if (form.lastName === "") {
      errors.lastName = "please enter your last name";
    }
    if (form.email === "") {
      errors.email = "please enter your email adress";
    }
    if (form.message === "") {
      errors.message = "please enter a message ";
    }

    return errors;
  }


  //function for submitting form
  function Submit(e) {
    setSubmitMessage("");
    e.preventDefault();

    setFormErrors(validateForm(form));
  }
 
  //fixes the routing error by returning the page to the top on each page transition
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  //sets error message and clears error message 
  useEffect(() => {
    if (Object.keys(formErrors).length === 0) {
      setForm(formDefault);
      setSubmitMessage("Response received ");
      setTimeout(() => {
        setSubmitMessage("");
      }, 3000);
    }
  }, [formErrors]);


  useEffect(() => {
    setSubmitMessage("");
  }, []);

  return (
    <main className="contact">
      <h1>Contact Me</h1>
      <p>Hi there, contact me to ask me about anything you have in mind.</p>
      <p className="submit-message">{submitMessage}</p>

      <form action="submit">
        <div className="name-input">
          <div className="first-name">
            <label htmlFor="first_name"> First name</label>

            <input
              type="text"
              id="first_name"
              placeholder="Enter your first name"
              required
              name="firstName"
              value={form.firstName}
              onChange={(e) => onChangeHandler(e)}
            />
            {formErrors.firstName && (
              <p className="error">{formErrors?.firstName}</p>
            )}
          </div>
          <div className="last-name">
            <label htmlFor="last_name">Last name</label>
            <input
              type="text"
              id="last_name"
              placeholder="Enter your last name"
              required
              name="lastName"
              value={form.lastName}
              onChange={(e) => onChangeHandler(e)}
            />
            {formErrors.lastName && (
              <p className="error">{formErrors?.lastName}</p>
            )}
          </div>
        </div>

        <div className="input">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="yourname@email.com"
            name="email"
            value={form.email}
            onChange={(e) => onChangeHandler(e)}
            required
          />
          {formErrors.email && <p className="error">{formErrors?.email}</p>}
        </div>
        <div className="input">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            cols="30"
            rows="10"
            placeholder="Send me a message and I'll reply you as soon as possible..."
            name="message"
            value={form.message}
            onChange={(e) => onChangeHandler(e)}
          ></textarea>
          {formErrors.message && <p className="error">{formErrors?.message}</p>}
        </div>

        <div className="input">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">
            You agree to providing your data to {name} who may contact you.
          </label>
        </div>

        <button className="btn" id="btn__submit" onClick={Submit}>
          Send message
        </button>
      </form>
    </main>
  );
}

export default Contact;
