import React from 'react'
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeaturesCard = ({icon,title,content}) =>(
  
    <div className='w-[600px] feature-card flex m-3  cursor-pointer p-2 py-5 rounded-2xl justify-center items-center'>
       <div className=' mr-5 w-[50px] h-[50px] rounded-full  flex justify-center items-center p-1 border-[#8f8989] border-[3px]'>
        <img src={icon} />
       </div>
       <div>
        <h2 className='font-semibold font-poppins text-[#f1efef] text-[20px]'>
          {title}
        </h2>
        <p className={`${styles.paragraph} max-w-[470px]  text-[#aca8a8]`}>
          {content}
        </p>
       </div>

    </div>

)

const Business = () => (
  <section id='features' className={`${layout.section} md:flex-row flex-col`}>
    <div className={`${layout.sectionInfo} relative z-[6]`}>
     <h2 className='font-semibold font-poppins text-[60px] text-[#fff]'>You do the business,<br /> we'll handle the money</h2>
     <p className={`${styles.paragraph} max-w-[470px] mt-5 text-[#aca8a8]`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds
        of credit cards on the market.
      </p>
      <Button styles={`mt-10`} text='Get Started'/>
      <div className="absolute top-0 pink__gradient z-[1] w-[40%] h-[500px]" />
      <div className="absolute bottom-20 white__gradient z-[0] w-[20%] h-[700px] rounded-full" />
    </div>
    <div className='flex  flex-col justify-center items-center'>
      {features.map((features)=>(
        <FeaturesCard  key={features.id} {...features} features={features}/>
      ))}
    </div>
  </section>
  )


export default Business