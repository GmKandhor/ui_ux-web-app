import React from 'react'
import styles,{layout} from '../style'
import {card} from '../assets'
import Button from "./Button";

const CardDeal = () => (
  <section id='cardDeal' className={`flex ${styles.paddingY}`}>
    <div className={`${layout.sectionInfo} relative z-[6]`}>
     <h2 className='font-semibold font-poppins text-[60px] text-[#fff]'>Find a better card ,<br /> deal in few easy steps.</h2>
     <p className={`${styles.paragraph} max-w-[470px] mt-5 text-[#aca8a8]`}>
     Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>
      <Button styles={`mt-10`} text='Get Started'/>
      <div className="absolute top-0 pink__gradient z-[1] w-[40%] h-[300px]" />
      <div className="absolute bottom-20 white__gradient z-[0] w-[20%] h-[400px] rounded-full" />
    </div>
    <div>
        <img src={card} className='w-[450px]' alt="" />
    </div>
  </section>
  )


export default CardDeal