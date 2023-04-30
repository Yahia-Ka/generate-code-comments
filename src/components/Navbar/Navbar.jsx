import React from "react"
import twitterLogo from "../../assets/twitter-svgrepo-com.svg"
import inLogo from "../../assets/linkedin-svgrepo-com.svg"
import logo from "../../assets/comments-on-svgrepo-com.svg"
import "./Navbar.css"

function Navbar() {
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-left">
          <img src={logo} className="logo" alt="logo" />
          <div className="brand">
            comment.<span className="styled-span">GPT</span>
          </div>
        </div>
        <div style={{ marginTop: ".4rem" }} className="nav-right">
          <a href="https://twitter.com/yahia_karkori" target="_blank">
            <img src={twitterLogo} className="nav-icons" alt="logo" />
          </a>
          <a
            href="https://www.linkedin.com/in/yahia-karkori-67893024b/"
            target="_blank"
          >
            <img src={inLogo} className="nav-icons" alt="logo" />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
