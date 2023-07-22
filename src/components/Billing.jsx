import React from 'react'
import styles , {layout} from '../style'
import { bill,apple,google } from '../assets'

const Billing = () => {
  return (
    <section className={`${styles.paddingY} flex ${styles.flexCenter} justify-between md:flex-row flex-col`}>
       <div className='w-[650px]'>
          <img src={bill} className='w-[470px]' alt="bill" />
       </div>
       <div className={`${layout.sectionInfo} relative z-[6] flex-end `}>
     <h2 className='font-semibold font-poppins text-[50px] text-[#fff]'>Easily control your,<br /> billing & invoicing.</h2>
     <p className={`${styles.paragraph} max-w-[470px] mt-5 text-[#aca8a8]`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds
        of credit cards on the market.
      </p>
    <div className='flex mt-6'>
      <img src={apple} className='mr-2' alt="apple" />
      <img src={google} alt="google" />
    </div>
      <div className="absolute top-0 pink__gradient z-[1] w-[50%] h-[500px]" />
      <div className="absolute bottom-20 white__gradient z-[2] w-[40%] h-[700px] rounded-full" />
    </div>
    </section>
  )
}

export default Billing
