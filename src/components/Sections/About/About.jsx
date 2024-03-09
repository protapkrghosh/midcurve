import React from 'react';
import aboutImg from "@/assets/photo47.png"

const About = () => {
  return (
    <div className='mt-[142px] mb-[150px] md:flex justify-center items-center container' id='about'>
      <div className='md:w-[50%]'>
        <img src={aboutImg} alt="Image" className='xl:w-[90%] mx-auto md:mx-0' />
      </div>

      <div className='md:w-[50%] mt-14 md:mt-0'>
        <h2 className='text-[45px] xl:text-[50px] 2xl:text-[60px] mb-[30px]'>About $Midcurve</h2>

        <p className='text-[14px] 2xl:text-[16px] leading-6 mb-[20px] 2xl:w-[96%]'><span className='text-[#36AE36]'>$MIDCURVE</span> speaks to the silent majority, the 80% who watchfrom the sidelines, who see the cycles of hype come and go. It's for those who chuckle at the highs, shrug at the lows, and find comfort in the vast middle. It's for you, the everyday person, who sees the value in a community built around the reality of the market — not just its extremes.</p>

        <p className='text-[14px] 2xl:text-[16px] leading-6 2xl:w-[95%]'><span className='text-[#36AE36]'>$MIDCURVE</span> isn't just another meme coin; it's the meme coin that mirrors the real you. We ask you now, what curve of the market are you on?</p>
      </div>
    </div>
  );
};

export default About;