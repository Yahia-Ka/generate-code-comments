import React from "react"
import "./Header.css"

const Header = () => {
  return (
    <>
      <h1>
        Provide <StyledText>Accurate Code Comments</StyledText> & be Nice to
        Cowokers
      </h1>
      <div>
        <p>
          Comments are extremely important in coding. They are used to document
          code and explain its functionality. Comments help other programmers
          understand the code and make it easier to maintain and modify in the
          {/* future. Comments can also help the original programmer remember why
          certain decisions were made and what specific parts of the code do.
          They can also be useful in debugging code by helping to identify where
          a problem may be occurring. */}
        </p>
      </div>
    </>
  )
}

export default Header

const StyledText = ({ children }) => {
  return (
    <span
      className="styled-span"
      style={{
        fontWeight: "bold",
      }}
    >
      {children}
    </span>
  )
}
