import React from "react"

function Hint(props) {
  return (
    <div className="hint">
      <img src={props.imageUrl} alt="An animal!" className="animal" />
      <p>
        Photo by
        {` `}
        <a
          href={
            "https://unsplash.com/@" +
            props.photographerUserName +
            "?utm_source=gigl-match&utm_medium=referrer"
          }
        >
          {props.photographerName}
        </a>
        {` `}
        on
        {` `}
        <a href="https://unsplash.com/?utm_source=gigl-match&utm_medium=referrer">
          Unsplash
        </a>
      </p>
    </div>
  )
}

export default Hint
