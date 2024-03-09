import tokenomics from "@/assets/tokenomics3.png"
import bgImage from "@/assets/heroImage12.png"
import icon1 from "@/assets/tokenomics_icons/icon1.png"
import icon2 from "@/assets/tokenomics_icons/icon2.png"
import icon3 from "@/assets/tokenomics_icons/icon3.png"
import icon4 from "@/assets/tokenomics_icons/icon4.png"
import icon5 from "@/assets/tokenomics_icons/icon5.png"
import icon6 from "@/assets/tokenomics_icons/icon6.png"
import vector1 from "@/assets/tokenomics_icons/vector1.png"
import vector2 from "@/assets/tokenomics_icons/vector2.png"
import vector3 from "@/assets/tokenomics_icons/vector3.png"
import vector4 from "@/assets/tokenomics_icons/vector4.png"
import { IoCopy } from "react-icons/io5";
import { MdLibraryAddCheck } from "react-icons/md";
import { useState } from "react"
import toast from "react-hot-toast"

const Tokenomics = () => {
  const [copied, setCopied] = useState(false);

  // Copy the contact ID =============
  const copyLink = () => {
    if (copied === false) {
      navigator.clipboard.writeText('0X3FEB4FEA5132695542F8EDE5076AC43296D17C6D').then(() => {
        toast.success('Contact ID coped');
      });
    }
  };

  return (
    <div className="my-24 lg:my-28" id='tokenomics'>
      <div className="lg:flex xl:justify-center 2xl:justify-between items-center">
        <div className="xl:w-1/3 2xl:w-2/5">
          <img src={tokenomics} alt="Image" className="w-[72%] md:w-[50%] lg:w-full" />
        </div>

        <div className="bg-[#EFF7E2] rounded-[10px] mt-14 lg:mt-0">
          <div style={{ backgroundImage: `url(${bgImage})` }} className="bg-no-repeat bg-left-top">
            <div className="px-5 lg:px-10 py-4">
              <h1 className='text-[45px] xl:text-[50px] 2xl:text-[60px] mb-[60px]'>Tokenomics</h1>

              <div>
                {/* Total supply */}
                <div className="flex items-center">
                  <p className="2xl:text-[18px] mr-5 lg:mr-10">Total Supply:</p>

                  <p className="flex justify-center items-center text-white text-[13px] 2xl:text-[16px] bg-[#36AE36] py-3 px-6 rounded-[5px]">
                    <img src={icon6} alt="Icon" className="mr-2 w-[19px]" />
                    <span>10,000,000,000</span>
                  </p>
                </div>

                {/* Token supply */}
                <div className="flex items-center my-7">
                  <p className="2xl:text-[18px] mr-5 lg:mr-10">Token Supply</p>

                  <div className="flex gap-x-5">
                    <p className="flex flex-col lg:flex-row justify-center items-center text-white text-[13px] 2xl:text-[16px] bg-[#36AE36] py-[9px] px-2 md:px-3 lg:px-6 rounded-[5px]">
                      <img src={icon6} alt="Icon" className="mr-2 w-[19px] mb-1 lg:mb-0" />
                      <span>Immutable</span>
                    </p>

                    <p className="flex flex-col lg:flex-row justify-center items-center text-white text-[13px] 2xl:text-[16px] bg-[#36AE36] py-[9px] px-2 md:px-3 lg:px-6 rounded-[5px]">
                      <img src={icon1} alt="Icon" className="mr-2 w-[16px] mb-1 lg:mb-0" />
                      <span>LP Burned</span>
                    </p>

                    <p className="flex flex-col lg:flex-row justify-center items-center text-white text-[13px] 2xl:text-[16px] bg-[#36AE36] py-[9px] px-2 md:px-3 lg:px-6 rounded-[5px]">
                      <img src={icon5} alt="Icon" className="mr-2 w-[25px] mb-1 lg:mb-0" />
                      <span>No Taxes</span>
                    </p>
                  </div>
                </div>

                {/* Animals */}
                <div className="flex items-center mb-7">
                  <p className="2xl:text-[18px] mr-5 lg:mr-10">Animals</p>

                  <div className="flex gap-x-5">
                    <p className="flex justify-center items-center text-white text-[13px] 2xl:text-[16px] bg-[#36AE36] py-3 px-6 rounded-[5px]">
                      <img src={icon2} alt="Icon" className="mr-2" />
                      <img src={vector4} alt="Icon" className="w-[14px]" />
                    </p>

                    <p className="flex justify-center items-center text-white text-[13px] 2xl:text-[16px] bg-[#36AE36] py-3 px-6 rounded-[5px]">
                      <img src={vector1} alt="Icon" className="mr-2 w-[20px]" />
                      <img src={vector4} alt="Icon" className="w-[14px]" />
                    </p>

                    <p className="flex justify-center items-center text-white text-[13px] 2xl:text-[16px] bg-[#36AE36] py-3 px-6 rounded-[5px]">
                      <img src={vector2} alt="Icon" className="mr-2" />
                      <img src={vector4} alt="Icon" className="w-[14px]" />
                    </p>
                  </div>
                </div>

                {/* Fundamentals */}
                <div className="flex items-center">
                  <p className="2xl:text-[18px] mr-5 lg:mr-10">Fundamentals</p>

                  <p className="flex justify-center items-center text-white text-[13px] 2xl:text-[16px] bg-[#36AE36] py-3 px-6 rounded-[5px] uppercase">
                    <img src={vector3} alt="Icon" className="mr-2 w-[13px]" />
                    <span>High</span>
                  </p>
                </div>

                {/* Blockchain */}
                <div className="flex items-center my-7">
                  <p className="2xl:text-[18px] mr-5 lg:mr-10">Blockchain</p>

                  <p className="flex justify-center items-center text-white text-[13px] 2xl:text-[16px] bg-[#36AE36] py-3 px-6 rounded-[5px] uppercase">
                    <img src={icon3} alt="Icon" className="mr-2 w-[18px]" />
                    <span>Base</span>
                  </p>
                </div>

                {/* Contact */}
                <div className="w-full md:w-[535px] 2xl:w-[640px]">
                  <p className="2xl:text-[18px] mr-10">Contact:</p>

                  <div className="flex justify-center items-center text-white text-[10px] md:text-[13px] 2xl:text-[16px] bg-[#36AE36] py-3 md:px-6 rounded-[5px] uppercase mt-4">
                    <p className="mr-5">0x3FEB4fEA5132695542F8Ede5076Ac43296d17c6d</p>
                    <button onClick={() => { setCopied(!copied); copyLink() }}>
                      {
                        copied ? <MdLibraryAddCheck className="text-[20px] cursor-pointer hidden md:block" /> :
                          <IoCopy className="text-[20px] cursor-pointer hidden md:block" />
                      }
                    </button>
                  </div>
                </div>

                {/* Ticker */}
                <div className="flex items-center my-7">
                  <p className="2xl:text-[18px] mr-5 lg:mr-10">Ticker:</p>

                  <p className="flex justify-center items-center text-white text-[13px] 2xl:text-[16px] bg-[#36AE36] py-3 px-6 rounded-[5px] uppercase">
                    <span>$ Midcurve</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
