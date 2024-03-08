import { FaTelegramPlane } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import bannerImg from "@/assets/photo561.png"
import icon1 from "@/assets/icons/image389.png"
import icon2 from "@/assets/icons/Uniswap.png"
import icon3 from "@/assets/icons/Group78.png"
import icon4 from "@/assets/icons/image42.png"
import icon5 from "@/assets/icons/Group56.png"
import { Button } from "@/components/ui/button";

const Banner = () => {
  return (
    <div>
      <div className="mt-[52px]">
        <img src={bannerImg} alt="Image" className="md:w-[75%] mx-auto" />
        <h1 className="text-[27px] md:text-[45px] lg:text-[50px] xl:text-[60px] 2xl:text-[70px] text-white text-center bg-[#1592D6] rounded-[10px] py-[10px] w-full md:w-[95%] lg:w-[76%] 2xl:w-[71%] mx-auto mt-12 mb-9 uppercase">Your tribe awaits</h1>

        <div className="flex justify-center">
          <Button className="text-[14px] 2xl:text-[16px] rounded-[5px] group cursor-pointer px-5 md:px-7">Buy $Midcurve</Button>
        </div>

        {/* Large screen icons */}
        <div className="hidden md:block">
          <div className="flex justify-center mt-10">
            <div className="flex items-center space-x-6">
              <a href="" className="group">
                <div className="bg-[#d0e9f7] hover:bg-[#bcd4e2] p-3 rounded-md duration-300">
                  <FaTelegramPlane className="text-[28px] text-[#1592D6] mx-auto" />
                </div>
              </a>

              <a href="" className="group">
                <div className="bg-[#C9C9C9] hover:bg-[#b8b7b7] p-3 rounded-md duration-300">
                  <RiTwitterXLine className="text-[28px] text-[#ffffff] mx-auto" />
                </div>
              </a>

              <a href="" className="group">
                <div className="bg-[#fdf6cf] hover:bg-[#ece6c1] p-3 rounded-md duration-300">
                  <img src={icon1} alt="Icon" className="w-[30px] mx-auto" />
                </div>
              </a>

              <a href="" className="group">
                <div className="bg-[#ffb3d7] hover:bg-[#e2a1be] p-3 rounded-md duration-300">
                  <img src={icon2} alt="Icon" className="w-[32px] mx-auto" />
                </div>
              </a>

              <a href="" className="group">
                <div className="bg-[#b6b6b6] hover:bg-[#a5a4a4] p-3 rounded-md duration-300">
                  <img src={icon3} alt="Icon" className="w-[30px] mx-auto" />
                </div>
              </a>

              <a href="" className="group">
                <div className="bg-[#cabddf] hover:bg-[#b9adcc] p-3 rounded-md duration-300">
                  <img src={icon4} alt="Icon" className="w-[30px] mx-auto" />
                </div>
              </a>

              <a href="" className="group">
                <div className="bg-[#c3e7c3] hover:bg-[#b2d3b2] p-3 rounded-md duration-300">
                  <img src={icon5} alt="Icon" className="w-[30px] mx-auto" />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Small screen icons */}
        <div className="block md:hidden">
          <div className="grid grid-cols-5 gap-5 mt-10">
            <a href="" className="group">
              <div className="bg-[#d0e9f7] hover:bg-[#bcd4e2] p-3 rounded-md duration-300">
                <FaTelegramPlane className="text-[28px] text-[#1592D6] mx-auto" />
              </div>
            </a>

            <a href="" className="group">
              <div className="bg-[#C9C9C9] hover:bg-[#b8b7b7] p-3 rounded-md duration-300">
                <RiTwitterXLine className="text-[28px] text-[#ffffff] mx-auto" />
              </div>
            </a>

            <a href="" className="group">
              <div className="bg-[#fdf6cf] hover:bg-[#ece6c1] p-3 rounded-md duration-300">
                <img src={icon1} alt="Icon" className="w-[30px] mx-auto" />
              </div>
            </a>

            <a href="" className="group">
              <div className="bg-[#ffb3d7] hover:bg-[#e2a1be] p-3 rounded-md duration-300">
                <img src={icon2} alt="Icon" className="w-[32px] mx-auto" />
              </div>
            </a>

            <a href="" className="group">
              <div className="bg-[#b6b6b6] hover:bg-[#a5a4a4] p-3 rounded-md duration-300">
                <img src={icon3} alt="Icon" className="w-[30px] mx-auto" />
              </div>
            </a>

            <a href="" className="group">
              <div className="bg-[#cabddf] hover:bg-[#b9adcc] p-3 rounded-md duration-300">
                <img src={icon4} alt="Icon" className="w-[30px] mx-auto" />
              </div>
            </a>

            <a href="" className="group">
              <div className="bg-[#c3e7c3] hover:bg-[#b2d3b2] p-3 rounded-md duration-300">
                <img src={icon5} alt="Icon" className="w-[30px] mx-auto" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
