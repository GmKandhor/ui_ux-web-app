import React from "react";
import GetStarted from "./GetStarted";
import { discount, robot } from "../assets";
import styles from "../style";
const Hero = () => (
  <section
    id="home"
    className={`flex md:flex-row  flex-col justify-around items-center ${styles.paddingY}`}
  >
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0  sm:px-16 px-16`}
    >
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img src={discount} alt="discount" className="w-[32px] h-[32px] " />
        <p className={`${styles.paragraph} ml-2 text-[#bdb5b5]`}>
          <span className="text-white">20%</span> Discount For{" "}
          <span className="text-white">1 Month</span> Account
        </p>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px]">
          The Next <br className="sm:block hidden" />{" "}
          <span className="text-gradient">Gereration</span>
          <br />
        </h1>
        <div className="ss:flex md:mr-4 mr-0 ">
          <GetStarted />
        </div>
      </div>
      <h1 className=" font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
        Payment Method.
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          voluptatum minus omnis quibusdam iusto ullam nihil voluptates fuga
          voluptatem error.
        </p>
      </h1>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img
        src={robot}
        alt="robot"
        className="w-[600px] h-[100%] relative z-[5] "
      />
      <div className="absolute top-0 pink__gradient z-[0] w-[40%] h-[300px]" />
      <div className="absolute bottom-20 white__gradient z-[0] w-[20%] h-[600px] rounded-full" />
      <div className="absolute bottom-20 right-20 blue__gradient z-[0] w-[50%] h-[800px] rounded-full" />
    </div>
  </section>
);
export default Hero;
