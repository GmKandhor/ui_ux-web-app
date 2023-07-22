import React from 'react'
import styles from '../style'
import { dropbox ,coinbase,binance,airbnb } from '../assets'

const Clients = () => (
  <section className={`flex justify-around ${styles.paddingY} mt-10`}>
        <img className='w-[192px] h-[63px] ' src={binance} alt="binance" />
        <img className='w-[192px] h-[63px] ' src={airbnb} alt="airbnb" />
        <img className='w-[192px] h-[63px] ' src={dropbox} alt="dropbox" />
        <img className='w-[192px] h-[63px] ' src={coinbase} alt="coinbase" />
  </section>
)
export default Clients