import React from "react"
import openaiLogo from "../../assets/openai-svgrepo-com.svg"
import "./Footer.css"
const Footer = () => {
  return (
    <footer
      style={{
        background: "#1d1e21",
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        marginTop: "40px",
        padding: "5px",
        borderTop: " 0.1px solid grey",
      }}
    >
      <span
        style={{
          color: "grey",
          width: "100%",
        }}
      >
        Powered by
      </span>
      <a style={{ paddingTop: "2px" }} href="https://openai.com/">
        <img src={openaiLogo} className="logo" alt="logo" />
      </a>
      <span
        style={{
          color: "whitesmoke",
          fontWeight: "600",
          paddingBottom: "10px",
        }}
      >
        openAI
      </span>
    </footer>
  )
}

export default Footer

// { loading, isOpen, closeModal, keywords } isOpen={isOpen} onClose={closeModal}
