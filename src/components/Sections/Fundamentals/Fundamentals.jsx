import React from 'react';
import funda1 from "@/assets/fundametals.png"
import fundaIcon1 from "@/assets/image395.png"
import funda2 from "@/assets/middle_5mirrored.png"
import fundaIcon2 from "@/assets/bgShape.png"
import funda3 from "@/assets/fundametals_low.png"
import fundaIcon3 from "@/assets/image4279.png"
import { Backpack } from 'lucide-react';

const Fundamentals = () => {
  return (
    <div className='pb-40'>
      <p className='text-[33px] xl:text-[50px] 2xl:text-[60px] text-center mb-[155px]'>The Fundamentals</p>

      {/* first card */}
      <div className='bg-[#F8E2F6] rounded-md flex mb-[213px]'>
        <div className='bg-no-repeat bg-left bg-contain md:ml-[90px] lg:ml-[100px] xl:ml-[120px]' style={{ backgroundImage: `url(${fundaIcon1})` }}>
          <div className='flex flex-col-reverse md:flex-row justify-between items-center mt-[-55px] lg:mt-[-70px] xl:mt-[-95px] md:pt-3 lg:pt-0'>
            <p className='w-full md:w-[62%] xl:w-[40%] 2xl:w-full text-[14px] md:text-[15px] lg:text-[17px] xl:text-[18px] 2xl:text-[26px] px-5 md:px-0 md:ml-[-40px] lg:mr-[100px] mt-8 md:mt-[7%] lg:mt-[8.5%] pb-10 md:pb-0'>Self-aware meme coin catering to the untapped potential of the mid-curve market. Bullish!</p>
            <img src={funda1} alt="funda1" className='w-[85%] md:w-[42%] lg:w-[47%] 2xl:w-[45%] ml-[20px]' />
          </div>
        </div>
      </div>

      {/* 
      <div className='w-[100%] h-[418px] bg-[#E1E2F6] rounded-md flex mb-[278px]'>
        <div className='bg-no-repeat bg-right' style={{ backgroundImage: `url(${fundaIcon2})` }}>

          <div className='flex flex-row-reverse items-center mt-[-115px]'>
            <p className='w-[634px] text-[26px] ml-[-10px] mr-[100px] mt-16 text-end'>Self-aware meme coin catering to the untapped potential of the mid-curve market. Bullish!</p>
            <img src={funda2} alt="funda1" />
          </div>
        </div>
      </div>


      <div className='w-[100%] h-[418px] bg-[#F8EFE2] rounded-md flex mb-[213px]'>
        <div className='bg-no-repeat ml-[120px]' style={{ backgroundImage: `url(${fundaIcon3})` }}>

          <div className='flex items-center mt-[-180px] mr-[-120px]'>
            <p className='w-[634px] text-[26px] ml-[-40px] mr-[100px] mt-28'>A memecoin for the middle crowd. Bullish!</p>
            <img src={funda3} alt="funda1" />
          </div>
        </div>
      </div> */}






    </div>
  );
};

export default Fundamentals;