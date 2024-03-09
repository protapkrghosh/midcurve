import React from 'react';
import funda1 from "@/assets/fundametals.png"
import fundaIcon1 from "@/assets/image395.png"
import funda2 from "@/assets/middle_5mirrored.png"
import fundaIcon2 from "@/assets/bgShape.png"
import funda3 from "@/assets/fundametals_low.png"
import fundaIcon3 from "@/assets/image4279.png"

const Fundamentals = () => {
  return (
    <div className='mb-3' id='fundamentals'>
      <p className='text-[33px] md:text-[45px] xl:text-[50px] 2xl:text-[60px] text-center mb-28 lg:mb-[155px]'>The Fundamentals</p>

      {/* First section */}
      <div className='bg-[#F8E2F6] rounded-md flex mb-32 lg:mb-[213px]'>
        <div style={{ backgroundImage: `url(${fundaIcon1})`}} className='bg-no-repeat bg-left bg-contain md:ml-[90px] lg:ml-[100px] xl:ml-[120px]'>
          <div className='flex flex-col-reverse md:flex-row justify-between items-center mt-[-55px] lg:mt-[-70px] xl:mt-[-95px] md:pt-3 lg:pt-0'>
            <p className='w-full md:w-[62%] xl:w-[40%] 2xl:w-[98%] text-[14px] md:text-[15px] lg:text-[17px] xl:text-[18px] 2xl:text-[24px] px-5 md:px-0 md:ml-[-40px] lg:mr-[100px] mt-10 md:mt-[7%] lg:mt-[8.5%] 2xl:mt-[7%] pb-10 md:pb-0'>Self-aware meme coin catering to the untapped potential of the mid-curve market. Bullish!</p>

            <img src={funda1} alt="funda1" className='w-[85%] md:w-[42%] lg:w-[47%] 2xl:w-full ml-[20px]' />
          </div>
        </div>
      </div>

      {/* Second section */}
      <div className='bg-[#E1E2F6] rounded-md flex mb-32 lg:mb-[213px]'>
        <div style={{ backgroundImage: `url(${fundaIcon2})` }} className='bg-no-repeat md:bg-right bg-contain md:mr-[90px] lg:mr-[100px] xl:mr-[120px]'>
          <div className='flex flex-col-reverse md:flex-row-reverse justify-between items-center mt-[-55px] lg:mt-[-95px] xl:mt-[-90px] md:pt-3 lg:pt-7'>
            <p className='w-full md:w-[55%] lg:w-[49%] xl:w-[54%] 2xl:w-[98%] text-[14px] md:text-[15px] lg:text-[17px] xl:text-[18px] 2xl:text-[24px] md:text-end px-5 md:px-0 md:mr-[-40px] mt-12 md:mt-[7%] 2xl:mt-[7%] lg:mt-[8.5%] pb-10 md:pb-0'>Though I'm at the end of the curve, I recognize that the middle is where most people find themselves. $MIDCURVE is about giving a nod to the majority, making sure they all feel seen valued.</p>

            <img src={funda2} alt="funda2" className='w-[85%] md:w-[42%] lg:w-[43%] 2xl:w-[85%]' />
          </div>
        </div>
      </div>

      {/* Third section */}
      <div className='bg-[#F8EFE2] rounded-md flex'>
        <div style={{ backgroundImage: `url(${fundaIcon3})`}} className='bg-no-repeat bg-left bg-contain md:ml-[90px] lg:ml-[100px] xl:ml-[120px]'>
          <div className='flex flex-col-reverse md:flex-row justify-between items-center mt-[-55px] lg:mt-[-70px] xl:mt-[-95px] md:pt-3 lg:pt-0'>
            <p className='w-full md:w-[62%] xl:w-[40%] 2xl:w-[98%] text-[14px] md:text-[15px] lg:text-[17px] xl:text-[18px] 2xl:text-[24px] px-5 md:px-0 md:ml-[-40px] lg:mr-[100px] 2xl:mr-[160px] mt-10 md:mt-[7%] lg:mt-[8.5%] 2xl:mt-[7%] pb-10 md:pb-0'>A memecoin for the middle crowd. Bullish!</p>

            <img src={funda3} alt="funda3" className='w-[85%] md:w-[42%] lg:w-[47%] xl:w-[49%] 2xl:w-[53%] ml-12 md:ml-[20px] md:mr-[-40px] lg:mr-[-80px] -mt-3 md:mt-0' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fundamentals;
