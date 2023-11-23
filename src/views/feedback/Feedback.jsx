import React from 'react'
import './index.scss'
import aspas from '../../assets/bg-quotes.png'
import F_Cards from '../../components/feedback-cards/F_Cards'
import profile1 from '../../assets/profile-1.jpg'
import profile2 from '../../assets/profile-2.jpg'
import profile3 from '../../assets/profile-3.jpg'
import Getstart from '../../components/get_start/GetStart'


const Feedback = () => {
  return (
    <div className='feedbacks'>
        <img src={aspas} alt="" />
        <F_Cards 
        perfil = {profile1} 
        pNome='Satish Patel'
        />
        <F_Cards 
        perfil = {profile2} 
        pNome='Bruce McKenzie'
        />
        <F_Cards 
        perfil = {profile3} 
        pNome='Iva Boyd'
       />

       <Getstart />
    </div>
  )
}

export default Feedback