import React from 'react'
import './index.scss'

const Card = (props) => {
  return (
    <div className='card'>
        <img src={props.img} alt="img" />
        <h3>{props.h3}</h3>
        <p>{props.p}</p>
    </div>
  )
}

export default Card