import logo from "./logo.svg";
import "./App.css";
import Profile from "./component/Profile";
import Links from "./component/Links";
import Footer from "./component/Footer";
import Socials from "./component/Socials";

import React from "react";

function App() {
  return (
    <div className="container">
      <main className="wrapper">
        <Profile />
        <Links />
        <Socials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
