import React from 'react'
import Profile from "../component/Profile";
import Links from "../component/Links";
import Socials from "../component/Socials";
import shareMobile from "../assets/share-mobile.svg";
import share from "../assets/share.svg";


function Home() {
  return (
    <main className="wrapper">
      <button className="btn-share">
        <img src={share} className="share desktop" alt="share " />
        <img src={shareMobile} className="share mobile" alt="share" />
      </button>
      <Profile />
      <Links />
      <Socials />
    </main>
  );
}

export default Home