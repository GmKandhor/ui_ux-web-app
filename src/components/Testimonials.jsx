import React from "react";
import styles from "../style";
import { quotes } from "../assets";
import { feedback } from "../constants";


const FeedBackCard = ({title,name,content,img})=>(
    <div className={`feedback-card flex flex-col justify-center items-start   w-[370px] h-[390px] ml-5 px-10 rounded-3xl z-[12]`}>
        <img src={quotes} className="mb-12"  />
        <p className={`${styles.paragraph} mb-5 text-[#cac6c6] `}>{content}</p>
        <div className="flex mt-4">
          <img src={img} className="w-[48px] h-[48px] mr-3" alt="" />
          <div className="flex flex-col">
          <h3 className="text-[#fff] font-semibold">{name}</h3>
          <p className="text-[#cecdcd]">{title}</p>
          </div>
        </div>
    </div>
)

const Testimonials = () => (
  <section id="" className={`flex flex-col ${styles.paddingY}`}>
    <div className="w-full flex  justify-between relative z-[6]">
      <h2 className={` ${styles.heading2} `}>
        What people are
        <br /> saying about us
      </h2>
      <p className={`${styles.paragraph} text-gradient mr-[200px]`}>
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
      <div className="absolute top-10  right-0 pink__gradient z-[0] w-[40%] h-[100px]" />
      <div className="absolute  right-0  white__gradient z-[0] w-[20%] h-[300px] rounded-full" />
      <div className="absolute  right-0  blue__gradient z-[0] w-[30%] h-[600px] rounded-full" />
    </div>
    <div className="flex mt-10 feedback-container">
    {feedback.map((feedback)=>(
        <FeedBackCard {...feedback} key={feedback.id}/>
    ))}

    </div>
  </section>
);

export default Testimonials;
