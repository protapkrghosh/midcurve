import React from 'react';
import buyImg from "@/assets/how to buy 1.png"

const Buy = () => {
    return (
        <div className='mb-[150px] md:flex justify-end items-center' id='buy'>

            <div className='md:w-[50%] mt-14 md:mt-0'>
                <p className='text-[45px] xl:text-[50px] 2xl:text-[60px] mb-[30px]'>How to Buy</p>

                <p className='text-[14px] 2xl:text-[16px] leading-6 mb-[20px] 2xl:w-[96%]'>Set up a crypto wallet on the Base network using Coinbase Wallet. If you're using a different wallet like MetaMask, follow these steps to connect to Base.</p>

                <p className='text-[14px] 2xl:text-[16px] leading-6 mb-[20px] 2xl:w-[95%]'>Transfer <span className='text-[#36AE36]'>Ethereum (ETH)</span> directly to your Base network wallet or send it to your Ethereum wallet and bridge ETH to Base via the offical Coinbase bridge or the Orbiter Finance bridge.</p>

                <p className='text-[14px] 2xl:text-[16px] leading-6 2xl:w-[95%]'>Visit Uniswap, which has an <span className='text-[#36AE36]'>ETH to $MIDCURVE</span> swap already loaded. Ensure your wallet is connected to the Base network.</p>
            </div>


            <div className='md:w-[50%]'>
                <img src={buyImg} alt="Image" className='xl:w-[90%] mx-auto md:mx-0' />
            </div>


        </div>
    );
};

export default Buy;