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

const Tokenomics = () => {
  return (
    <div className="my-28" id='tokenomics'>
      <div className="flex justify-center items-center">
        <div className="w-1/3">
          <img src={tokenomics} alt="Image" className="" />
        </div>

        <div className="bg-[#EFF7E2] rounded-[10px]">
          <div style={{ backgroundImage: `url(${bgImage})` }} className="bg-no-repeat bg-left-top">
            <div className="px-10 py-4">
              <h1 className='text-[45px] xl:text-[50px] 2xl:text-[60px] mb-[60px]'>Tokenomics</h1>

              <div>
                {/* Total supply */}
                <div className="flex items-center">
                  <p className="2xl:text-[18px] mr-10">Total Supply:</p>

                  <p className="flex justify-center items-center text-white text-[13px] 2xl:text-[16px] bg-[#36AE36] py-3 px-6 rounded-[5px]">
                    <img src={icon6} alt="Icon" className="mr-2 w-[19px]" />
                    <span>10,000,000,000</span>
                  </p>
                </div>

                {/* Token supply */}
                <div className="flex items-center my-7">
                  <p className="2xl:text-[18px] mr-10">Token Supply</p>

                  <div className="flex gap-x-5">
                    <p className="flex justify-center items-center text-white text-[13px] 2xl:text-[16px] bg-[#36AE36] py-[9px] px-6 rounded-[5px]">
                      <img src={icon6} alt="Icon" className="mr-2 w-[19px]" />
                      <span>Immutable</span>
                    </p>

                    <p className="flex justify-center items-center text-white text-[13px] 2xl:text-[16px] bg-[#36AE36] py-[9px] px-6 rounded-[5px]">
                      <img src={icon1} alt="Icon" className="mr-2 w-[16px]" />
                      <span>LP Burned</span>
                    </p>

                    <p className="flex justify-center items-center text-white text-[13px] 2xl:text-[16px] bg-[#36AE36] py-[9px] px-6 rounded-[5px]">
                      <img src={icon5} alt="Icon" className="mr-2 w-[25px]" />
                      <span>No Taxes</span>
                    </p>
                  </div>
                </div>

                {/* Animals */}
                <div className="flex items-center mb-7">
                  <p className="2xl:text-[18px] mr-10">Animals</p>

                  <div className="flex gap-x-5">
                    <p className="flex justify-center items-center text-white text-[13px] 2xl:text-[16px] bg-[#36AE36] py-3 px-6 rounded-[5px]">
                      <img src={icon2} alt="Icon" className="mr-2" />
                      <img src={vector4} alt="Icon" className="w-[14px]"/>
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
                  <p className="2xl:text-[18px] mr-10">Fundamentals</p>

                  <p className="flex justify-center items-center text-white text-[13px] 2xl:text-[16px] bg-[#36AE36] py-3 px-6 rounded-[5px] uppercase">
                    <img src={vector3} alt="Icon" className="mr-2 w-[13px]" />
                    <span>High</span>
                  </p>
                </div>

                {/* Blockchain */}
                <div className="flex items-center my-7">
                  <p className="2xl:text-[18px] mr-10">Blockchain</p>

                  <p className="flex justify-center items-center text-white text-[13px] 2xl:text-[16px] bg-[#36AE36] py-3 px-6 rounded-[5px] uppercase">
                    <img src={icon3} alt="Icon" className="mr-2 w-[18px]" />
                    <span>Base</span>
                  </p>
                </div>

                {/* Contact */}
                <div className="w-[535px]">
                  <p className="2xl:text-[18px] mr-10">Contact:</p>

                  <div className="flex justify-center items-center text-white text-[13px] 2xl:text-[16px] bg-[#36AE36] py-3 px-6 rounded-[5px] uppercase mt-4">
                    <p>0x3FEB4fEA5132695542F8Ede5076Ac43296d17c6d</p>
                    <img src={icon4} alt="Icon" className="ml-10 w-[18px] cursor-pointer" />
                  </div>
                </div>

                {/* Ticker */}
                <div className="flex items-center my-7">
                  <p className="2xl:text-[18px] mr-10">Ticker:</p>

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
