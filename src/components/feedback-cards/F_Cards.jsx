import React from 'react'
import './index.scss'

const F_Cards = (props) => {
  return (
    <div className='feedCard'>
        <p>
        Fylo has improved our team productivity by an order of magnitude. 
        Since making the switch our team has 
        become a well-oiled collaboration machine.
        </p>

        <div className='profile'>
          <div>
            <img src={props.perfil} alt="" />
          </div>
          
          <div className='profile__name' >
            <h5>{props.pNome}</h5>
            <p>Founder & CEO, Huddle</p>
          </div>
        </div>
        
    </div>
  )
}

export default F_Cards