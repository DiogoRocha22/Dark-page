import React from 'react'
import './index.scss'
import callImg from './../../assets/illustration-intro.png'
import bgcurve from './../../assets/bg-curvy-desktop.svg'
import Button from '../button/Button'

const CallAction = () => {
  return (
    <div className='action'>
        <div className='intro index'>
            <img className='imgintro' src={callImg} alt="" />
            <h1>All your files in one secure location, accessible anywhere.</h1>
            <p>
                Fylo stores all your most important files in one secure location. Access them wherever 
                you need, share and collaborate with friends family, and co-workers.
            </p>
            <Button contain='Get Starded'/>
        </div>

        <img className='bg' src={bgcurve} alt="" />
    </div>
  )
}

export default CallAction