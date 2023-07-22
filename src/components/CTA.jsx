import React from 'react'
import Button from './Button'
import styles from '../style'

const CTA = () => (
  <section className={`${styles.paddingY}  flex w-full bg-black-gradient rounded-2xl justify-around`}>
        <div className={`${styles.paddingX}`}>
          <h2 className={`${styles.heading2} mb-3 text-[#fff]`}>Let’s try our service now!</h2>
          <p className={`${styles.paragraph} text-[#c7c2c2]`}>Everything you need to accept card payments<br/> and grow your business anywhere on the planet.</p>
        </div>
        <Button text='Get Started'/>
  </section>
)

export default CTA