import React from 'react'
import { arrowUp } from '../assets'
import styles from '../style'

const GetStarted = () => (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[4px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-[#000] w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
            <p className=' flex font-poppins font-medium text-[18px] leading-[23px]'>
              <span className='text-gradient'>
               Get
              </span>
                <img src={arrowUp} alt=""  className='w-[23px] h-[23px] object-contain ml-2'/>
            </p>
        </div>
            <p className=' font-poppins font-medium text-[18px] leading-[23px]'>
              <span className='text-gradient'>
               Started
              </span>
            </p>

      </div>

    </div>
  )


export default GetStarted