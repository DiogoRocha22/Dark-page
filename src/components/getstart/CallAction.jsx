import React from 'react'
import './index.scss'
import callImg from './../../assets/illustration-intro.png'
import bgcurve from './../../assets/bg-curvy-desktop.svg'

const CallAction = () => {
  return (
    <div className='action'>
        <img className='imgintro' style={{zIndex:'4'}} src={callImg} alt="" />
        <img className='bg' src={bgcurve} alt="" />
    </div>
  )
}

export default CallAction