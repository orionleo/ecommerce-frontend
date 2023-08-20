"use client"
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import React from 'react';
import { useEffect } from 'react';
// import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <motion.div>
      <section id="home" className={`flex md:flex-row flex-col sm:py-16 py-6`}>
      <div className={`flex-1 flex justify-center items-start lex-col xl:px-0 sm:px-16 px-6`}>
    

      <div
        className={`absolute inset-0 top-[120px]  max-w-9xl mx-auto sm:py-16 py-6 flex flex-row items-start gap-5`}
      >

     <Spline scene = "https://prod.spline.design/zwO5e6iINPVSrq-u/scene.splinecode"/>


      </div>
      </div>

      <div className={`flex-1 flex flex justify-center items-center md:my-10 my-10 relative`}>
      <div>
          <h1 className={`font-black text-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 `}>
            Introducing <span className='text-[#A9A9A9]'>Suwone</span>
          </h1>
          <p className={`text-[#899499] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-100`}>
            newly architectured clothings
 <br className='sm:block hidden' />
          </p>
        </div>
      </div>

      <div className={`ss:hidden flex justify-center items-center`}>
        {/* <GetStarted /> */}
      </div>
    </section>

    </motion.div>




  )
}

export default Hero