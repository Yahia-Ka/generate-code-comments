import React, { useRef } from "react"
import "./GptResponse.css"

const GptResponse = ({ data, showThem, hideThem }) => {
  // console.log("fromt the gpt response component" + data)

  const commentsRef = useRef()
  const hideComments = (e) => {
    if (e.target === commentsRef.current) {
      hideThem()
    }
  }

  return (
    <>
      <div className="background-div" ref={commentsRef} onClick={hideComments}>
        <div className="comments-container">
          <h2>Code Comments</h2>
          <div className="comments">{data}</div>
          <button className="close-btn" onClick={() => hideThem()}>
            close
          </button>
        </div>
      </div>
    </>
  )
}

export default GptResponse
