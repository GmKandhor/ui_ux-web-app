import React from 'react'
import styles from '../style'

const Button = ({text}) => {
  return (
    <button className='w-[150px] h-[60px] p-3 bg-blue-gradient mt-10 rounded-2xl font-blod text-[18px] hover:bg-pink-gradient'>
{text}
    </button>
  )
}

export default Button