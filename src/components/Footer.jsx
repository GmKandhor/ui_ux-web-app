import React from 'react'
import styles from '../style'
import { logo,facebook,instagram,twitter,linkedin } from '../assets'
import { footerLinks } from '../constants'

const Footer = () => (
  <>
  
  <footer className={`${styles.paddingY} flex justify-around flex-row`}>
    <div>
      <img className='w-[266px] h-[72px]' src={logo} alt="" />
      <p className={`${styles.paragraph} text-[#b6b1b1]`}>A new way to make the payments<br/> easy, reliable and secure.</p>
    </div>
    <div>

  <div className='flex'>
    {footerLinks.map((links)=>(
      <div key={links.id} className='mr-10'>
          <h1 className='text-[#fff] mb-5 font-semibold'>{links.title}</h1>
          <div className='flex flex-1 flex-col text-[#d1cfcf]'>
         {links.links.map((link)=>(
           <a className=' mr-2' href={link.link}>{link.name}</a>
           ))}
                </div>
      </div>
      ))}
      </div>
      </div>
     
  </footer>
  <div className={`px-20 overflow-hidden w-full flex justify-between border-t-2 py-4`}>
         <h3 className='text-[#fff] flex'> <span>Copy &copy;</span>{" "}<p>2023 HooBank. All Rights Reserved.</p></h3>
          <div className='flex cursor-pointer'>
              <img className='mr-3' src={instagram} alt="" />
              <img className='mr-3' src={facebook} alt="" />
              <img className='mr-3' src={twitter} alt="" />
              <img src={linkedin} alt="" />
          </div>
  </div>
  </>
)

export default Footer