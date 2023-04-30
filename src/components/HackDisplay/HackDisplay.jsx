import React from "react"
import "./HackDisplay.css"

export default function HackDisplay({ value }) {
  return (
    <div className="wrapper">
      <div
        className="animated-text"
        dangerouslySetInnerHTML={{ __html: value }} // i don't know what i've been thinking
      />
    </div>
  )
}
