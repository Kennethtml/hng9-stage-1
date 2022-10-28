import logo from "./logo.svg";
import "./App.css";
import Profile from "./component/Profile";
import Links from "./component/Links";
import Footer from "./component/Footer";
import Socials from "./component/Socials";
import shareMobile from './assets/share-mobile.svg'
import share from './assets/share.svg'

import React from "react";

function App() {
  return (
    <div className="container">
      <main className="wrapper">
        <button className="btn-share">
          <img src={share} className='share desktop' alt="share " />
          <img src={shareMobile} className='share mobile' alt="share" />
        </button>
        <Profile />
        <Links />
        <Socials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
