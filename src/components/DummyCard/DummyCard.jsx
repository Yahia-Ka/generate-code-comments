import React from "react"
import "./DummCard.css"

const DummyCard = (props) => {
  return (
    <div className="card">
      <div className="card__body">
        <h2 className="card__title">{props.title}</h2>
        <img src={props.img} class="card__image" />
        <p className="card__description">{props.text}</p>
      </div>
    </div>
  )
}

export default DummyCard
