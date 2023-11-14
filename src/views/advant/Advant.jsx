import React from 'react'
import './index.scss'
import Card from '../../components/card-adv/Card'
import acessFile from './../../assets/icon-access-anywhere.svg'
import security from '../../assets/icon-security.svg'
import collab from '../../assets/icon-collaboration.svg'
import anyFile from '../../assets/icon-any-file.svg'
import './index.scss'

const Advant = () => {
  return (
    <div className='advants'>
        
        <Card
        img={acessFile} 
        h3='Access your files, anywhere' 
        p='The ability to use a smartphone, tablet, or computer
          to access your account means your 
          files follow you everywhere.' 
        />
        
        <Card 
        img={security}
        h3=' Security you can trust' 
        p='2-factor authentication and user-controlled encryption are just a couple of the security 
        features we allow to help secure your files.' 
        />
        
        <Card
        img={collab} 
        h3='Real-time collaboration' 
        p='Securely share files and folders with friends, family and colleagues for live collaboration. 
        No email attachments required.' 
        />
        
        <Card
        img={anyFile} 
        h3='Store any type of file' 
        p="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all 
        file types to be securely stored and shared." 
        />
                
    </div>
  )
}

export default Advant