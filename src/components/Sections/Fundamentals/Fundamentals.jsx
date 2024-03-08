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
        <div>
            <p className='text-[60px] text-center mb-[155px]'>The Fundamentals</p>

            {/* first card */}


            <div className='w-[100%] h-[418px] bg-[pink] rounded-md flex mb-[213px]'>
                <div className='bg-no-repeat ml-[120px]' style={{ backgroundImage: `url(${fundaIcon1})` }}>

                    <div className='flex items-center mt-[-95px]'>
                        <p className='w-[634px] text-[26px] ml-[-40px] mr-[100px] mt-16'>Self-aware meme coin catering to the untapped potential of the mid-curve market. Bullish!</p>
                        <img src={funda1} alt="funda1" />
                    </div>
                </div>
            </div>


            <div className='w-[100%] h-[418px] bg-[pink] rounded-md flex mb-[278px]'>
                <div className='bg-no-repeat ml-[120px]' style={{ backgroundImage: `url(${fundaIcon1})` }}>

                    <div className='flex items-center mt-[-95px]'>
                        <p className='w-[634px] text-[26px] ml-[-40px] mr-[100px] mt-16'>Self-aware meme coin catering to the untapped potential of the mid-curve market. Bullish!</p>
                        <img src={funda1} alt="funda1" />
                    </div>
                </div>
            </div>


            <div className='w-[100%] h-[418px] bg-[pink] rounded-md flex mb-[213px]'>
                <div className='bg-no-repeat ml-[120px]' style={{ backgroundImage: `url(${fundaIcon3})` }}>

                    <div className='flex items-center mt-[-95px]'>
                        <p className='w-[634px] text-[26px] ml-[-40px] mr-[100px] mt-16'>Self-aware meme coin catering to the untapped potential of the mid-curve market. Bullish!</p>
                        <img src={funda3} alt="funda1" />
                    </div>
                </div>
            </div>






        </div>
    );
};

export default Fundamentals;