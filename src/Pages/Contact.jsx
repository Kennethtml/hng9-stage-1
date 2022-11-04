import { ErrorResponse } from "@remix-run/router";
import React from "react";
import { useEffect,useState } from "react";
import "./pages.scss";

function Contact() {
  const name = "Ehiomhen Kenneth";


const formDefault = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

  const[form,setForm]=useState(formDefault)
  const[formErrors,setFormErrors]=useState({})
  const [submitMessage, setSubmitMessage] = useState("");

  function onChangeHandler(e){
   setForm((prev)=>{
    return{...prev,[e.target.name]:e.target.value}
   })
  }
//   console.log(form)

  function validateForm(form){
  
    const errors={}
    if(form.firstName===""){
       errors.firstName="please Enter a first name"
    }
      if (form.lastName === "") {
        errors.lastName = "please Enter a first name";
      }
       if (form.email === "") {
         errors.email="please Enter a first name"
       }
        if (form.message === "") {
           errors.message="please Enter a message name"
        }

        return errors
  }


 function Submit(e){
    setSubmitMessage("")
    e.preventDefault()
   
    setFormErrors(validateForm(form))
  
   

  }
  console.log("err",formErrors)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

useEffect(()=>{
     if(Object.keys(formErrors).length===0){
        setForm(formDefault); 
        setSubmitMessage("Response received ")
           setTimeout(() => {
             setSubmitMessage("");
           }, 3000);
     }
},[formErrors])

useEffect(()=>{setSubmitMessage("")},[])
  
console.log(submitMessage);




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
          {formErrors.message && (
            <p className="error">{formErrors?.message}</p>
          )}
        </div>

        <div className="input">
          <input type="checkbox" />
          <label htmlFor="">
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
