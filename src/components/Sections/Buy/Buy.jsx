import React from 'react';
import buyImg from "@/assets/how to buy 1.png"

const Buy = () => {
  return (
    <div className='mb-[150px] flex flex-col-reverse md:flex-row justify-end items-center gap-x-5' id='buy'>

      <div className='md:w-[52%] mt-14 md:mt-0'>
        <p className='text-[45px] xl:text-[50px] 2xl:text-[60px] mb-[30px]'>How to Buy</p>

        <div>
          <div className='flex items-start relative'>
            {/* Dashed border */}
            <div className='w-[67px] md:w-[89px] lg:w-[70px] xl:w-[43px] h-[1px] border-dashed border-t-[1px] rotate-90 border-[#36AE36] absolute left-[-10px] md:left-[-20px] lg:left-[-11px] xl:left-[3px] top-[83px] md:top-[95px] lg:top-[80px] xl:top-[68px]'/>

            {/* Circle */}
            <div className='w-12 h-12 border-[1px] border-dashed border-[#36AE36] rounded-full flex justify-center items-center mr-5'>
              <p className='w-9 h-9 text-white text-[15px] bg-[#36AE36] rounded-full m-1 flex justify-center items-center'>1</p>
            </div>

            <p className='text-[14px] 2xl:text-[16px] leading-6 mb-[20px] xl:w-[85%] 2xl:w-[79%]'>Set up a crypto wallet on the Base network using Coinbase Wallet. If you're using a different wallet like MetaMask, follow these steps to connect to Base.</p>
          </div>

          <div className='flex items-start relative'>
            {/* Dashed border */}
            <div className='w-[89px] md:w-[113px] lg:w-[70px] xl:w-[43px] h-[1px] border-dashed border-t-[1px] rotate-90 border-[#36AE36] absolute left-[-20px] md:left-[-31px] lg:left-[-11px] xl:left-[3px] top-[94px] md:top-[106px] lg:top-[80px] xl:top-[68px]' />

            {/* Circle */}
            <div className='w-12 h-12 border-[1px] border-dashed border-[#36AE36] rounded-full flex justify-center items-center mr-5'>
              <p className='w-9 h-9 text-white text-[15px] bg-[#36AE36] rounded-full m-1 flex justify-center items-center'>2</p>
            </div>

            <p className='text-[14px] 2xl:text-[16px] leading-6 mb-[20px] 2xl:w-[82%]'>Transfer <span className='text-[#36AE36]'>Ethereum (ETH)</span> directly to your Base network wallet or send it to your Ethereum wallet and bridge ETH to Base via the offical Coinbase bridge or the Orbiter Finance bridge.</p>
          </div>

          <div className='flex items-start'>
            {/* Circle */}
            <div className='w-12 h-12 border-[1px] border-dashed border-[#36AE36] rounded-full flex justify-center items-center mr-5'>
              <p className='w-9 h-9 text-white text-[15px] bg-[#36AE36] rounded-full m-1 flex justify-center items-center'>3</p>
            </div>

            <p className='text-[14px] 2xl:text-[16px] leading-6 2xl:w-[86%]'>Visit Uniswap, which has an <span className='text-[#36AE36]'>ETH to $MIDCURVE</span> swap already loaded. Ensure your wallet is connected to the Base network.</p>
          </div>
        </div>
      </div>


      <div className='md:w-[48%]'>
        <img src={buyImg} alt="Image" className='2xl:w-[90%] mx-auto md:mx-0' />
      </div>
    </div>
  );
};

export default Buy;