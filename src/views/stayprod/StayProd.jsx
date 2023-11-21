import React from 'react'
import './index.scss'
import imgStay from './../../assets/illustration-stay-productive.png'
import arrow_icon from '../../assets/icon-arrow.svg'

const StayProd = () => {
  return (
    <div className='stayp'>
        <img src={imgStay} width={'50%'} alt="" />

        <div>
            <h1>Stay productive, wherever you are</h1>
            <p>
                Never let location be an issue when accessing your files. Fylo has you covered 
                for all of your file storage needs.<br/><br/>
                Securely share files and folders with friends, family and colleagues for live 
                collaboration. No email attachments required.
            </p>

            <a href="" target="_blank" rel="noopener noreferrer">
              See how Fylo works <img src={arrow_icon} alt="" /> 
            </a>
           
        </div>
    </div>
  )
}

export default StayProd