import { Button } from '@/components/ui/button';
import { FaTelegramPlane } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { VscGlobe } from "react-icons/vsc";

const Curve = () => {
  return (
    <div className='mt-[100px] md:mt-[150px] mb-[50px] md:flex justify-between items-center' id='connect'>
      <div className='md:w-1/2'>
        <p className='text-[45px] md:text-[41px] lg:text-[50px] 2xl:text-[60px]'>Join the Curve</p>

        <p className='text-[14px] 2xl:text-[16px] leading-6 mt-4 mb-[35px] xl:w-[82%] 2xl:w-[75%]'>Embrace $MIDCURVE and command your place in the meme coin market. Here, we all ride the curve, but only with $MIDCURVE do you choose your rank within it.</p>

        <Button className="text-[14px] 2xl:text-[16px] rounded-[5px] group cursor-pointer px-5 md:px-7 hidden lg:block">Buy $Midcurve</Button>
      </div>

      <div className='xl:mr-10 2xl:mr-20'>
        <div className='flex gap-x-7 lg:gap-x-20'>
          <div>
            <a href="" className="group w-[80px] h-[80px] bg-[#36AE36] hover:bg-[#3f993f] rounded-xl flex justify-center items-center duration-200">
              <FaTelegramPlane className="text-[36px] text-[#FFFFFF] mx-auto" />
            </a>

            <p className='text-[14px] 2xl:text-[16px] mt-4 ml-1'>Telegram</p>
          </div>

          <div>
            <a href="" className="group w-[80px] h-[80px] bg-[#36AE36] hover:bg-[#3f993f] rounded-xl flex justify-center items-center duration-200">
              <RiTwitterXLine className="text-[36px] text-[#FFFFFF] mx-auto" />
            </a>

            <p className='text-[14px] 2xl:text-[16px] mt-4 ml-1'>Twitter</p>
          </div>

          <div>
            <a href="" className="group w-[80px] h-[80px] bg-[#36AE36] hover:bg-[#3f993f] rounded-xl flex justify-center items-center duration-200">
              <VscGlobe className="text-[36px] text-[#FFFFFF] mx-auto" />
            </a>

            <p className='text-[14px] 2xl:text-[16px] mt-4 ml-1'>Warpcast</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curve;