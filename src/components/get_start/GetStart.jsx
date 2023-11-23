import React from 'react'
import './index.scss'
import Button from '../button/Button'

const Getstart = () => {
  return (
    <div className='get-start'>
        <h2>Get early access today</h2>
        <p>
            It only takes a minute to sign up and our free starter tier is extremely generous. 
            If you have any questions, our support team would be happy to help you.
        </p>

        <form className='flex' action="">
            <input type="email" required placeholder='email@example.com' />
            <Button contain='Get Started For Free'/> 
        </form>
    </div>
  )
}

export default Getstart